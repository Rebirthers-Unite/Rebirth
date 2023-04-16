class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :email, :phone, :role
end
