class Blog
    include Mongoid::Document
    include Mongoid::Timestamps
    field :title, type: String
    field :description, type: String
    field :author, type: String
    # field :user_id, type: Integer
    field :image_data, type: String

    include ImageUploader::Attachment(:image)
  
    belongs_to :user
  
    validates :title, :description, :author, :user_id, presence: true
    validates :description, length: { minimum: 50 }
  end