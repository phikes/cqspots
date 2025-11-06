require "rails_helper"

RSpec.describe Mutations::CreateSpot, type: :graphql do
  subject(:resolve) { run_graphql_field "Mutation.createSpot", nil, arguments: {input: spot_attributes}, context: {current_user: user} }

  let(:spot_attributes) do
    {
      child_friendly: true,
      crowded: false,
      description: "Test",
      lat: 13.123,
      long: 50.123,
      parking: true,
      rocky: false,
      scenic: true,
      sheltered: false,
      sitting: true,
      table: false,
      trees: true,
      wheelchair_accessible: false
    }
  end

  let(:user) { FactoryBot.create :user }

  its([:spot]) { is_expected.to be_persisted }
  its([:spot]) { is_expected.to have_attributes spot_attributes.except(:lat, :long) }
  its([:spot, :lonlat]) { is_expected.to have_attributes lon: spot_attributes[:long], lat: spot_attributes[:lat] }

  context "when the user is nil" do
    let(:user) { nil }

    it "raises an error" do
      expect do
        resolve
      end.to raise_error CqspotsSchema::UnauthenticatedError
    end
  end
end
