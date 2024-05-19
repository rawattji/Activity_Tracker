class UsersController < ApplicationController
    def destroy
      user = User.find(params[:id])
      user.destroy
      render json: { message: 'User data deleted' }
    end
  end
  