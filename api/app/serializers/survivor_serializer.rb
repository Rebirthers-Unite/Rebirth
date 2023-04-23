class SurvivorSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :organization, :organization_contact, :organization_email, :guardian_name, :contact_of_guardian, :level_of_education, :school, :children, :social_asset_building, :date_of_entry, :date_of_exit
end
