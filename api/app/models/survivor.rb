class Survivor
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :date_of_birth, type: Date
  field :organization, type: String
  field :organization_contact, type: String
  field :organization_email, type: String
  field :guardian_name, type: String
  field :contact_of_guardian, type: String
  field :level_of_education, type: String
  field :school, type: String
  # field :children, type: String
  field :social_asset_building, type: String
  field :date_of_entry, type: Date
  field :date_of_exit, type: Date

  validates :name, :date_of_birth, :organization, :organization_contact, :organization_email, :guardian_name, :contact_of_guardian, :level_of_education, :school, :social_asset_building, :date_of_entry, :date_of_exit, presence: true
end
