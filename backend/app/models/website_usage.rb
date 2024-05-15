class WebsiteUsage < ApplicationRecord
    validates :url, presence: true
    validates :time_spent, presence: true
  end
  