class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :author, :date, :image_url


  def image_url
    object.image_url
  end
end
