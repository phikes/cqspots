require "rails_helper"

RSpec.describe Mutations::UpdateSpot, type: :graphql do
  subject(:resolve) do
    run_graphql_field "Mutation.updateSpot",
      nil,
      arguments: {
        input: {
          spot: global_id(spot),
        }.merge(spot_attributes),
      },
      context: {current_user: user}
  end

  let(:spot) { FactoryBot.create :spot }
  let(:spot_attributes) do
    {
      child_friendly: true,
      crowded: false,
      description: "testaoooo",
      lat: 13,
      long: 12,
      parking: false,
      references: ["DE-0171", "DE-0123"],
      rocky: true,
      scenic: false,
      sheltered: true,
      sitting: false,
      table: true,
      trees: false,
      wheelchair_accessible: true
    }
  end
  let(:user) { spot.user }

  its([:spot]) { is_expected.to be_persisted }
  its([:spot]) { is_expected.to have_attributes spot_attributes.except(:lat, :long) }
  its([:spot, :lonlat]) { is_expected.to have_attributes lon: spot_attributes[:long], lat: spot_attributes[:lat] }

  context "with another user" do
    let(:user) { FactoryBot.create :user }

    it "raises an error" do
      expect { resolve }.to raise_error CqspotsSchema::UnauthorizedError
    end
  end

  context "without user" do
    let(:user) { nil }

    it "raises an error" do
      expect { resolve }.to raise_error CqspotsSchema::UnauthenticatedError
    end
  end
end
