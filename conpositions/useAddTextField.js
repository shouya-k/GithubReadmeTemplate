import { reactive } from '@nuxtjs/composition-api'

export const addTextField = () => {
  const field = reactive({
    build1: false,
    build2: false,
    build3: false,
    build4: false,
    build5: false,
    technology1: false,
    technology2: false,
    technology3: false,
    technology4: false,
    technology5: false,
  })

  const addBuildField = () => {
    if (field.build1 === false) {
      field.build1 = true
    } else if (field.build2 === false) {
      field.build2 = true
    } else if (field.build3 === false) {
      field.build3 = true
    } else if (field.build4 === false) {
      field.build4 = true
    } else if (field.build5 === false) {
      field.build5 = true
    }
  }

  const addTechnologyField = () => {
    if (field.technology1 === false) {
      field.technology1 = true
    } else if (field.technology2 === false) {
      field.technology2 = true
    } else if (field.technology3 === false) {
      field.technology3 = true
    } else if (field.technology4 === false) {
      field.technology4 = true
    } else if (field.technology5 === false) {
      field.technology5 = true
    }
  }

  return { field, addBuildField, addTechnologyField }
}
