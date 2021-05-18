# == Schema Information
#
# Table name: products
#
#  id         :bigint           not null, primary key
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Product < ApplicationRecord

    CATEGORIES = %w(plant planter accessory)

    validates :category, presence: true

    validates :category, inclusion: { in: CATEGORIES }

    has_one :plant,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Plant

    has_one :planter,
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Planter


end
