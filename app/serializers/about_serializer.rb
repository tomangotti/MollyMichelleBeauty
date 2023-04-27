class AboutSerializer < ActiveModel::Serializer
  attributes :id, :bio
  has_one :Admin
end
