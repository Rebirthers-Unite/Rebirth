class BlogSerializer < ActiveModel::Serializer
    attributes :id, :title, :body, :author, :date, :image_url
  
    belongs_to :user

    def image_url
      object.image_url
    end
    
  end