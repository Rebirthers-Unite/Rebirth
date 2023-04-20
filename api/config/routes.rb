Rails.application.routes.draw do

  # Routes for CRUD operations programs
  resources :programs
  
  # Routes for CRUD operations staff
  resources :staffs

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    #Route for creating a new user
    post '/signup', to: 'users#create'

    #Route for Logging in an existing user
    post '/login', to: 'auth#create'

    #Route for updating a user 
    patch '/users/:id', to: 'users#update'

    #Route for deleting a user
    delete '/users/:id', to: 'users#destroy'


    # Route for retrieving all survivors
    get '/survivors', to: 'survivors#index'

    # Route for retrieving a single survivor
    get '/survivors/:id', to: 'survivors#show'

    # Route for creating a new survivor
    post '/survivors', to: 'survivors#create'

    # Route for updating an existing survivor
    patch '/survivors/:id', to: 'survivors#update'

    # Route for deleting a survivor
    delete '/survivors/:id', to: 'survivors#destroy'

    # Route for retrieving all blogs
    get '/blogs', to: 'blogs#index'

    #  route for retriieving all users
    
    get '/users', to: 'users#index'

    # Route for retrieving a single blog
    get '/blogs/:id', to: 'blogs#show'

    # Route for creating a new blog
    post '/blogs', to: 'blogs#create'

    # Route for updating an existing blog
    put '/blogs/:id', to: 'blogs#update'

    # Route for deleting a blog
    delete '/blogs/:id', to: 'blogs#destroy'

end
