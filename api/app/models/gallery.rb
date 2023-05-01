class Gallery
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :description, type: String
  field :image_data, type: String

  include ImageUploader::Attachment(:image)
end
