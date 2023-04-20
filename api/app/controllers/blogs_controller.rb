class BlogsController < ApplicationController

    # Define a `before_action` method 
    # In the `before_action` method, define a `set_blog` method that sets the `@blog` instance variable to the blog object with the specified `:id` parameter.
    # The `set_blog` method should be called before the `show`, `update`, and `destroy` actions 
    skip_before_action :authorized, only: [:index, :show]
    before_action :set_blog, only: [:show, :update, :destroy]

    # define index method
    # it should get all blogs

    def index
        @blogs = Blog.all
        render json: @blogs
    end

    # define show method
    # it should get  single blog

    def show
        render json: @blog
    end

    # Define the create method 
    # If the object saves successfully, render 201 Created HTTP status code.
    # If the object does not save successfully, render a 422 Unprocessable Entity HTTP status code.

    def create
        @blog = Blog.new(blog_params)
        if @blog.save
          render json: @blog, status: :created 
        else
          render json: { errors: @blog.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    # define update method
    # Check if the blog with the given id exists
    # If it exists, update the attributes of the blog object with the permitted parameters
    # If the update is successful, render the updated blog object in JSON format
    # If the update is unsuccessful, render the error messages in JSON format with a 422 status code.

    def update
        if @blog.update(blog_params)
          render json: @blog
        else
          render json: { errors: @blog.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    # Define destroy method
    # Destroy the blog
    # Respond with no content

    def destroy
        @blog.destroy
        head :no_content
    end

    private

    def set_blog
      @blog = Blog.find(params[:id])
    end

    def blog_params
      params.require(:blog).permit(:title, :description, :author)
    end

end