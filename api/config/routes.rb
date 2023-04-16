Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    #Route for creating a new user
    post '/signup', to: 'users#create'

    #Route for Logging in an existing user
    post '/login', to: 'auth#create'


    # Route for retrieving all survivors
    get '/survivors', to: 'survivors#index'

    # Route for retrieving a single survivor
    get '/survivors/:id', to: 'survivors#show'

    # Route for creating a new survivor
    post '/survivors', to: 'survivors#create'

    # Route for updating an existing survivor
    put '/survivors/:id', to: 'survivors#update'

    # Route for deleting a survivor
    delete '/survivors/:id', to: 'survivors#destroy'

    # Route for retrieving all blogs
    get '/blogs', to: 'blogs#index'

    # Route for retrieving a single blog
    get '/blogs/:id', to: 'blogs#show'

    # Route for creating a new blog
    post '/blogs', to: 'blogs#create'

    # Route for updating an existing blog
    put '/blogs/:id', to: 'blogs#update'

    # Route for deleting a blog
    delete '/blogs/:id', to: 'blogs#destroy'

end
