Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    #Route for creating a new user
    post '/signup', to: 'users#create'

    #Route for Logging in an existing user
    post '/login', to: 'auth#create'

  # Defines the root path route ("/")
  # root "articles#index"
end
