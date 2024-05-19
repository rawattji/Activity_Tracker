
class RestrictedSite < ApplicationRecord
    validates :url, presence: true, uniqueness: true
  end
  