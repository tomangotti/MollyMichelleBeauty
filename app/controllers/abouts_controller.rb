class AboutsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        about = About.first
        render json: about
    end

    def update
        about = About.find(params[:id])
        about.update!(about_params)
        render json: about
    end


    private
    
    def about_params
        params.permit(:bio, :id, :about)
    end
end
