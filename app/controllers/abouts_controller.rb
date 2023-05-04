class AboutsController < ApplicationController

    def index
        about = About.all
        render json: about, status: :ok
    end
end
