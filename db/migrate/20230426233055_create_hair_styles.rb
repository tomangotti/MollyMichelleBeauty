class CreateHairStyles < ActiveRecord::Migration[7.0]
  def change
    create_table :hair_styles do |t|
      t.string :description
      t.string :full_bio
      t.integer :price
      t.string :length

      t.timestamps
    end
  end
end
