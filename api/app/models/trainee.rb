class Trainee
    include Mongoid::Document
    include Mongoid::Timestamps
    field :name, type: String
    field :email, type: String
    field :phone_number, type: String
    field :gender, type: String
    field :program, type: String
    field :start_date, type: Date
    field :end_date, type: Date
    field :national_id, type: String
    field :education_level, type: String
    field :certificates, type: String

  
    validates :name, :phone_number, :program, :start_date, :gender, :national_id, :certificates, :education_level, presence: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  end
  