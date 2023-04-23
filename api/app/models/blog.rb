class Blog
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :body, type: String
  field :author, type: String
  field :date, type: Date
  # field :user_id, type: Integer
  field :image_data, type: String

  include ImageUploader::Attachment(:image)

  belongs_to :user

  validates :title, :body, :author, :date, :user_id, presence: true
  validates :body, length: { minimum: 50 }
end
