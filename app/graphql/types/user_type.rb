module Types
  class UserType < BaseObject
    field :callsign, String, null: true
    field :email, String, null: false
  end
end
