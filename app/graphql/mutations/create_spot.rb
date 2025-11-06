module Mutations
  class CreateSpot < BaseMutation
    argument :child_friendly, Boolean, required: true
    argument :crowded, Boolean, required: true
    argument :description, String, required: false
    argument :lat, Float, required: true
    argument :long, Float, required: true
    argument :parking, Boolean, required: true
    argument :references, [String], required: false
    argument :rocky, Boolean, required: true
    argument :scenic, Boolean, required: true
    argument :sheltered, Boolean, required: true
    argument :sitting, Boolean, required: true
    argument :table, Boolean, required: true
    argument :trees, Boolean, required: true
    argument :wheelchair_accessible, Boolean, required: true

    field :errors, [String], null: true
    field :spot, Types::SpotType, null: true

    def resolve(long:, lat:, **spot_attributes)
      raise CqspotsSchema::UnauthenticatedError unless context[:current_user].present?

      spot = context[:current_user].spots.new spot_attributes
      spot.lonlat = "POINT(#{long} #{lat})"

      if spot.save
        {spot:}
      else
        {errors: spot.errors.full_messages}
      end
    end
  end
end
