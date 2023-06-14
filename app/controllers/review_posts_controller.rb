class ReviewPostsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        posts = ReviewPost.all
        render json: posts
    end

    def create
        review = ReviewPost.create!(review_params)
        render json: review
    end

    def destroy
        review = ReviewPost.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:id, :photo, :name, :description)
    end
end
