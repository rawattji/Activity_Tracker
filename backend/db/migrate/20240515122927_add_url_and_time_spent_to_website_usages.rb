class AddUrlAndTimeSpentToWebsiteUsages < ActiveRecord::Migration[7.1]
  def change
    add_column :website_usages, :url, :string
    add_column :website_usages, :time_spent, :integer
  end
end
