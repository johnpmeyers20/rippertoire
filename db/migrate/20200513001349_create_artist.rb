class CreateArtist < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.references :song, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
    end
  end
end
