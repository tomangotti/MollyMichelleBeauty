class HairStyleSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :description, :name, :price, :length, :photo

  def photo
    rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end
end
