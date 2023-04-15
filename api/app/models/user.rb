class User
  include Mongoid::Document
  include Mongoid::Timestamps
  field :fullname, type: String
  field :email, type: String
  field :phone, type: Integer
  field :role, type: String
  field :password_digest, type: String

  has_secure_password

  validates :email, presence: true, uniqueness: true, format: { with:URI::MailTo::EMAIL_REGEXP}
  validates :password, presence: true, length: { minimum:6 }, on: :create
end
