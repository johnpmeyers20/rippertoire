class Song < ApplicationRecord
  belongs_to :user
  has_one :artist
end
