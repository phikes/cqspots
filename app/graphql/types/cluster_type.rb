module Types
  class ClusterType < BaseObject
    field :center, PointType, null: false
    field :count, Int, null: false
  end
end
