class UserActivitiesController < ApplicationController
    def update_idle_status
      user_activity = UserActivity.find(params[:id])
      user_activity.update(idle: params[:idle])
      render json: user_activity
    end
  end
  