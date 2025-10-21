module Types
  class SpotType < BaseObject
    implements GraphQL::Types::Relay::Node

    field :description, String
    field :lonlat, PointType, null: false

    field :child_friendly, "Boolean!"
    field :crowded, "Boolean!"
    field :parking, "Boolean!"
    field :rocky, "Boolean!"
    field :scenic, "Boolean!"
    field :sheltered, "Boolean!"
    field :sitting, "Boolean!"
    field :table, "Boolean!"
    field :trees, "Boolean!"
    field :wheelchair_accessible, "Boolean!"
  end
end
