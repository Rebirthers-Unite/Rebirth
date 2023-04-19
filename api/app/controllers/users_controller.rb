class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user, only: [:update, :destroy]
  # #Get all users
  # def index
  #   @users = User.all
  #   render json: @users
  # end
  # POST to create new user
  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  # # PATCH method for updating specific fields of a user
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end
  # # Delete method for removing specific user
  # def destroy
  #   @user.destroy
  #   head :no_content
  # end
  private
    def user_params
      params.permit(:name, :email, :role, :password)
    end
    def set_user
      # Find a specific user with the given id parameter
      @user = User.find(params[:id])
    end
end