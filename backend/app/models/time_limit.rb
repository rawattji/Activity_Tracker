class TimeLimit < ApplicationRecord
  validates :url, presence: true, uniqueness: true
  validates :time_limit, presence: true, numericality: { greater_than: 0 }
  validates :time_spent, numericality: { greater_than_or_equal_to: 0 }
end
