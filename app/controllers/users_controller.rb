class UsersController < ApplicationController

  def index
    @users = User.all
    respond_to do |format|
      format.html
      format.json{ render json: @users, status: :ok }
    end
  end
end
#
# def new
#   @user = User.new
# end
#
# def create
#   @user = User.create!(user_params)
#   redirect_to user_url(@user)
# end
#
# def show
#   @user = User.find(params[:id])
# end
#
# def edit
#   @user = User.find(params[:id])
# end
#
# def update
#   @user = User.find(params[:id])
#   @user.update(user_params)
#   redirect_to user_url(@user)
# end
#
# def destroy
#   @user = User.find(params[:id])
#   @user.destroy
#   redirect_to users_url
# end
#
# private
# def user_params
#   params.require(:user).permit(:name, :username, :email, :city, :state, :country, :photo_url)
# end
