class AdminsController < ApplicationController
    skip_before_action :authorize, only: :create
        
    def admin_show_me
            admin = Admin.find_by(id: session[:admin_id])
            render json: admin
    end

    def create
        admin = Admin.create(admin_params)
        about = About.create(bio: "Bio has not been updated")
        session[:admin_id] = admin.id
        render json: admin
    end


    private

    def admin_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :id)
    end
end
