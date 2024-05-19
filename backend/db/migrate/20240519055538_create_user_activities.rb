class CreateUserActivities < ActiveRecord::Migration[7.1]
  def change
    create_table :user_activities do |t|

      t.timestamps
    end
  end
end
