class PostSerializer < ActiveModel::Serializer
  attributes :id
  has_one :hair_style
end
