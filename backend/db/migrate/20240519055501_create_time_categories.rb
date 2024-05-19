class CreateTimeCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :time_categories do |t|
      t.integer :user_id
      t.string :category
      t.integer :time_spent
      t.timestamps
    end
  end
end
