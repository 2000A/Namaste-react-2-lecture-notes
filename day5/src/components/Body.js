import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";
import {useState} from "react"
const Body = () => {
   
    //state variable -  a super powerful react variable
    
    const [listOfRestraunts,setListOfRestraunts] = useState(resList)
    /** 
     *  const arr = useState(resList)

    const [listOfRestraunts, setListOfRestraunts] = arr //nothing but array destructring
    
    //on breaking more
    const listOfRestraunts = arr[0];
    const setListOfRestraunts = arr[1]
    */
   
    //normal JS variable does nat has super powers.
    // let listOfRestraunts = [];
    // let listOfRestraunts = [
    //     {
    //     "info": {
    //         "id": "50597",
    //         "name": "Chinese Wok",
    //         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //         "locality": "R City",
    //         "areaName": "Ghatkopar West",
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //           "Chinese",
    //           "Asian",
    //           "Tibetan",
    //           "Desserts"
    //         ],
    //         "avgRating": 3.1,
    //         "sla": {
    //             "deliveryTime": 57,}
    //     }
    // },
    // {
    //     "info": {
    //         "id": "50597",
    //         "name": "Chinese Wok",
    //         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //         "locality": "R City",
    //         "areaName": "Ghatkopar West",
    //         "costForTwo": "₹250 for two",
    //         "cuisines": [
    //           "Chinese",
    //           "Asian",
    //           "Tibetan",
    //           "Desserts"
    //         ],
    //         "avgRating": 4.1,
    //         "sla": {
    //             "deliveryTime": 57,}
    //     }
    // }
    // ]
    return(
        <div className="body">
            {/* <div className="search">
                Search
            </div>  */}
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    // filter logic
                    const filteredList = listOfRestraunts.filter((res)=> res.info.avgRating > 4.2)
                    // console.log(listOfRestraunts)
                    //we will use setter function to update our restraunt list
                    setListOfRestraunts(filteredList); //as soon as listofrestraunts changes it automagically refreshes the component
                }}
                >
                    Top rated restaurants
                </button>
            </div>
            <div className="res-container">
                {
                  listOfRestraunts.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resObj={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;