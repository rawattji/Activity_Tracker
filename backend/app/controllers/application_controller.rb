class ApplicationController < ActionController::Base
    protect_from_forgery unless: -> { request.headers["Origin"] == "chrome-extension://kgdofpnenphneeolhnljmakfcpegpene" }
  end
  