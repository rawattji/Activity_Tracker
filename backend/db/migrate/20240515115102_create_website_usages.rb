class CreateWebsiteUsages < ActiveRecord::Migration[7.1]
  def change
    create_table :website_usages do |t|
      t.string :url, null: false
      t.integer :time_spent, null: false, default: 0

      t.timestamps
    end

    add_index :website_usages, :url
  end
end
