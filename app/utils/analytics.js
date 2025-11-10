/*
 * analytics.js
 * The copyright of this file belongs to Workademy GmbH. The file cannot be
 * reproduced in whole or in part, stored in a retrieval system, transmitted
 * in any form, or by any means electronic, mechanical, or otherwise, without
 * the prior permission of the owner. Please refer to the terms of the license
 * agreement.
 *
 * (c) 2021 Workademy GmbH, Rights Reserved.
 *
 * olga
 * 22/04/2021, 21:42
 */

import pkg from 'lodash'; const { each, findIndex, map, reduce } = pkg

import moment from 'moment'
import { fixHtml } from '~/utils/utils'
import aggregationTypes from '~/enums/aggregationTypes'

const tinycolor = require('tinycolor2')
const alphaColor = (color) => {
  return tinycolor(color).setAlpha(0.2).toString()
}
export const getCourseLabel = (labelMapping, item) => {
  return labelMapping && labelMapping.courses && labelMapping.courses[item.courseId] ? fixHtml(labelMapping.courses[item.courseId].name) : item.courseId
}
export const getCampaignLabel = (labelMapping, item) => {
  return labelMapping && labelMapping.campaigns && labelMapping.campaigns[item.campaignId] ? fixHtml(labelMapping.campaigns[item.campaignId].name) : item.campaignId
}
export const getModuleLabel = (labelMapping, item) => {
  return labelMapping && labelMapping.modules && labelMapping.modules[item.moduleId] ? fixHtml(labelMapping.modules[item.moduleId].name) : item.moduleId
}
export const getLectureLabel = (labelMapping, item) => {
  return labelMapping && labelMapping.lectures && labelMapping.lectures[item.lectureId] ? fixHtml(labelMapping.lectures[item.lectureId].name) : item.lectureId
}
export const getCountryLabel = (labelMapping, item) => {
  return labelMapping && labelMapping.countries && labelMapping.countries[item.countryId] ? fixHtml(labelMapping.countries[item.countryId].name) : item.countryId
}
export const getQuestionLabel = (labelMapping, item) => {
  return labelMapping && labelMapping.questionAnswers && labelMapping.questionAnswers[item.questionAnswerId] ? fixHtml(labelMapping.questionAnswers[item.questionAnswerId].name) : item.questionAnswerId
}
export const timeFormattingString = (aggregationType) => {
  switch (aggregationType) {
    case aggregationTypes.HOUR:
      return 'kk:mm'
    case aggregationTypes.DAY:
      return 'MMM DD'
    case aggregationTypes.MONTH:
      return 'MMM'
    case aggregationTypes.YEAR:
      return 'YYYY'
    default:
      return 'MMM'
  }
}
export const ticksLabelFormatting = (label = '', firstWordOnly = true, CHAR_LIMIT = 10) => {
  let newLabel = label
  if (firstWordOnly) {
    if (/\s/.test(newLabel)) {
      newLabel = newLabel.split(' ')[0] + '...'
    }
  }
  newLabel = newLabel.length > CHAR_LIMIT && !newLabel.includes('...') ? newLabel.substr(0, CHAR_LIMIT) + '...' : newLabel
  return newLabel
}
export const selectDeselectItems = (selectedArray = [], item = {}) => {
  const selected = selectedArray.slice(0)
  const index = findIndex(selected, { ...item })
  if (index > -1) {
    selected.splice(index, 1)
  } else {
    selected.push(item)
  }
  return selected
}
export const lecturesAnalyticsToBarChartConfig = (analyticsData, labelMapping, label, color) => {
  const labels = map(analyticsData, (item) => {
    return getCourseLabel(labelMapping, item)
  })
  const data = map(analyticsData, (item) => {
    return item.amountSeen
  })
  return {
    labels,
    datasets: [{
      backgroundColor: alphaColor(color),
      hoverBackgroundColor: color,
      label,
      data,
      borderWidth: 1,
      borderColor: color
    }]
  }
}
export const enrollmentsAnalyticsToBarChartConfig = (analyticsData, labelMapping, labelObject, colorObject) => {
  const labels = []
  const amountStarted = []
  const amountEnded = []
  const amountAbandoned = []
  each(analyticsData, (item) => {
    const label = getCourseLabel(labelMapping, item)
    labels.push(label)
    if (item.amountStarted) {
      amountStarted.push(item.amountStarted)
    }
    if (item.amountEnded) {
      amountEnded.push(item.amountEnded)
    }
    if (item.amountAbandoned) {
      amountAbandoned.push(item.amountAbandoned)
    }
  })
  const datasets = []
  if (amountStarted.length) {
    datasets.push({
      backgroundColor: alphaColor(colorObject.amountStarted),
      hoverBackgroundColor: colorObject.amountStarted,
      label: labelObject.amountStarted,
      data: amountStarted,
      borderWidth: 1,
      borderColor: colorObject.amountStarted
    })
  }
  if (amountEnded.length) {
    datasets.push({
      backgroundColor: alphaColor(colorObject.amountEnded),
      hoverBackgroundColor: colorObject.amountEnded,
      label: labelObject.amountEnded,
      data: amountEnded,
      borderWidth: 1,
      borderColor: colorObject.amountEnded
    })
  }
  if (amountAbandoned.length) {
    datasets.push({
      backgroundColor: alphaColor(colorObject.amountAbandoned),
      hoverBackgroundColor: colorObject.amountAbandoned,
      label: labelObject.amountAbandoned,
      data: amountAbandoned,
      borderWidth: 1,
      borderColor: colorObject.amountAbandoned
    })
  }
  return {
    labels,
    datasets
  }
}
export const certificatesAnalyticsToBarChartConfig = (analyticsData, labelMapping, labelObject, colorObject) => {
  const labels = []
  const issued = []
  each(analyticsData, (item) => {
    const label = getCourseLabel(labelMapping, item)
    labels.push(label)
    issued.push(item.amountIssued)
  })
  return {
    labels,
    datasets: [{
      yAxisID: 'issued',
      backgroundColor: alphaColor(colorObject.issued),
      hoverBackgroundColor: colorObject.issued,
      label: labelObject.issued,
      data: issued,
      borderWidth: 1,
      borderColor: colorObject.issued
    }]
  }
}
export const questionsAnswersToBarChartConfig = (analyticsData, labelMapping, labelObject, colorObject) => {
  const labels = []
  const correct = []
  const wrong = []
  each(analyticsData, (item) => {
    const label = getCourseLabel(labelMapping, item)
    labels.push(label)
    correct.push(item.amountCorrect)
    wrong.push(item.amountWrong)
  })
  return {
    labels,
    datasets: [
      {
        yAxisID: 'answered',
        backgroundColor: alphaColor(colorObject.amountCorrect),
        hoverBackgroundColor: colorObject.amountCorrect,
        label: labelObject.amountCorrect,
        data: correct,
        borderWidth: 1,
        borderColor: colorObject.amountCorrect
      },
      {
        yAxisID: 'answered',
        backgroundColor: alphaColor(colorObject.amountWrong),
        hoverBackgroundColor: colorObject.amountWrong,
        label: labelObject.amountWrong,
        data: wrong,
        borderWidth: 1,
        borderColor: colorObject.amountWrong
      }
    ]
  }
}
export const campaignsToBarChartConfig = (analyticsData, labelMapping, labelObject, colorObject) => {
  const labels = []
  const redeemed = []
  const score = []
  each(analyticsData, (item) => {
    const label = getCampaignLabel(labelMapping, item)
    labels.push(label)
    redeemed.push(item.amountRedeemed)
  })
  return {
    labels,
    datasets: [{
      backgroundColor: alphaColor(colorObject.amountRedeemed),
      hoverBackgroundColor: colorObject.amountRedeemed,
      label: labelObject.amountRedeemed,
      data: redeemed,
      borderWidth: 1,
      borderColor: colorObject.amountRedeemed
    }
    ]
  }
}
export const workspaceUsersToBarChartConfig = (analyticsData, labelMapping, labelObject, colorObject) => {
  const labels = []
  const loggedin = []
  const registered = []
  each(analyticsData, (item) => {
    const label = getCountryLabel(labelMapping, item)
    labels.push(label)
    if (item.amountLogin) {
      loggedin.push(item.amountLogin)
    }
    if (item.amountRegister) {
      registered.push(item.amountRegister)
    }
  })
  const datasets = []
  datasets.push({
    backgroundColor: alphaColor(colorObject.amountLogin),
    hoverBackgroundColor: colorObject.amountLogin,
    label: labelObject.amountLogin,
    data: loggedin,
    borderWidth: 1,
    borderColor: colorObject.amountLogin
  })
  if (registered.length) {
    datasets.push({
      backgroundColor: alphaColor(colorObject.amountRegister),
      hoverBackgroundColor: colorObject.amountRegister,
      label: labelObject.amountRegister,
      data: registered,
      borderWidth: 1,
      borderColor: colorObject.amountRegister
    })
  }
  return {
    labels,
    datasets
  }
}
export const workspaceUsersBarChartOptions = {
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 20
    }
  },
  scales: {
    yAxes: [{
      type: 'linear',
      position: 'left',
      ticks: {
        beginAtZero: true,
        precision: 0
      },
      gridLines: {
        display: true,
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: true
      }
    }],
    xAxes: [{
      ticks: {
        padding: 5
      },
      gridLines: {
        display: true,
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: false
      }
    }]
  }
}
export const questionAnswersBarChartOptions = {
  legend: {
    display: false,
    position: 'right'
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 20
    }
  },
  scales: {
    yAxes: [{
      id: 'answered',
      type: 'linear',
      position: 'left',
      ticks: {
        beginAtZero: true,
        precision: 0
      },
      gridLines: {
        display: true,
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: true
      }
    }],
    xAxes: [{
      ticks: {
        padding: 5,
        callback: (label) => {
          return ticksLabelFormatting(label)
        }
      },
      gridLines: {
        display: true,
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: false
      }
    }]
  }
}
export const certificatesBarChartOptions = {
  legend: {
    display: false,
    position: 'right'
  },
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 20
    }
  },
  scales: {
    yAxes: [{
      id: 'issued',
      type: 'linear',
      position: 'left',
      ticks: {
        beginAtZero: true,
        precision: 0
      },
      gridLines: {
        display: true,
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: true
      }
    }],
    xAxes: [{
      ticks: {
        padding: 5,
        callback: (label) => {
          return ticksLabelFormatting(label)
        }
      },
      gridLines: {
        display: true,
        drawBorder: true,
        drawOnChartArea: false,
        drawTicks: false
      }
    }]
  }
}
export const timeseriesLineChartOptions = (aggregationType = aggregationTypes.MONTH, title) => {
  const unit = aggregationType.toLowerCase()
  return {
    title: {
      display: true,
      text: title
    },
    legend: {
      position: 'right'
    },
    scales: {
      yAxes: [{
        type: 'linear',
        position: 'left',
        ticks: {
          beginAtZero: true,
          precision: 0
        },
        gridLines: {
          display: true,
          drawBorder: true,
          drawOnChartArea: false,
          drawTicks: true
        }
      }],
      xAxes: {
        type: 'time',
        gridLines: {
          display: true,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: false
        },
        time: {
          unit
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }
}
export const timeseriesLineChartConfigDataseriesByFact = (
  analyticsData,
  labelObject,
  colorObject,
  series = [],
  aggregationType = aggregationTypes.MONTH
) => {
  const labels = []
  const datasets = []
  const format = timeFormattingString(aggregationType)
  each(series, (item) => {
    datasets.push({
      pointBorderWidth: 1,
      pointBorderColor: colorObject[item],
      pointColor: alphaColor(colorObject[item]),
      pointRadius: 3,
      fill: false,
      pointHoverBackgroundColor: colorObject[item],
      pointHoverBorderColor: colorObject[item],
      borderColor: colorObject[item],
      borderWidth: 1,
      pointHitRadius: 10,
      backgroundColor: alphaColor(colorObject[item]),
      hoverBackgroundColor: colorObject[item],
      label: labelObject[item],
      data: []
    })
  })
  each(analyticsData, (item) => {
    labels.push(moment(item.timestamp).format(format))
    each(series, (seriesItem, i) => {
      let datapoint = item[seriesItem]
      if (datapoint === null) {
        datapoint = 0
      }
      datasets[i].data.push(datapoint)
    })
  })
  return {
    labels,
    datasets
  }
}
export const timeseriesLineChartConfig = (
  series = [],
  labels = [],
  colors = [],
  fact = '',
  aggregationType = aggregationTypes.MONTH
) => {
  if (series.length === 0) {
    return {}
  }
  const xAxisLabels = []
  const datasets = []
  const format = timeFormattingString(aggregationType)
  each(labels, (item, index) => {
    const color = colors[index % labels.length]
    datasets.push({
      pointBorderWidth: 1,
      pointBorderColor: color,
      pointColor: alphaColor(color),
      pointRadius: 2,
      fill: false,
      pointHoverBackgroundColor: color,
      pointHoverBorderColor: color,
      borderColor: color,
      borderWidth: 1,
      pointHitRadius: 10,
      backgroundColor: alphaColor(color),
      hoverBackgroundColor: color,
      label: item,
      data: []
    })
  })
  each(series[0], (item, index) => {
    xAxisLabels.push(moment(item.timestamp).format(format))
    each(series, (seriesItem, i) => {
      let datapoint = seriesItem && seriesItem[index] ? seriesItem[index][fact] : null
      if (datapoint === null) {
        datapoint = 0
      }
      datasets[i].data.push(datapoint)
    })
  })
  return {
    labels: xAxisLabels,
    datasets
  }
}
export const calculateFunnelWidth = (moduleAmount) => {
  if (moduleAmount < 5) {
    return 600
  } else if (moduleAmount >= 5 && moduleAmount < 10) {
    return 800
  } else if (moduleAmount >= 10 && moduleAmount < 15) {
    return 1500
  } else if (moduleAmount >= 15 && moduleAmount < 20) {
    return 2000
  } else if (moduleAmount >= 20) {
    return 3000
  }
}
export const funnelDataMultipleCourses = (modulesArr, enrollments, labelMapping, translations) => {
  // Sort modules by module number
  const modules = modulesArr.map(item => ({
    ...item,
    content: [...item.content].sort((a, b) =>
      (item.extra.modules[a.moduleId]?.number || 0) -
      (item.extra.modules[b.moduleId]?.number || 0)
    )
  }))

  const values = []
  const labels = []
  const subLabels = []
  values[0] = []
  labels.push(translations.firstLabel)
  const modulesAmount = reduce(modules, (result, module, key) => {
    if (module.content && module.content.length && module.content.length > result) {
      return module.content.length
    } else {
      return result
    }
  }, 0)
  for (let i = 1; i <= modulesAmount; i++) {
    let appendToLabel = i
    if (enrollments.length === 1) {
      appendToLabel = getModuleLabel(modules[0].extra, modules[0].content[i - 1])
      appendToLabel = ticksLabelFormatting(appendToLabel, false, 20)
    }
    labels.push(`${translations.moduleLabels} ${appendToLabel}`)
    values.push([])
  }
  each(enrollments, (enrollmentObject) => {
    each(values, (valuesArray, valuesIndex) => {
      if (valuesIndex === 0) {
        valuesArray.push(enrollmentObject.amountStarted)
      } else {
        valuesArray.push(0)
      }
    })

    let label = getCourseLabel(labelMapping, enrollmentObject)
    label = ticksLabelFormatting(label, false, 30)
    subLabels.push(label)
  })
  each(modules, (module, index) => {
    const content = module.content || 0
    each(content, (c, i) => {
      values[i + 1][index] = c.amountDone
    })
  })
  return {
    values,
    labels,
    subLabels,
    width: calculateFunnelWidth(modulesAmount)
  }
}
