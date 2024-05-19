class AddIdleStatusToUserActivities < ActiveRecord::Migration[7.1]
  def change
    add_column :user_activities, :idle, :boolean, default: false
  end
end
