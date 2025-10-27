class User < ApplicationRecord
  devise :database_authenticatable, :confirmable, :registerable,
    :recoverable, :rememberable, :validatable

  has_many :spots, dependent: :destroy
end
