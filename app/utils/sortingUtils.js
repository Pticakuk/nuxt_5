import pkg from 'lodash'; const { keys, each, map } = pkg
export const KEYWORD_FIELDS = ['name', 'description']
export const makeFirstOrAdd = (array, element) => {
  const index = array.indexOf(element)
  if (index !== -1) {
    // Element exists, remove it from the current position
    array.splice(index, 1)
  }
  // Add (or re-add) the element to the start of the array
  array.unshift(element)
  return array
}
export const sortingObject = (sortingDefaults = {}, sortBy, sortDesc) => {
  let sortingArray = keys(sortingDefaults)
  const sortingObj = {}
  if (sortBy) {
    sortingArray = makeFirstOrAdd(sortingArray, sortBy)
  }
  sortingArray = map(sortingArray, (val) => {
    if (KEYWORD_FIELDS.includes(val)) {
      return `${val}.keyword`
    } else {
      return val
    }
  })
  sortingObj.sort = sortingArray.join()
  each(sortingArray, (val) => {
    sortingObj[`${val}.dir`] = (val === sortBy || val === `${sortBy}.keyword`) ? (sortDesc ? 'desc' : 'asc') : sortingDefaults[val]
  })
  return sortingObj
}
