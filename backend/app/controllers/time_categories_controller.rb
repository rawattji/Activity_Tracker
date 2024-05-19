class TimeCategoriesController < ApplicationController
  def index
    user = User.find(params[:user_id])
    time_categories = user.time_categories
    render json: time_categories
  end
end