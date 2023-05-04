class HairStyleSerializer < ActiveModel::Serializer
  attributes :id, :description, :name, :price, :length
end
