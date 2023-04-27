class CreateAbouts < ActiveRecord::Migration[7.0]
  def change
    create_table :abouts do |t|
      t.string :bio
      t.belongs_to :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
