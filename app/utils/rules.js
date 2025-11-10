import pkg from 'lodash'; const { concat, map, forEach, reduce } = pkg
import { CONNECTORS, OPERATORS, TYPES, VARIABLE_NAMES, DISPLAY_OPERATORS } from '~/enums/rules'
/**
 *
 * @param json
 * @example
 * {
 *   AND: [
 *     {
 *       type: 'QUESTION',
 *       questionId: 1,
 *       operator: 'EQUALS',
 *       answer: [2]
 *     },
 *     {
 *       type: 'QUESTION',
 *       questionId: 2,
 *       operator: 'NOT_EQUALS,
 *       answer: [3]
 *     },
 *     {
 *       type: 'QUESTION',
 *       questionId: 2,
 *       operator: 'NOT_CONTAINS,
 *       answer: [3]
 *     },
 *     { type: 'GROUP',
 *       operator: 'EQUALS',
 *       groups: [1, 2, 3]
 *     }
 *   ],
 *   OR: [{
 *    type: 'QUESTION',
 *    questionId: 1,
 *     operator: 'CONTAINS',
 *     answer: [1, 3]
 *   }]
 * }
 */
/**
 * Transform JSON to expression object to return to backend
 * @param json
 * @returns {{'@type': string, arguments: [string], operand: *, operator: {'@type': string}}|{expression, '@type': string}|{'@type': string, expressions: *[]}|null}
 */
export const jsonToExpression = (json) => {
  const andExpressionsJson = json[CONNECTORS.AND] || []
  const orExpressionsJson = json[CONNECTORS.OR] || []
  // if there are no expressions defined, return null
  if (noExpressions(andExpressionsJson, orExpressionsJson)) {
    return null
  }
  // if there is only one expression return only it mapped
  if (onlyOneExpression(andExpressionsJson, orExpressionsJson)) {
    if (andExpressionsJson.length) {
      return mapJsonExpression(andExpressionsJson[0])
    } else if (orExpressionsJson.length) {
      return mapJsonExpression(orExpressionsJson[0])
    }
  }
  // if there are more than one expression return the full experience
  const fullExpression = createExpressionsArray()
  const andExpressions = jsonExpressionsToArray(andExpressionsJson)
  fullExpression.expressions = concat(fullExpression.expressions, andExpressions)
  if (orExpressionsJson.length) {
    const orExpressions = basicOrExpressions()
    orExpressions.expressions = jsonExpressionsToArray(orExpressionsJson)
    if (andExpressionsJson.length === 0) {
      return orExpressions
    }
    fullExpression.expressions = concat(fullExpression.expressions, orExpressions)
  }
  return fullExpression
}
/**
 * Transform backend representation of expressions to json
 * @param expressionArray
 * @returns {{OR: *[], AND: *[]}}
 */
export const expressionToJson = (expressionArray = {}) => {
  const resultJSON = {
    AND: [],
    OR: []
  }
  if (!expressionArray) {
    return resultJSON
  }
  const expressionType = expressionArray['@type']
  if (!expressionType) {
    return resultJSON
  }
  const expressions = [CONNECTORS.OR, CONNECTORS.AND].includes(expressionType) ? expressionArray.expressions : [expressionArray]
  const orExpression = expressionType === CONNECTORS.OR
  return reduce(expressions, (result, expression) => {
    if (orExpression) {
      result.OR.push(singleExpressionToJson(expression))
    } else if (expression['@type'] === CONNECTORS.OR) {
      forEach(expression.expressions, (expression) => {
        result.OR.push(singleExpressionToJson(expression))
      })
    } else {
      result.AND.push(singleExpressionToJson(expression))
    }
    return result
  }, resultJSON)
}
// EXPRESSION TO JSON
export const singleExpressionToJson = (expression) => {
  if (expression['@type'] === TYPES.OPERATION) {
    const result = retrieveOperandExpression(expression)
    if (result.type === VARIABLE_NAMES.QUESTION_ANSWER) {
      result.operator = result.answer.length === 1 ? DISPLAY_OPERATORS.EQUALS : DISPLAY_OPERATORS.CONTAINS
    } else if (result.type === VARIABLE_NAMES.GROUPS) {
      result.operator = result.groups.length === 1 ? DISPLAY_OPERATORS.EQUALS : DISPLAY_OPERATORS.CONTAINS
    }
    return result
  } else if (expression['@type'] === TYPES.NOT) {
    const result = retrieveOperandExpression(expression.expression)
    if (result.type === VARIABLE_NAMES.QUESTION_ANSWER) {
      result.operator = result.answer.length === 1 ? DISPLAY_OPERATORS.NOT_EQUALS : DISPLAY_OPERATORS.NOT_CONTAINS
    } else if (result.type === VARIABLE_NAMES.GROUPS) {
      result.operator = result.groups.length === 1 ? DISPLAY_OPERATORS.NOT_EQUALS : DISPLAY_OPERATORS.NOT_CONTAINS
    }
    return result
  }
}

