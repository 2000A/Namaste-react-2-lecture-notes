import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  console.log("Body rendered");
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestraunts, setFilteredRestraunts] = useState([])

  //First the Body component will render and as render cycle ends react will call useEffects callback function.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0857297&lng=72.9090057&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListOfRestraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunts(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //if our listOfRestraurnts is empty then render Loading
  //and rendring according to condition is conditional rendering
  // if (listOfRestraunts.length == 0) {
  //   return <Shimmer />;
  // }
  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="type ..."
            value={searchText} //input binded with local state variable
            onChange={(e)=> setSearchText(e.target.value)}
          />
          <button
          onClick={()=>{
            //Filter the restraunt cars and update the UI
            //searchText
            // console.log(searchText)
            // const filteredRestraunt = listOfRestraunts.filter((res)=> res.info.name === searchText) 
            //to make it not case sensitive then make both lowercase before checking
            let filteredRestrauntList = listOfRestraunts.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            // setListOfRestraunts(filteredRestraunt); not going to change the original restraunt list 
            setFilteredRestraunts(filteredRestrauntList)
          }}
          >search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestraunts.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            // setListOfRestraunts(filteredList); 
            setFilteredRestraunts(filteredList)
            
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRestraunts.map((restraunt) => ( 
          <RestaurantCard key={restraunt.info.id} resObj={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
