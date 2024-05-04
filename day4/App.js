import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * What component our app can have
 * 
 * -Header
 *      -logo
 *      -nav items
 * -Body
 *      -Search
 *      -RestaurantContainer
 *          -RestaurantCard component
 *              - image, res name, cuisine, delivery time, rating
 * -footer
 *      -Copyrights
 *      -Address
 *      -Contacts
 */

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                
                <img className="logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const styles = {
//     background: "#f0f0f0f0"
// }
const resList =  [
        {
          "info": {
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-r-city-ghatkopar-west-mumbai-50597",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
        },
        {
          "info": {
            "id": "41969",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Ghatkopar West",
            "areaName": "Ghatkopar West",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.5,
            "parentId": "721",
            "avgRatingString": "3.5",
            "totalRatingsString": "5K+",
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
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
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
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-ghatkopar-west-mumbai-41969",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "105237",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "mlyxg1rnaklpgresq2k3",
            "locality": "Phoenix Market city",
            "areaName": "Kurla",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Barbecue",
              "Biryani",
              "Kebabs",
              "Mughlai",
              "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "10804",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 52,
              "lastMileTravel": 4.1,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "4.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-25 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-phoenix-market-city-kurla-mumbai-105237",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "457070",
            "name": "Monginis",
            "cloudinaryImageId": "dcalkefyshuhetbt8i5y",
            "locality": "Pl Lokhande Marg",
            "areaName": "Chembur",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "5007",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 15,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-25 22:30:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                  "shortDescription": "Perfect cake delivery",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                        "shortDescription": "Perfect cake delivery"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/monginis-pl-lokhande-marg-chembur-mumbai-457070",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "387322",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "pf3fw4qzazsu0dqngrry",
            "locality": "Mg Road",
            "areaName": "Ghatkopar Vikhroli",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Italian",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "4961",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 0.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "0.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-26 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
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
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
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
              "subHeader": "AT ₹199"
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-mg-road-ghatkopar-vikhroli-mumbai-387322",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "19972",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Rcity",
            "areaName": "Ghatkopar West",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4,
            "parentId": "166",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-26 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
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
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
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
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-rcity-ghatkopar-west-mumbai-19972",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "345430",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/37dc9e37-386f-453b-a219-ffa2c154750b_345430.JPG",
            "locality": "City Mall",
            "areaName": "Ghatkopar West",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4,
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 57,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "55-60 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-25 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-city-mall-ghatkopar-west-mumbai-345430",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "23758",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/b5c7e325-a2b3-4334-b104-0b20df81dd93_23758.JPG",
            "locality": "M G Road",
            "areaName": "Kurla",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-26 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
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
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-m-g-road-kurla-mumbai-23758",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "791089",
            "name": "Achija Veg Restaurants",
            "cloudinaryImageId": "b65497b8c5714a839a0d42453a347cc5",
            "locality": "Plot No 53",
            "areaName": "Ghatkopar Vikhroli",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Fast Food",
              "Pizzas",
              "Snacks",
              "Rolls & Wraps",
              "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "276921",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 0.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "0.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-04-26 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
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
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            "context": "seo-data-b79bce9a-c935-4eb5-b003-ec2806f4719a"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/achija-veg-restaurants-plot-no-53-ghatkopar-vikhroli-mumbai-791089",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
      ]
// const resObj = {
//   "id": "50597",
//   "name": "Chinese Wok",
//   "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//   "locality": "R City",
//   "areaName": "Ghatkopar West",
//   "costForTwo": "₹250 for two",
//   "cuisines": [
//     "Chinese",
//     "Asian",
//     "Tibetan",
//     "Desserts"
//   ],
//   "avgRating": 4.1,
//   "parentId": "61955",
//   "avgRatingString": "4.1",
//   "totalRatingsString": "1K+",
//   "sla": {
//     "deliveryTime": 49,
//     "lastMileTravel": 3.5,
//     "serviceability": "SERVICEABLE",
//     "slaString": "45-50 mins",
//     "lastMileTravelString": "3.5 km",
//     "iconType": "ICON_TYPE_EMPTY"
//   },
//   "availability": {
//     "nextCloseTime": "2024-04-25 23:00:00",
//     "opened": true
//   },
//   "badges": {
//     "imageBadges": [
//       {
//         "imageId": "Rxawards/_CATEGORY-Chinese.png",
//         "description": "Delivery!"
//       }
//     ]
//   },
//   "isOpen": true,
//   "type": "F",
//   "badgesV2": {
//     "entityBadges": {
//       "imageBased": {
//         "badgeObject": [
//           {
//             "attributes": {
//               "description": "Delivery!",
//               "imageId": "Rxawards/_CATEGORY-Chinese.png"
//             }
//           }
//         ]
//       },
//       "textBased": {
        
//       },
//       "textExtendedBadges": {
        
//       }
//     }
//   },
//   "aggregatedDiscountInfoV3": {
//     "header": "ITEMS",
//     "subHeader": "AT ₹179"
//   },
//   "orderabilityCommunication": {
//     "title": {
      
//     },
//     "subTitle": {
      
//     },
//     "message": {
      
//     },
//     "customIcon": {
      
//     }
//   },
//   "differentiatedUi": {
//     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//     "differentiatedUiMediaDetails": {
//       "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//       "lottie": {
        
//       },
//       "video": {
        
//       }
//     }
//   },
//   "reviewsSummary": {
    
//   },
//   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   "restaurantOfferPresentationInfo": {
    
//   }
// }


const RestaurantCard = (prop) =>{
    const {resData} = prop;
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo} = resData?.info; //optional chaining ⭐best practice
    const {deliveryTime} = sla;
    return(
        <div className='res-card' style={{background:"#f0f0f0f0"}}>
            <img className="res-logo" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h2>{costForTwo}</h2>
            <h4>{deliveryTime} min</h4>
            
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
            {/* <RestaurantCard resData = {resList[0]}/>
            <RestaurantCard resData = {resList[1]}/>
            <RestaurantCard resData = {resList[2]}/>
            <RestaurantCard resData = {resList[3]}/>
            <RestaurantCard resData = {resList[4]}/>
            <RestaurantCard resData = {resList[5]}/>
            <RestaurantCard resData = {resList[6]}/>
            <RestaurantCard resData = {resList[7]}/>
            <RestaurantCard resData = {resList[8]}/> */}

            {
              resList.map((restraunt) => <RestaurantCard key={restraunt.info.id} resData = {restraunt}/>)
            }
            
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