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
      
    

end
  