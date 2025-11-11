require "rails_helper"

RSpec.describe Mutations::DeleteSpot, type: :graphql do
  subject(:resolve) { run_graphql_field "Mutation.deleteSpot", nil, arguments: {input: {spot: global_id(spot)}}, context: {current_user: user} }

  let(:spot) { FactoryBot.create :spot }
  let(:user) { spot.user }

  its([:spot]) { is_expected.to be_destroyed }

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
