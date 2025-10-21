require "rails_helper"

RSpec.describe Types::ClusterType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field(:center).of_type "Point!" }
  it { is_expected.to have_field(:count).of_type "Int!" }
end
