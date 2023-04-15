class User
  include Mongoid::Document
  include Mongoid::Timestamps
  field :fullname, type: String
  field :email, type: String
  field :phone, type: Integer
  field :role, type: String
  field :password_digest, type: String
end
