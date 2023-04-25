class Blog
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :body, type: String
  field :author, type: String
  field :date, type: Date
  field :image_data, type: String

  include ImageUploader::Attachment(:image)


  validates :title, :body, :author, :date, presence: true
  validates :body, length: { minimum: 50 }
end
