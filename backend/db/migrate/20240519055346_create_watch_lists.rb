class CreateWatchLists < ActiveRecord::Migration[7.1]
  def change
    create_table :watch_lists do |t|
      t.integer :user_id
      t.string :person_name
      t.timestamps
    end
  end
end
