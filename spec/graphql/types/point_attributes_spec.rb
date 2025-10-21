require "rails_helper"

RSpec.describe Types::PointAttributes, type: :graphql do
  subject { described_class } 

  it { is_expected.to accept_argument(:x).of_type "Float!" }
  it { is_expected.to accept_argument(:y).of_type "Float!" }
end
