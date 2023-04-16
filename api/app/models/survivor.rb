class Survivor < ApplicationRecord
    validates :name, :description, :image, :location, presence: true
    validates :description, length: { minimum: 30 }
end
  