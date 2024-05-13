require "test_helper"

class WebsiteUsagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get website_usages_index_url
    assert_response :success
  end

  test "should get create" do
    get website_usages_create_url
    assert_response :success
  end
end