export const retrieveOperandExpression = (expression) => {
  const operand = expression.operand
  const varName = operand.operand.varName
  if (varName === VARIABLE_NAMES.GROUPS) {
    return {
      type: varName,
      groups: parseOperandArguments(varName, operand.arguments)
    }
  } else if (varName === VARIABLE_NAMES.QUESTION_ANSWER) {
    return {
      type: varName,
      questionId: Number(operand.operand.key),
      answer: parseOperandArguments(varName, operand.arguments)
    }
  }
}

export const parseOperandArguments = (varName, args = []) => {
  if (varName === VARIABLE_NAMES.GROUPS) {
    return map(args, (item) => {
      return Number(item)
    })
  } else if (varName === VARIABLE_NAMES.QUESTION_ANSWER) {
    let result = args[0] || ''
    if (result.includes('\'')) {
      result = result.replaceAll('\'', '')
      result = JSON.parse(result)
    } else {
      result = []
    }
    return result
  } else {
    return []
  }
}

// JSON TO EXPRESSION
export const noExpressions = (andExpressions, orExpressions) => {
  return andExpressions.length === 0 && orExpressions.length === 0
}
export const onlyOneExpression = (andExpressions, orExpressions) => {
  return (andExpressions.length + orExpressions.length) === 1
}
/**
 * Transforms a single JSON expression into array of expression to return to backend
 * @param expressions
 * @returns {unknown[]}
 */
export const jsonExpressionsToArray = (expressions) => {
  return map(expressions, mapJsonExpression)
}
export const mapJsonExpression = (expression) => {
  if ([DISPLAY_OPERATORS.EQUALS, DISPLAY_OPERATORS.CONTAINS].includes(expression.operator)) {
    return containsExpression(expression.type, {
      ...expression
    })
  } else if ([DISPLAY_OPERATORS.NOT_EQUALS, DISPLAY_OPERATORS.NOT_CONTAINS].includes(expression.operator)) {
    return notContainsExpression(expression.type, {
      ...expression
    })
  }
}
/**
 * Returns a base for expressions to return to backend
 * @returns {{'@type': string, expressions: *[]}}
 */
export const createExpressionsArray = () => {
  return {
    '@type': CONNECTORS.AND,
    expressions: []
  }
}
/**
 * Returns basic OR expression to add to the list of expressions to return to backend
 * @returns {{'@type': string, expressions: *[]}}
 */
export const basicOrExpressions = () => {
  return {
    '@type': CONNECTORS.OR,
    expressions: []
  }
}
export const basicElvisExpression = (expression) => {
  return {
    '@type': TYPES.OPERATION,
    operand: { ...expression },
    operator: {
      '@type': OPERATORS.ELVIS
    },
    arguments: ['false']
  }
}
/**
 * Based on the question id and list of answers returns an expression to return to backend
 * @param variableName
 * @param questionId
 * @param answer
 * @param groups
 * @returns {{'@type': string, arguments: string[], operand: {varName: string, '@type': string, key}, operator: {'@type': string, name: string, nullCheck: boolean}}}
 */
export const basicContainsExpression = (variableName, { questionId, answer, groups }) => {
  let type = TYPES.MAP_OPERAND
  let name = OPERATORS.CONTAINS
  if (variableName === VARIABLE_NAMES.GROUPS) {
    type = TYPES.VAR_OPERAND
    name = OPERATORS.CONTAINS_ANY
  }
  const operand = {
    '@type': type,
    varName: variableName
  }
  let argumentsResult = []
  if (variableName === VARIABLE_NAMES.QUESTION_ANSWER) {
    argumentsResult = [
      `'${JSON.stringify(answer)}'`
    ]
  } else if (variableName === VARIABLE_NAMES.GROUPS) {
    argumentsResult = map(groups, (group) => {
      return String(group)
    })
  }
  if (questionId) {
    operand.key = String(questionId)
  }
  return {
    '@type': TYPES.OPERATION,
    operand,
    operator: {
      '@type': TYPES.FUNCTION,
      name,
      nullCheck: true
    },
    arguments: argumentsResult
  }
}
/**
 * Returns a basic for a NOT expression
 * @param expression
 * @returns {{expression, '@type': string}}
 */
export const basicNotExpression = (expression) => {
  return {
    '@type': TYPES.NOT,
    expression: {
      ...expression
    }
  }
}
/**
 * Returns a basic contains expression based on the question id and list of answers
 * @param variableName
 * @param questionId
 * @param answer
 * @param groups []
 */
export const containsExpression = (variableName, { questionId, answer, groups }) => {
  const expression = basicContainsExpression(variableName, { questionId, answer, groups })
  return basicElvisExpression(expression)
}
/**
 * Returns a basic NOT contains expression based on the quesiont id and list of answers
 * @param variableName String
 * @param questionId
 * @param answer
 * @param groups list of groups
 * @returns {{expression, '@type': string}}
 */
export const notContainsExpression = (variableName, { questionId, answer, groups }) => {
  const containsExpression = basicContainsExpression(variableName, { questionId, answer, groups })
  return basicNotExpression(basicElvisExpression(containsExpression))
}
