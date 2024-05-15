class CreateWebsiteUsages < ActiveRecord::Migration[7.1]
  def change
    create_table :website_usages do |t|

      t.timestamps
    end
  end
end
