class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email, :phone, :role

  has_many :blogs
end
