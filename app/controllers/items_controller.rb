class ItemsController < ApplicationController

  def index
    @items = Item.all
    respond_to do |format|
      format.html{render :index}
      format.json{render json: @items}
    end
  end


  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    respond_to do |format|
      if @item.save
        format.json{render json: @item, status: :created, location: @item}
      else
        format.html{render :new}
        format.json{render json: @item.errors, status: :unprocessable_entity}
      end
    end
  end

  def show
    @item = Item.find(params[:id])
    respond_to do |format|
      format.html{render :show}
      format.json{render json: @items}
    end
  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    redirect_to item_url(@item)
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to items_url
  end

  private
  def item_params
    params.require(:item).permit(:name, :barcode, :photo_url, :user_id)
  end

end
