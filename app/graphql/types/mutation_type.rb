module Types
  class MutationType < Types::BaseObject
    field :create_spot, mutation: Mutations::CreateSpot
    field :delete_spot, mutation: Mutations::DeleteSpot
  end
end
