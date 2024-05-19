class AddUserIdToWebsiteUsages < ActiveRecord::Migration[7.1]
  def change
    add_column :website_usages, :user_id, :integer
    add_index :website_usages, :user_id
  end
end
