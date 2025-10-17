class CreateSpots < ActiveRecord::Migration[8.0]
  def change
    create_table :spots do |t|
      t.references :user, null: false, foreign_key: true
      t.text :description
      t.boolean :wheelchair_accessible
      t.boolean :child_friendly
      t.boolean :parking
      t.boolean :crowded
      t.boolean :scenic
      t.boolean :sitting
      t.boolean :table
      t.boolean :sheltered
      t.boolean :trees
      t.boolean :rocky
      t.st_point :lonlat, geographic: true, null: false

      t.timestamps
      t.index :lonlat, using: :gist
    end
  end
end
