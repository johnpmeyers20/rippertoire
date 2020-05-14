class AddCategoryToSongs < ActiveRecord::Migration[6.0]
  def change
    add_reference :songs, :category, null: false, foreign_key: true
  end
end
