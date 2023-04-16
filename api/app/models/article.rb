class Article
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :description, type: String
  field :author, type: String
  field :user_id, type: Integer
end
