class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.references :user, null: false, foreign_key: true
      t.string :artist
      t.string :title
      t.string :rep_cat
      t.string :lyrics
    end
  end
end
