class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :barcode
      t.string :photo_url
      t.boolean :status
    end
  end
end
