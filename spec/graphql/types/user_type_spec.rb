require "rails_helper"

RSpec.describe Types::UserType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field(:callsign).of_type "String" }
  it { is_expected.to have_field(:email).of_type "String!" }
  it { is_expected.to have_field(:spots).of_type "SpotConnection!" }
  it { is_expected.to have_field(:unconfirmed_email).of_type "String" }
end
