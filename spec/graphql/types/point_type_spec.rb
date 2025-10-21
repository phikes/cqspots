require "rails_helper"

RSpec.describe Types::PointType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field(:x).of_type "Float!" }
  it { is_expected.to have_field(:y).of_type "Float!" }
end
