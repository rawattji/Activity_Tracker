class SessionsController < ApplicationController
    def create
      user = User.find_by(email: params[:email])
      if user&.authenticate(params[:password])
        render json: { user_id: user.id, email: user.email }
      else
        render json: { error: 'Invalid email or password' }, status: :unauthorized
      end
    end
  end