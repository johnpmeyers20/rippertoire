class Song < ApplicationRecord
  belongs_to :user
  has_one :artist

  validates :title, presence: true, uniqueness: true
end
