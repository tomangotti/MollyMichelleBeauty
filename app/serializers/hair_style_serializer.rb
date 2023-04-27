class HairStyleSerializer < ActiveModel::Serializer
  attributes :id, :description, :full_bio, :price, :length
end
