class CreateReports < ActiveRecord::Migration[7.1]
  def change
    create_table :reports do |t|
      t.integer :user_id
      t.string :report_type
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
