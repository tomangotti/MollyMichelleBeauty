class AdminsController < ApplicationController
    skip_before_action :authorize, only: :create
        
    def admin_show_me
            admin = Admin.find_by(id: session[:admin_id])
            render json: admin
    end


end
