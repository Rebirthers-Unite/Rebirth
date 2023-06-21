class TraineesController < ApplicationController
    #  Set up a before_action callback for the show, update, and destroy actions
    before_action :set_trainee, only: [:show, :update, :destroy]
  
    #  to get all survivors
    def index
      @trainees = Trainee.all
      render json: @trainees
    end
  
    # to get a single survivor
    def show
      render json: @trainee
    end
  
    # CREATE
    # Define the create method
    # Create a new instance of the Survivor model with the input parameters
    # If the new survivor is valid, save it to the database and return a success message with the new survivor object
    # If the new survivor is not valid, return an error message with the validation errors
  
    def create
      @trainee = Trainee.new(trainee_params)
      if @trainee.save
        render json: @trainee, status: :created
      else
        render json: { errors: @trainee.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # UPDATE
    # Define the update method
    # Find the survivor in the database by the ID
    # If the survivor exists, update its attributes with the new parameters
    # If the update is successful, return a success message with the updated survivor object
    # If the update fails due to validation errors, return an error message with the validation
  
    def update
      if @trainee.update(trainee_params)
        render json: @trainee
      else
        render json: { errors: @trainee.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # DELETE
    # Define the destroy method
    # Find the survivor in the database by the ID
    # If the survivor exists, delete it from the database
    # If the deletion is successful, return a success message with no content
  
    def destroy
      @trainee.destroy
      head :no_content
    end
  
    private
  
    # Define the set_survivor method
    def set_trainee
      # Find the survivor with the given id parameter
      @trainee = Trainee.find(params[:id])
    end
  
    # Define the survivor_params method
    def trainee_params
      # Permit only the specified attributes of the survivor object
      params.permit(:name, :email, :program, :gender, :start_date, :end_date, :phone_number, :education_level, :national_id, :certificates)
    end
  end
  