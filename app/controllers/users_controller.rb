class UsersController < ApplicationController

  def index
    @users = User.all
    respond_to do |format|
      format.html {render :index}
      format.json{render json: @users}
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    respond_to do |format|
      if @user.save
        format.json{render :show, status: :created, location: @user}
      else
        format.html{render :new}
        format.json{render json: @user.errors, status: :unprocessable_entity}
      end
    end
  end

  def show
    @user = User.find(params[:id])
    respond_to do |format|
      format.html{render :show}
      format.json{render json: @user, include: :items}
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        # NHO: looks like you might have trouble updating from the front end because your factory does not support it currently

        # format.html{redirect_to @user, notice: "User successfully updated."}
        format.json{render :show, status: :ok, location: @user}
      else
        # format.html{render :edit}
        format.json{render json: @user.errors, status: :unprocessable_entity}
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :city, :state, :country, :photo_url)
  end

end
