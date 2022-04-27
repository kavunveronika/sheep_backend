const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Sheep {
    sheep_id: Int!
    tag_id: String!
    scrapie_id: String
    name: String
    weight_at_birth: Int
    date_deceased: String
    dob: String!
    sex: String!
    purchase_date: String
    father: Sheep
    mother: Sheep
    breed: Breed!
    date_last_bred: String
    created_at: String
    updated_at: String
    dams_children: Sheep
    sires_children: Sheep
  }
  type Breed {
    id: Int!
    breed_name: String
    created_at: String
    updated_at: String
  }

  type Query {
    get_sheep_by_id(sheep_id: Int!): Sheep
    get_sheep_by_tag(tag_id: String!): Sheep
    get_all_sheep: [Sheep!]!
    get_all_breeds: [Breed!]!
  }
  type Mutation {
    createSheep(
      tag_id: String!
      dob: String!
      sex: String!
      purchase_date: String
      breed_id: Int!
      dam: Int
      sire: Int
      scrapie_id: String
      name: String
      weight_at_birth: Int
      date_deceased: String
    ): String

    updateSheep(
      sheep_id: Int!
      tag_id: String
      dob: String
      sex: String
      purchase_date: String
      breed_id: Int
      dam: Int
      sire: Int
      scrapie_id: String
      name: String
      weight_at_birth: Int
      date_deceased: String
      date_last_bred: String
    ): String

    deleteSheep(sheep_id: Int!): String

    createBreed(breed_name: String!): String

    updateBreed(id: Int!, breed_name: String!): String

    deleteBreed(id: Int!): String
  }
`;

module.exports = typeDefs;