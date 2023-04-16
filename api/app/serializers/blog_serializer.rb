class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :author, :user_id
end
