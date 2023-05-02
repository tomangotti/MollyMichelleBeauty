class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post.as_json(include: :images).merge(
      images: @post.images.map do |image|
        url_for(image)
      end
    )
  end

  # POST /posts
  def create
    @post = Post.create!(post_params.except(:image, :title))
    images = params[:post][:images]

    if images
      images.each do |image|
        @post.images.attach(image)
      end
    end


    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def latest
    @post = Post.last
    render json: @post
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.permit(:title, :image)
    end
end
