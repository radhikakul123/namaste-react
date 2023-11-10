import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resdata } = props;
    // console.log(props);
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resdata?.info;
  

    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL +  cloudinaryImageId }
        />
        <h3>{name}</h3>
        <h4>
        {[
            cuisines[0],
            cuisines[1],
            cuisines[2],
            cuisines[3],
            cuisines[4],
            cuisines[5],
          ].join(", ")}
        </h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resdata.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;