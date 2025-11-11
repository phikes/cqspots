require "rails_helper"

RSpec.describe Types::MutationType, type: :graphql do
  subject { described_class }

  it { is_expected.to have_field :create_spot }
  it { is_expected.to have_field :delete_spot }
  it { is_expected.to have_field :update_spot }
end
