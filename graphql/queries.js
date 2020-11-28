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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
