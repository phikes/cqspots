require "rails_helper"

RSpec.describe Types::BoundsAttributes, type: :graphql do
  subject { described_class }

  it { is_expected.to accept_argument(:corner_1).of_type "PointAttributes!" }
  it { is_expected.to accept_argument(:corner_2).of_type "PointAttributes!" }
end
