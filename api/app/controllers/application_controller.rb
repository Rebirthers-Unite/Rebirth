class ApplicationController < ActionController::API
    before_action :authorized

  # method for encoding the JWT token
  def encode_token(payload)
    JWT.encode(payload, 'rebirth')
  end

  # method to check if the request has authorization header
  def auth_header
    request.headers['Authorization']
  end

  # methid for decdoing the JWT token 
  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'rebirth', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  # method to find the curren admin user
  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @uid = User.find_by(id: user_id)
    end
  end

  # method to find the if admin user is logged in
  def logged_in?
    !!current_user
  end

  # method to authorize logged in admin user
  def authorized
    render json: { message: 'Please login' }, status: :unauthorized unless logged_in?
  end
end
