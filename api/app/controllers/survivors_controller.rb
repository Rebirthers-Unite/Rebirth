class SurvivorsController < ApplicationController
    # Set up a before_action callback for the show, update, and destroy actions
    before_action :set_survivor, only: [:show, :update, :destroy]
  
    #  to get all survivors
    def index
      @survivors = Survivor.all
      render json: @survivors
    end
  
    # to get a single survivor
    def show
        render json: @survivor
    end
    
      # CREATE
      # Define the create method
      # Create a new instance of the Survivor model with the input parameters
      # If the new survivor is valid, save it to the database and return a success message with the new survivor object
      # If the new survivor is not valid, return an error message with the validation errors
      
    def create
        @survivor = Survivor.new(survivor_params)
        if @survivor.save
          render json: @survivor, status: :created
        else
          render json: { errors: @survivor.errors.full_messages }, status: :unprocessable_entity
        end
    end
      
    # UPDATE
      # Define the update method
      # Find the survivor in the database by the ID
      # If the survivor exists, update its attributes with the new parameters
      # If the update is successful, return a success message with the updated survivor object
      # If the update fails due to validation errors, return an error message with the validation
  
      
      

end
  