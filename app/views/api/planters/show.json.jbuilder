json.extract! planter, :id, :product_id, :name, :planter_type, :price, :inches, :size, :color, :material, :overview, :details, :dimensions
json.photoMainUrl url_for(planter.photomain)
json.photoHoverUrl url_for(planter.photohover)
json.videoUrl url_for(planter.video)