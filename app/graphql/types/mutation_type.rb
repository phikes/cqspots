module Types
  class MutationType < Types::BaseObject
    field :create_spot, mutation: Mutations::CreateSpot
  end
end
