class Survivor
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :description, type: String
  field :image, type: String
  field :location, type: String

  validates :name, :description, :image, :location, presence: true
  validates :description, length: { minimum: 30 }
end
