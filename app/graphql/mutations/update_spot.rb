module Mutations
  class UpdateSpot < BaseMutation
    argument :child_friendly, Boolean, required: false
    argument :crowded, Boolean, required: false
    argument :description, String, required: false
    argument :lat, Float, required: false
    argument :long, Float, required: false
    argument :parking, Boolean, required: false
    argument :references, [String], required: false
    argument :rocky, Boolean, required: false
    argument :scenic, Boolean, required: false
    argument :sheltered, Boolean, required: false
    argument :sitting, Boolean, required: false
    argument :spot_id, ID, loads: Types::SpotType, required: true
    argument :table, Boolean, required: false
    argument :trees, Boolean, required: false
    argument :wheelchair_accessible, Boolean, required: false

    field :errors, [String], null: true
    field :spot, Types::SpotType, null: true

    def resolve(spot:, long:, lat:, **spot_attributes)
      raise CqspotsSchema::UnauthenticatedError unless context[:current_user].present?
      raise CqspotsSchema::UnauthorizedError unless context[:current_user] === spot.user

      spot.lonlat = "POINT(#{long} #{lat})" if long.present? && lat.present?

      if spot.update spot_attributes
        {spot:}
      else
        {errors: spot.errors.full_messages}
      end
    end
  end
end
