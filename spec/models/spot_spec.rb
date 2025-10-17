require 'rails_helper'

RSpec.describe Spot, type: :model do
  it { is_expected.to have_db_column(:description).of_type :text }

  it { is_expected.to belong_to :user }

  it { is_expected.to have_db_column(:wheelchair_accessible).of_type :boolean }
  it { is_expected.to have_db_column(:child_friendly).of_type :boolean }
  it { is_expected.to have_db_column(:parking).of_type :boolean }
  it { is_expected.to have_db_column(:crowded).of_type :boolean }
  it { is_expected.to have_db_column(:scenic).of_type :boolean }
  it { is_expected.to have_db_column(:sitting).of_type :boolean }
  it { is_expected.to have_db_column(:table).of_type :boolean }
  it { is_expected.to have_db_column(:sheltered).of_type :boolean }
  it { is_expected.to have_db_column(:trees).of_type :boolean }
  it { is_expected.to have_db_column(:rocky).of_type :boolean }
  it { is_expected.to have_db_column(:lonlat).of_type(:geography).with_options null: false  }

  it { is_expected.to have_db_column(:created_at).of_type :datetime }
  it { is_expected.to have_db_column(:updated_at).of_type :datetime }

  it { is_expected.to have_db_index(:lonlat) }
end
