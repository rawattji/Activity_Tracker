class FeedbacksController < ApplicationController
    def index
      feedbacks = Feedback.all
      render json: feedbacks
    end
  end
  