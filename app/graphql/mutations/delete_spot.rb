module Mutations
  class DeleteSpot < BaseMutation
    argument :spot_id, ID, loads: Types::SpotType, required: true

    field :spot, Types::SpotType

    def resolve(spot:)
      raise CqspotsSchema::UnauthenticatedError unless context[:current_user].present?
      raise CqspotsSchema::UnauthorizedError unless context[:current_user] === spot.user

      spot.destroy!

      {spot:}
    end
  end
end
