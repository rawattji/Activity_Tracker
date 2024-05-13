require "test_helper"

class WebsiteUsageControllerTest < ActionDispatch::IntegrationTest
  test "should get url:string" do
    get website_usage_url:string_url
    assert_response :success
  end

  test "should get time_spent:integer" do
    get website_usage_time_spent:integer_url
    assert_response :success
  end
end
