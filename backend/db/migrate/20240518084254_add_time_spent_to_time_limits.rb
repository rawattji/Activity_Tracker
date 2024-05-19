class AddTimeSpentToTimeLimits < ActiveRecord::Migration[7.1]
  def change
    add_column :time_limits, :time_spent, :integer, default: 0
  end
end
