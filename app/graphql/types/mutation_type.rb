module Types
  class MutationType < Types::BaseObject
    field :create_spot, mutation: Mutations::CreateSpot
    field :delete_spot, mutation: Mutations::DeleteSpot
    field :update_spot, mutation: Mutations::UpdateSpot
  end
end
