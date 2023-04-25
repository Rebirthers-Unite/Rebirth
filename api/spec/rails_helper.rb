require 'mongoid-rspec'
require 'factory_bot_rails'

RSpec.configure do |config|
  config.include Mongoid::Matchers, type: :model
  config.include FactoryBot::Syntax::Methods
  config.before(:suite) do
    DatabaseCleaner[:mongoid].strategy = :truncation
  end
  config.before(:each) do
    DatabaseCleaner[:mongoid].start
  end
  config.after(:each) do
    DatabaseCleaner[:mongoid].clean
  end
end