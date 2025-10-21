require "rails_helper"

RSpec.describe Types::SpotType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field(:description).of_type "String" }
  it { is_expected.to have_field(:lonlat).of_type "Point!" }

  it { is_expected.to have_field(:child_friendly).of_type "Boolean!" }
  it { is_expected.to have_field(:crowded).of_type "Boolean!" }
  it { is_expected.to have_field(:parking).of_type "Boolean!" }
  it { is_expected.to have_field(:rocky).of_type "Boolean!" }
  it { is_expected.to have_field(:scenic).of_type "Boolean!" }
  it { is_expected.to have_field(:sheltered).of_type "Boolean!" }
  it { is_expected.to have_field(:sitting).of_type "Boolean!" }
  it { is_expected.to have_field(:table).of_type "Boolean!" }
  it { is_expected.to have_field(:trees).of_type "Boolean!" }
  it { is_expected.to have_field(:wheelchair_accessible).of_type "Boolean!" }
end
