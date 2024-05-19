class AddUrlAndTimeSpentToWebsiteUsages < ActiveRecord::Migration[7.1]
  def change
    add_column :website_usages, :time_spent, :integer unless column_exists?(:website_usages, :time_spent)
  end
end
