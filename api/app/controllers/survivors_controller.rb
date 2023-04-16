class SurvivorsController < ApplicationController
    # Set up a before_action callback for the show, update, and destroy actions
    before_action :set_survivor, only: [:show, :update, :destroy]
  
    #  to get all survivors
    def index
      @survivors = Survivor.all
      render json: @survivors
    end
  
    

end
  