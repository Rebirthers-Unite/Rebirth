class GallerySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url

  def image_url
    object.image_url
  end
end
