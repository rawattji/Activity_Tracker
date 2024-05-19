class AddTimeLimitToTimeLimits < ActiveRecord::Migration[7.1]
  def change
    add_column :time_limits, :time_limit, :integer unless column_exists?(:time_limits, :time_limit)
  end
end
