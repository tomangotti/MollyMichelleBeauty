class HairStylesController < ApplicationController
    skip_before_action :authorize, only: :index

    
    def index
        hair = HairStyle.all
        render json: hair, status: :ok
    end

    def create
        newHairStyle = HairStyle.create!(hair_params)
        render json: newHairStyle, status: :created
    end

    def update
        hair = HairStyle.find(params[:id])
        if hair.update(hair_params)
            render json: hair, status: :accepted
        else
            render json: hair.errors, status: :unprocessable_entity
        end
        
    end

    def destroy
        hair = HairStyle.find(params[:id])
        hair.destroy
        head :no_content
    end


    private

    def hair_params
        params.permit(:id, :name, :price, :length, :description, :photo, :hair_styles)
    end
end
