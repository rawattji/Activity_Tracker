class WatchListsController < ApplicationController
  def index
    watch_lists = WatchList.all
    render json: watch_lists
  end

  def create
    watch_list = WatchList.new(watch_list_params)
    if watch_list.save
      render json: watch_list
    else
      render json: watch_list.errors, status: :unprocessable_entity
    end
  end

  private

  def watch_list_params
    params.require(:watch_list).permit(:user_id, :person_name)
  end
end
