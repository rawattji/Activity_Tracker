class WebsiteUsage < ApplicationRecord
  belongs_to :user

  validates :url, presence: true
  validates :time_spent, presence: true

  def self.aggregate_time_spent_by_hostname(user, hostname)
    where(user: user).where("url LIKE ?", "%#{hostname}%").sum(:time_spent)
  end
end
