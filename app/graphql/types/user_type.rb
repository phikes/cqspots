module Types
  class UserType < BaseObject
    field :callsign, String, null: true
    field :email, String, null: false
    field :spots, SpotType.connection_type, null: false
    field :unconfirmed_email, String
  end
end
