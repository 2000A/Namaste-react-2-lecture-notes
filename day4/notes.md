#This notes will containe phases of codes.

phase 1:
```JS  

const resObj = {
  "id": "50597",
  "name": "Chinese Wok",
  "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
  "locality": "R City",
  "areaName": "Ghatkopar West",
  "costForTwo": "₹250 for two",
  "cuisines": [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
  ],
  "avgRating": 4.1,
  "parentId": "61955",
  "avgRatingString": "4.1",
  "totalRatingsString": "1K+",
  "sla": {
    "deliveryTime": 49,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-04-25 23:00:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Chinese.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Chinese.png"
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  }
} //data of only one restaraunt 

//If we want more restarunt infromation like this but it will get tedious to create object for restraunts as well ass to pass infromation in props.

// there is another way that is array of objects (new and better way to store restraunt infromation in single place)
const RestaurantCard = (prop) =>{
    const {resData} = prop;
    return(
        <div className='res-card' style={{background:"#f0f0f0f0"}}>
            <img className="res-logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ej7wboon8tk0h8nqhqoq'/>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating} stars</h4>
            <h4>{resData.sla.deliveryTime} min</h4>
            
        </div>
    )
   
}

const Body = () => {
  return(
    <div className='body'>
        <div className='search'>
            Search
        </div>
         <div className='res-container'>
            {/* <RestaurantCard resName = "Meghna foods" cuisines = "South indian, Biryani, chinese"/>  */}
            <RestaurantCard resData = {resObj}/>
            
        </div>
    </div>
  )
}

const AppLayout = ()=> {
    return (
        <div className="app">
            <Header />
            <Body />
        
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
```