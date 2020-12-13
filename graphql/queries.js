/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReadme = /* GraphQL */ `
  query GetReadme($id: ID!) {
    getReadme(id: $id) {
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
      user {
        id
        userId
        name
        email
        img
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listReadmes = /* GraphQL */ `
  query ListReadmes(
    $filter: ModelReadmeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadmes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
          id
          userId
          name
          email
          img
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userId
      name
      email
      img
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        name
        email
        img
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        userId
        name
        email
        img
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
