class AboutsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        about = Admin.first.abouts
        render json: about
    end
end
