class Survivor
    include Mongoid::Document
    include Mongoid::Timestamps
  
    field :name, type: String
    field :age, type: Integer
    field :date_of_birth, type: DateTime
    field :organization, type: String
    field :contact, type: Integer
    field :date_of_entry, type: DateTime
    field :date_of_exit, type: DateTime
    field :guardian_name, type: String
    field :contact_of_guardian, type: Integer
  
    validates :name, :age, :date_of_birth, :organization, :contact, :date_of_entry, :date_of_exit, :guardian_name, :contact_of_guardian, presence: true
  end