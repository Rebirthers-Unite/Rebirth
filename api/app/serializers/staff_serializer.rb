class StaffSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :phone_number, :position, :gender
  end