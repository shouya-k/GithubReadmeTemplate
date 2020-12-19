/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReadme = /* GraphQL */ `
  mutation CreateReadme(
    $input: CreateReadmeInput!
    $condition: ModelReadmeConditionInput
  ) {
    createReadme(input: $input, condition: $condition) {
      id
      name
      overview
      img1
      img2
      img3
      url
      buildSetup1
      buildSetup2
      buildSetup3
      buildSetup4
      buildSetup5
      buildSetup6
      technology1
      technology2
      technology3
      technology4
      technology5
      technology6
      author
      modal
      editModal
      createdAt
      user {
        id
        uid
        name
        img
        readmes {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owner
    }
  }
`
export const updateReadme = /* GraphQL */ `
  mutation UpdateReadme(
    $input: UpdateReadmeInput!
    $condition: ModelReadmeConditionInput
  ) {
    updateReadme(input: $input, condition: $condition) {
      id
      name
      overview
      img1
      img2
      img3
      url
      buildSetup1
      buildSetup2
      buildSetup3
      buildSetup4
      buildSetup5
      buildSetup6
      technology1
      technology2
      technology3
      technology4
      technology5
      technology6
      author
      modal
      editModal
      createdAt
      user {
        id
        uid
        name
        img
        readmes {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owner
    }
  }
`
export const deleteReadme = /* GraphQL */ `
  mutation DeleteReadme(
    $input: DeleteReadmeInput!
    $condition: ModelReadmeConditionInput
  ) {
    deleteReadme(input: $input, condition: $condition) {
      id
      name
      overview
      img1
      img2
      img3
      url
      buildSetup1
      buildSetup2
      buildSetup3
      buildSetup4
      buildSetup5
      buildSetup6
      technology1
      technology2
      technology3
      technology4
      technology5
      technology6
      author
      modal
      editModal
      createdAt
      user {
        id
        uid
        name
        img
        readmes {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      owner
    }
  }
`
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      uid
      name
      img
      readmes {
        items {
          id
          name
          overview
          img1
          img2
          img3
          url
          buildSetup1
          buildSetup2
          buildSetup3
          buildSetup4
          buildSetup5
          buildSetup6
          technology1
          technology2
          technology3
          technology4
          technology5
          technology6
          author
          modal
          editModal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      uid
      name
      img
      readmes {
        items {
          id
          name
          overview
          img1
          img2
          img3
          url
          buildSetup1
          buildSetup2
          buildSetup3
          buildSetup4
          buildSetup5
          buildSetup6
          technology1
          technology2
          technology3
          technology4
          technology5
          technology6
          author
          modal
          editModal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      uid
      name
      img
      readmes {
        items {
          id
          name
          overview
          img1
          img2
          img3
          url
          buildSetup1
          buildSetup2
          buildSetup3
          buildSetup4
          buildSetup5
          buildSetup6
          technology1
          technology2
          technology3
          technology4
          technology5
          technology6
          author
          modal
          editModal
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
