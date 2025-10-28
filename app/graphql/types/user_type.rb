module Types
  class UserType < BaseObject
    field :callsign, String, null: true
    field :email, String, null: false
    field :unconfirmed_email, String
  end
end
