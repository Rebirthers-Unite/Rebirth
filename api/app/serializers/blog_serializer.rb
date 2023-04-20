class BlogSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :author
  
    # belongs_to :user
  end