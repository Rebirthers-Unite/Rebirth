require "test_helper"

class ProgramsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @program = programs(:one)
  end

  test "should get index" do
    get programs_url, as: :json
    assert_response :success
  end

  test "should create program" do
    assert_difference("Program.count") do
      post programs_url, params: { program: { description: @program.description, title: @program.title } }, as: :json
    end

    assert_response :created
  end

  test "should show program" do
    get program_url(@program), as: :json
    assert_response :success
  end

  test "should update program" do
    patch program_url(@program), params: { program: { description: @program.description, title: @program.title } }, as: :json
    assert_response :success
  end

  test "should destroy program" do
    assert_difference("Program.count", -1) do
      delete program_url(@program), as: :json
    end

    assert_response :no_content
  end
end
