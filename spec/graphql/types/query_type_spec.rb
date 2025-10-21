require "rails_helper"

RSpec.describe Types::QueryType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field(:clusters).of_type "[Cluster!]!" }

  describe described_class.fields["clusters"] do
    it { is_expected.to accept_argument(:bounds).of_type "BoundsAttributes!" }
  end
end
