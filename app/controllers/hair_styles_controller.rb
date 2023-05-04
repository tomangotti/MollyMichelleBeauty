class HairStylesController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        hair = HairStyle.all
        render json: hair, status: :ok
    end
end
