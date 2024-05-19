class CreateTimeLimits < ActiveRecord::Migration[7.1]
  def change
    create_table :time_limits do |t|
      t.string :url, null: false
      t.integer :time_limit, null: false

      t.timestamps
    end
    
    add_index :time_limits, :url, unique: true
  end
end
