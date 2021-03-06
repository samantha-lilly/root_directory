class Api::CartsController < ApplicationController

    def index
        # @cart = current_user.current_cart
        if current_user
            @cart = current_user.carts.where(completed: false).first
        end
        render :index
    end


    def show
        @cart = Cart.find(params[:id])
        render :show
        # actually dont think even we'll use this AT ALL
    end


    def create

        # creating new cart and checking out current cart
        # current_cart = current_user.carts.where(completed: false)
        # current_cart.checkout_cart

        # Cart.where(id: self.id).update_all("completed = true")
        # debugger
        Cart.where(user_id: current_user.id).where(completed: false).update_all("completed = true")

        # debugger
        @cart = Cart.create!(user_id: current_user.id)
        # debugger
        # Order.create!
        
        # also need to be creating a new order here!!

        if @cart.save
            @cart = current_user.carts.where(completed: false).first
            render :index
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end



    def update
        current_cart_to_checkout = current_user.carts.where(completed: false)
        current_cart_to_checkout.checkout_cart
        # Cart.where(id: 10).update_all("completed = true")
    end

    private

    # def cart_params
    #     debugger
    #     params.require(:cart).permit(:delivery_date, :delivery_type, :order_total, :address_id, :cart_id, :user_id)
    # end

    def cart_params
        params.require(:cart).permit(:completed)
    end


end
