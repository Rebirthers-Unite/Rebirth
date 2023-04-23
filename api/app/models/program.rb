class Program
  include Mongoid::Document
  include Mongoid::Timestamps
  # include Mongoid::Paperclip

  field :title, type: String
  field :description, type: String
  field :image_data, type: String

  include ImageUploader::Attachment(:image)
  validates :title, :description, presence: true

  #Allows storing images in the database
  # has_mongoid_attached_file :image
  # validates :title, :description, presence: true
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
