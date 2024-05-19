class TimeLimitsController < ApplicationController
  before_action :set_time_limit, only: [:update, :destroy]

  # GET /time_limits
  def index
    @time_limits = TimeLimit.all
    render json: @time_limits
  end

  # POST /time_limits
  def create
    @time_limit = TimeLimit.new(time_limit_params)

    if @time_limit.save
      render json: @time_limit, status: :created, location: @time_limit
    else
      render json: @time_limit.errors, status: :unprocessable_entity
    end
  end

  # PUT/PATCH /time_limits/1
  def update
    if @time_limit.update(time_limit_params)
      render json: @time_limit
    else
      render json: @time_limit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /time_limits/1
  def destroy
    @time_limit.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_time_limit
    @time_limit = TimeLimit.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def time_limit_params
    params.permit(:url, :time_limit)
  end
end