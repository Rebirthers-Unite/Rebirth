class BlogsController < ApplicationController
    # Define a `before_action` method 
    # In the `before_action` method, define a `set_blog` method that sets the `@blog` instance variable to the blog object with the specified `:id` parameter.
    # The `set_blog` method should be called before the `show`, `update`, and `destroy` actions 

    before_action :set_blog, only: [:show, :update, :destroy]

    # define index method
    # it should get all blogs
    
    def index
        @blogs = Blog.all
        render json: @blogs
    end
end