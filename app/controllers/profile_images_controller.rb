class ProfileImagesController < ApplicationController
  before_action :set_profile_image, only: %i[ show update destroy ]
  skip_before_action :authorize, only: :show

  # GET /profile_images
  def index
    @profile_images = ProfileImage.all

    render json: @profile_images
  end

  # GET /profile_images/1
  def show
    @profile_image = ProfileImage.last
    render json: @profile_image
  end

  # POST /profile_images
  def create
    @profile_image = ProfileImage.create!(profile_image_params)
    render json: @profile_image, status: :created
  end

  # PATCH/PUT /profile_images/1
  def update
    if @profile_image.update(profile_image_params)
      render json: @profile_image, status: :accepted
    else
      render json: @profile_image.errors, status: :unprocessable_entity
    end
  end

  # DELETE /profile_images/1
  def destroy
    @profile_image.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile_image
      @profile_image = ProfileImage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def profile_image_params
      params.permit(:profile_image, :id, :photo)
    end

end
