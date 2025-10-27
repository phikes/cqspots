require "rails_helper"

RSpec.describe Types::UserType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field(:callsign).of_type "String" }
  it { is_expected.to have_field(:email).of_type "String!" }
end
