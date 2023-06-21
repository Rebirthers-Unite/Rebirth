class   TraineeSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :phone_number, :program, :gender, :start_date, :end_date, :national_id, :education_level, :certificates
  end