import { CDN_URL } from "../../../day5/utils/constant";

const RestaurantCard = (prop) => {
    const {resObj} = prop;
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resObj?.info;
    return(
        <div className="res-card">
            <img alt="res-logo" className="res-logo" src={CDN_URL+ cloudinaryImageId}/>
            <h4>{name}</h4>
            <h4>{cuisines}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} starts</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
};

export default RestaurantCard;