class AuthenticationController < ApplicationController
# on line 11 and 19 remove return_data if things aren't working. return_data is defined in User Model
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @user = User.find_by_username(login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.id, username: @user.username)
      #can replace @user on line 9 with @user.return_data
      render json: { user: @user.return_data, token: token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.return_data, status: :ok
  end


  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end
end
