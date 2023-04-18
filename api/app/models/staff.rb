class Staff
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :email, type: String
  field :phone_number, type: String
  field :position, type: String
  field :gender, type: String


  validates :name, , presence: true
  validates :email, presence: true, uniqueness: true, format: { with:URI::MailTo::EMAIL_REGEXP}


end
