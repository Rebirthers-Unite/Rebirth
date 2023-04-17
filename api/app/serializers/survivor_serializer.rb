class SurvivorSerializer < ActiveModel::Serializer
    attributes :id, :name, :age, :date_of_birth, :organization, :contact, :date_of_entry, :date_of_exit, :guardian_name, :contact_of_guardian
end