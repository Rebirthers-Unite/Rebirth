class Program
  include Mongoid::Document
  include Mongoid::Timestamps
  include Mongoid::Paperclip

  field :title, type: String
  field :description, type: String
  
  # field :image, type: Attachment

  has_mongoid_attached_file :image
end
