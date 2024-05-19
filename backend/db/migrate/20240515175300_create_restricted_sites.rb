class CreateRestrictedSites < ActiveRecord::Migration[7.1]
  def change
    create_table :restricted_sites do |t|
      t.string :url

      t.timestamps
    end

    add_index :restricted_sites, :url, unique: true
  end
end
