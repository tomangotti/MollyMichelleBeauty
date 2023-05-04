class ChangeFullBioToName < ActiveRecord::Migration[7.0]
  def change
    rename_column :hair_styles, :full_bio, :name
  end
end
