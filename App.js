/** 
import React from "react";

import ReactDOM from "react-dom/client";  

// 
//              * Header
//              *   -Logo
//              *   -NavItems
//              *   -Cart
//              *   
//              *   Body
//              *     -SearcHbar
//              *     -restaurantList
//              *     -restaurantCard
//              *       -Image
//              *       -Name
//              *       -Rating
//              *       -Cuisines
//              * 
//              *    Footer
//              *     -Links 
//              *     -CopyRights
//              * 
//              *  
//              * 
//              


const Title=()=>{
    return(
 <h1 id="title" key="h2">FoodVilla</h1> 

//  <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a> 
    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

const RestaurantCard=()=>{
    return(
        <div className="card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
            <h2>BurgerKing</h2>
            <h3>Burger,American</h3>
            <h4>4.2 stars</h4>

        </div>
    )
}

const Body=()=>{
    return(
        // <h1>Body</h1>
       <RestaurantCard/>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

*/

//  ************************************************************************************8


/*
import React from "react";

import ReactDOM from "react-dom/client";  


            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
             


const Title=()=>{
    return(
 <h1 id="title" key="h2">FoodVilla</h1> 

//  <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a> 
    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};


const burgerKing={
    name:"Burger King",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cuisines:["Burger,American"],
    rating:"4.2",
}
const RestaurantCard=()=>{
    return(
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cuisines.join(",")}</h3>
            <h4>{burgerKing.rating} stars</h4>

        </div>
    )
}

// const Body=()=>{
//     return(
//         // <h1>Body</h1>
//        <RestaurantCard/>
//     );
// };

const Body=()=>{
    return(
        <div class="restaurant-list">
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       </div>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

*/

// **********************************************************************************************************************


/*

import React from "react";

import ReactDOM from "react-dom/client";  


            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
             


const Title=()=>{
    return(
    
 <h1 id="title" key="h2">FoodVilla</h1> 

//   <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a>  

    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

//config driven ui
const restaurantList=[
    {
         
          "id": "70500",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "PVP Square mall",
          "areaName": "Christurajupuram",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "avgRatingString": "4.0",
        },

         {
            "id": "71350",
            "name": "Sweet Magic Mithai Shop",
            "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
            "locality": "Mg Road",
            "areaName": "Labbipet",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Biryani",
              "Desserts",
              "Sweets",
              "Bakery"
            ],
            "avgRating": 4.1,
            "avgRatingString": "4.1",
        },

        {

        "id": "234764",
                      "name": "Basil Pizzeria",
                      "cloudinaryImageId": "4a1a7639fa86cb4e15a35d55e5e7d390",
                      "locality": "Polyclinic Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Burgers"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

{
                    "id": "68611",
                      "name": "RR Durbar",
                      "cloudinaryImageId": "ef2cb7ec71357f8609203236620b007d",
                      "locality": "Siddhartha Nagar\n",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Andhra",
                        "Chinese",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "178378",
                      "name": "Tandoori Hub",
                      "cloudinaryImageId": "brlbwyzoq49acejaqixc",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "North Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",

                    },

                    {
                        "id": "69570",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Mg Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "71320",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "P & T Colony",
                      "areaName": "Auto Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",
                    },

                    { 
                        "id": "68809",
                      "name": "Klub F5",
                      "cloudinaryImageId": "ddg8lc4a96pqqli9zfpy",
                      "locality": "Siddhartha nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "North Indian",
                        "Tandoor",
                        "Chinese",
                        "American"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68617",
                      "name": "Sri Anjaneya Restaurant",
                      "cloudinaryImageId": "i7n1ckfopgxmyyotm7l7",
                      "locality": "Guru Nanak Colony Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra",
                        "South Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",
                    },

                    {
                        "id": "356930",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },


                    {
                        "id": "68471",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "avgRatingString": "4.3",
                    },

                    {
                        "id": "76736",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "SURYA SATYA APARTMENTS",
                      "areaName": "FORTUNE MURALI PARK ROAD",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "70496",
                      "name": "Cross Roads Restaurant",
                      "cloudinaryImageId": "jefzpknm7mfidxlnibf8",
                      "locality": "Mogalrajapuram",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",

                    },

                    {
                        "id": "289588",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
                      "locality": "Sidhartha Nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },

                    {
                        "id": "490218",
                      "name": "Havmor Havfunn Ice Cream",
                      "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
                      "locality": "Lic Colony",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Ice Cream Cakes",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",

                    },

                    {
                        "id": "71351",
                      "name": "Sweet Magic",
                      "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
                      "locality": "Rama Rao Street",
                      "areaName": "Labbipet",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian",
                        "Tandoor",
                        "Desserts",
                        "Bakery",
                        "Chinese",
                        "Thalis",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68615",
                      "name": "Silver Dum Biryani - Original",
                      "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
                      "locality": "Panta Kaluva Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "North Indian",
                        "Seafood"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

                    {
                        "id": "69574",
                      "name": "Temptations",
                      "cloudinaryImageId": "erwzzzxdrslueoiignfk",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Chaat",
                        "Jain",
                        "Chinese",
                        "Pizzas",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "68796",
                      "name": "Anjaneya Family Restaurants Veg & Non veg",
                      "cloudinaryImageId": "gtpu3p8bpijkp2agnrxh",
                      "locality": "Besent Road\n",
                      "areaName": "Governorpet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra"
                      ],
                      "avgRating": 3.7,
                      "avgRatingString": "3.7",
                    }




]
const RestaurantCard=()=>{
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurantList[3].cloudinaryImageId}/>
            <h2>{restaurantList[1].name}</h2>
            <h3>{restaurantList[1].cuisines.join(",")}</h3>
            <h4>{restaurantList[1].avgRating} stars</h4>

        </div>
    )
}


const Body=()=>{
    return(
        <div className="restaurant-list">
       
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       </div>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
*/

// (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))


/*

import React from "react";

import ReactDOM from "react-dom/client";  


            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
             


const Title=()=>{
    return(
 <h1 id="title" key="h2">FoodVilla</h1> 

//  <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a>  
    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

//config driven ui
const restaurantList=[
    {
         
          "id": "70500",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "PVP Square mall",
          "areaName": "Christurajupuram",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "avgRatingString": "4.0",
        },

         {
            "id": "71350",
            "name": "Sweet Magic Mithai Shop",
            "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
            "locality": "Mg Road",
            "areaName": "Labbipet",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Biryani",
              "Desserts",
              "Sweets",
              "Bakery"
            ],
            "avgRating": 4.1,
            "avgRatingString": "4.1",
        },

        {

        "id": "234764",
                      "name": "Basil Pizzeria",
                      "cloudinaryImageId": "4a1a7639fa86cb4e15a35d55e5e7d390",
                      "locality": "Polyclinic Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Burgers"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

{
                    "id": "68611",
                      "name": "RR Durbar",
                      "cloudinaryImageId": "ef2cb7ec71357f8609203236620b007d",
                      "locality": "Siddhartha Nagar\n",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Andhra",
                        "Chinese",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "178378",
                      "name": "Tandoori Hub",
                      "cloudinaryImageId": "brlbwyzoq49acejaqixc",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "North Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",

                    },

                    {
                        "id": "69570",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Mg Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "71320",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "P & T Colony",
                      "areaName": "Auto Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",
                    },

                    { 
                        "id": "68809",
                      "name": "Klub F5",
                      "cloudinaryImageId": "ddg8lc4a96pqqli9zfpy",
                      "locality": "Siddhartha nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "North Indian",
                        "Tandoor",
                        "Chinese",
                        "American"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68617",
                      "name": "Sri Anjaneya Restaurant",
                      "cloudinaryImageId": "i7n1ckfopgxmyyotm7l7",
                      "locality": "Guru Nanak Colony Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra",
                        "South Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",
                    },

                    {
                        "id": "356930",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },


                    {
                        "id": "68471",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "avgRatingString": "4.3",
                    },

                    {
                        "id": "76736",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "SURYA SATYA APARTMENTS",
                      "areaName": "FORTUNE MURALI PARK ROAD",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "70496",
                      "name": "Cross Roads Restaurant",
                      "cloudinaryImageId": "jefzpknm7mfidxlnibf8",
                      "locality": "Mogalrajapuram",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",

                    },

                    {
                        "id": "289588",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
                      "locality": "Sidhartha Nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },

                    {
                        "id": "490218",
                      "name": "Havmor Havfunn Ice Cream",
                      "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
                      "locality": "Lic Colony",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Ice Cream Cakes",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",

                    },

                    {
                        "id": "71351",
                      "name": "Sweet Magic",
                      "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
                      "locality": "Rama Rao Street",
                      "areaName": "Labbipet",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian",
                        "Tandoor",
                        "Desserts",
                        "Bakery",
                        "Chinese",
                        "Thalis",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68615",
                      "name": "Silver Dum Biryani - Original",
                      "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
                      "locality": "Panta Kaluva Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "North Indian",
                        "Seafood"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

                    {
                        "id": "69574",
                      "name": "Temptations",
                      "cloudinaryImageId": "erwzzzxdrslueoiignfk",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Chaat",
                        "Jain",
                        "Chinese",
                        "Pizzas",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "68796",
                      "name": "Anjaneya Family Restaurants Veg & Non veg",
                      "cloudinaryImageId": "gtpu3p8bpijkp2agnrxh",
                      "locality": "Besent Road\n",
                      "areaName": "Governorpet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra"
                      ],
                      "avgRating": 3.7,
                      "avgRatingString": "3.7",
                    }




]
const RestaurantCard=(props)=>{
    console.log(props);
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.cloudinaryImageId}/>
            <h2>{props.restaurant.name}</h2>
            <h3>{props.restaurant.cuisines.join(",")}</h3>
            <h4>{props.restaurant.avgRating} stars</h4>

        </div>
    )
}


const Body=()=>{
    return(
        <div className="restaurant-list">
           <RestaurantCard(restaurantList[0])/>
       
       <RestaurantCard restaurant={restaurantList[0]}/>
       <RestaurantCard restaurant={restaurantList[1]}/>
       <RestaurantCard restaurant={restaurantList[2]}/>
       <RestaurantCard restaurant={restaurantList[3]}/>
       <RestaurantCard restaurant={restaurantList[4]}/>
       <RestaurantCard restaurant={restaurantList[5]}/>
       <RestaurantCard restaurant={restaurantList[6]}/>
       <RestaurantCard restaurant={restaurantList[7]}/>
       <RestaurantCard restaurant={restaurantList[8]}/>
       <RestaurantCard restaurant={restaurantList[9]}/>
       <RestaurantCard restaurant={restaurantList[10]}/>
       <RestaurantCard restaurant={restaurantList[11]}/>
       <RestaurantCard restaurant={restaurantList[12]}/>
       <RestaurantCard restaurant={restaurantList[13]}/>
       <RestaurantCard restaurant={restaurantList[14]}/>
       <RestaurantCard restaurant={restaurantList[15]}/>
       <RestaurantCard restaurant={restaurantList[16]}/>
       <RestaurantCard restaurant={restaurantList[17]}/>
       </div>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

*/
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


/*
import React from "react";

import ReactDOM from "react-dom/client";  


            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
            //  *


const Title=()=>{
    return(
 <h1 id="title" key="h2">FoodVilla</h1> 

// <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a> 
    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

//config driven ui
const restaurantList=[
    {
         
          "id": "70500",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "PVP Square mall",
          "areaName": "Christurajupuram",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "avgRatingString": "4.0",
        },

         {
            "id": "71350",
            "name": "Sweet Magic Mithai Shop",
            "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
            "locality": "Mg Road",
            "areaName": "Labbipet",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Biryani",
              "Desserts",
              "Sweets",
              "Bakery"
            ],
            "avgRating": 4.1,
            "avgRatingString": "4.1",
        },

        {

        "id": "234764",
                      "name": "Basil Pizzeria",
                      "cloudinaryImageId": "4a1a7639fa86cb4e15a35d55e5e7d390",
                      "locality": "Polyclinic Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Burgers"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

{
                    "id": "68611",
                      "name": "RR Durbar",
                      "cloudinaryImageId": "ef2cb7ec71357f8609203236620b007d",
                      "locality": "Siddhartha Nagar\n",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Andhra",
                        "Chinese",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "178378",
                      "name": "Tandoori Hub",
                      "cloudinaryImageId": "brlbwyzoq49acejaqixc",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "North Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",

                    },

                    {
                        "id": "69570",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Mg Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "71320",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "P & T Colony",
                      "areaName": "Auto Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",
                    },

                    { 
                        "id": "68809",
                      "name": "Klub F5",
                      "cloudinaryImageId": "ddg8lc4a96pqqli9zfpy",
                      "locality": "Siddhartha nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "North Indian",
                        "Tandoor",
                        "Chinese",
                        "American"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68617",
                      "name": "Sri Anjaneya Restaurant",
                      "cloudinaryImageId": "i7n1ckfopgxmyyotm7l7",
                      "locality": "Guru Nanak Colony Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra",
                        "South Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",
                    },

                    {
                        "id": "356930",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },


                    {
                        "id": "68471",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "avgRatingString": "4.3",
                    },

                    {
                        "id": "76736",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "SURYA SATYA APARTMENTS",
                      "areaName": "FORTUNE MURALI PARK ROAD",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "70496",
                      "name": "Cross Roads Restaurant",
                      "cloudinaryImageId": "jefzpknm7mfidxlnibf8",
                      "locality": "Mogalrajapuram",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",

                    },

                    {
                        "id": "289588",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
                      "locality": "Sidhartha Nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },

                    {
                        "id": "490218",
                      "name": "Havmor Havfunn Ice Cream",
                      "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
                      "locality": "Lic Colony",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Ice Cream Cakes",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",

                    },

                    {
                        "id": "71351",
                      "name": "Sweet Magic",
                      "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
                      "locality": "Rama Rao Street",
                      "areaName": "Labbipet",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian",
                        "Tandoor",
                        "Desserts",
                        "Bakery",
                        "Chinese",
                        "Thalis",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68615",
                      "name": "Silver Dum Biryani - Original",
                      "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
                      "locality": "Panta Kaluva Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "North Indian",
                        "Seafood"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

                    {
                        "id": "69574",
                      "name": "Temptations",
                      "cloudinaryImageId": "erwzzzxdrslueoiignfk",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Chaat",
                        "Jain",
                        "Chinese",
                        "Pizzas",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "68796",
                      "name": "Anjaneya Family Restaurants Veg & Non veg",
                      "cloudinaryImageId": "gtpu3p8bpijkp2agnrxh",
                      "locality": "Besent Road\n",
                      "areaName": "Governorpet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra"
                      ],
                      "avgRating": 3.7,
                      "avgRatingString": "3.7",
                    }




]
const RestaurantCard=({restaurant})=>{
    const{name,cuisines,avgRating,cloudinaryImageId}=restaurant;
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>

        </div>
    )
}


const Body=()=>{
    return(
        <div className="restaurant-list">
            //  {RestaurantCard(restaurantList[0])}  
       
       <RestaurantCard restaurant={restaurantList[0]}/>
       <RestaurantCard restaurant={restaurantList[1]}/>
       <RestaurantCard restaurant={restaurantList[2]}/>
       <RestaurantCard restaurant={restaurantList[3]}/>
       <RestaurantCard restaurant={restaurantList[4]}/>
       <RestaurantCard restaurant={restaurantList[5]}/>
       <RestaurantCard restaurant={restaurantList[6]}/>
       <RestaurantCard restaurant={restaurantList[7]}/>
       <RestaurantCard restaurant={restaurantList[8]}/>
       <RestaurantCard restaurant={restaurantList[9]}/>
       <RestaurantCard restaurant={restaurantList[10]}/>
       <RestaurantCard restaurant={restaurantList[11]}/>
       <RestaurantCard restaurant={restaurantList[12]}/>
       <RestaurantCard restaurant={restaurantList[13]}/>
       <RestaurantCard restaurant={restaurantList[14]}/>
       <RestaurantCard restaurant={restaurantList[15]}/>
       <RestaurantCard restaurant={restaurantList[16]}/>
       <RestaurantCard restaurant={restaurantList[17]}/>
       </div>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

*/
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


/*
import React from "react";

import ReactDOM from "react-dom/client";  


            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
             //


const Title=()=>{
    return(
 <h1 id="title" key="h2">FoodVilla</h1> 

//  <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a> 
    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

//config driven ui
const restaurantList=[
    {
         
          "id": "70500",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "PVP Square mall",
          "areaName": "Christurajupuram",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "avgRatingString": "4.0",
        },

         {
            "id": "71350",
            "name": "Sweet Magic Mithai Shop",
            "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
            "locality": "Mg Road",
            "areaName": "Labbipet",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Biryani",
              "Desserts",
              "Sweets",
              "Bakery"
            ],
            "avgRating": 4.1,
            "avgRatingString": "4.1",
        },

        {

        "id": "234764",
                      "name": "Basil Pizzeria",
                      "cloudinaryImageId": "4a1a7639fa86cb4e15a35d55e5e7d390",
                      "locality": "Polyclinic Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Burgers"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

{
                    "id": "68611",
                      "name": "RR Durbar",
                      "cloudinaryImageId": "ef2cb7ec71357f8609203236620b007d",
                      "locality": "Siddhartha Nagar\n",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Andhra",
                        "Chinese",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "178378",
                      "name": "Tandoori Hub",
                      "cloudinaryImageId": "brlbwyzoq49acejaqixc",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "North Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",

                    },

                    {
                        "id": "69570",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Mg Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "71320",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "P & T Colony",
                      "areaName": "Auto Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",
                    },

                    { 
                        "id": "68809",
                      "name": "Klub F5",
                      "cloudinaryImageId": "ddg8lc4a96pqqli9zfpy",
                      "locality": "Siddhartha nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "North Indian",
                        "Tandoor",
                        "Chinese",
                        "American"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68617",
                      "name": "Sri Anjaneya Restaurant",
                      "cloudinaryImageId": "i7n1ckfopgxmyyotm7l7",
                      "locality": "Guru Nanak Colony Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra",
                        "South Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",
                    },

                    {
                        "id": "356930",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },


                    {
                        "id": "68471",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "avgRatingString": "4.3",
                    },

                    {
                        "id": "76736",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "SURYA SATYA APARTMENTS",
                      "areaName": "FORTUNE MURALI PARK ROAD",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "70496",
                      "name": "Cross Roads Restaurant",
                      "cloudinaryImageId": "jefzpknm7mfidxlnibf8",
                      "locality": "Mogalrajapuram",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",

                    },

                    {
                        "id": "289588",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
                      "locality": "Sidhartha Nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },

                    {
                        "id": "490218",
                      "name": "Havmor Havfunn Ice Cream",
                      "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
                      "locality": "Lic Colony",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Ice Cream Cakes",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",

                    },

                    {
                        "id": "71351",
                      "name": "Sweet Magic",
                      "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
                      "locality": "Rama Rao Street",
                      "areaName": "Labbipet",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian",
                        "Tandoor",
                        "Desserts",
                        "Bakery",
                        "Chinese",
                        "Thalis",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68615",
                      "name": "Silver Dum Biryani - Original",
                      "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
                      "locality": "Panta Kaluva Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "North Indian",
                        "Seafood"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

                    {
                        "id": "69574",
                      "name": "Temptations",
                      "cloudinaryImageId": "erwzzzxdrslueoiignfk",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Chaat",
                        "Jain",
                        "Chinese",
                        "Pizzas",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "68796",
                      "name": "Anjaneya Family Restaurants Veg & Non veg",
                      "cloudinaryImageId": "gtpu3p8bpijkp2agnrxh",
                      "locality": "Besent Road\n",
                      "areaName": "Governorpet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra"
                      ],
                      "avgRating": 3.7,
                      "avgRatingString": "3.7",
                    }




]
const RestaurantCard=({name,
    cuisines,
    avgRating,
    cloudinaryImageId})=>{
    
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>

        </div>
    )
}


const Body=()=>{
    return(
        <div className="restaurant-list">
            //  {RestaurantCard(restaurantList[0])}  
       
       <RestaurantCard {...restaurantList[0]}/>
       <RestaurantCard {...restaurantList[1]}/>
       <RestaurantCard {...restaurantList[2]}/>
       <RestaurantCard {...restaurantList[3]}/>
       <RestaurantCard {...restaurantList[4]}/>
       <RestaurantCard {...restaurantList[5]}/>
       <RestaurantCard {...restaurantList[6]}/>
       <RestaurantCard {...restaurantList[7]}/>
       <RestaurantCard {...restaurantList[8]}/>
       <RestaurantCard {...restaurantList[9]}/>
       <RestaurantCard {...restaurantList[10]}/>
       <RestaurantCard {...restaurantList[11]}/>
       <RestaurantCard {...restaurantList[12]}/>
       <RestaurantCard {...restaurantList[13]}/>
       <RestaurantCard {...restaurantList[14]}/>
       <RestaurantCard {...restaurantList[15]}/>
       <RestaurantCard {...restaurantList[16]}/>
       <RestaurantCard {...restaurantList[17]}/>
       <RestaurantCard {...restaurantList[18]}/>
       
       </div>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

*/


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^66


import React from "react";

import ReactDOM from "react-dom/client";  


            //  * Header
            //  *   -Logo
            //  *   -NavItems
            //  *   -Cart
            //  *   
            //  *   Body
            //  *     -SearcHbar
            //  *     -restaurantList
            //  *     -restaurantCard
            //  *       -Image
            //  *       -Name
            //  *       -Rating
            //  *       -Cuisines
            //  * 
            //  *    Footer
            //  *     -Links 
            //  *     -CopyRights
            //  * 
            //  *  
            //  * 
             


const Title=()=>{
    return(
 <h1 id="title" key="h2">FoodVilla</h1> 
//  <a href="/">
// <img 
// className=""
// alt="logo"
// src=""/>
// </a> 
    );

};


const Header=()=>{
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};

//config driven ui
const restaurantList=[
    {
         
          "id": "70500",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "PVP Square mall",
          "areaName": "Christurajupuram",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4,
          "avgRatingString": "4.0",
        },

         {
            "id": "71350",
            "name": "Sweet Magic Mithai Shop",
            "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
            "locality": "Mg Road",
            "areaName": "Labbipet",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "South Indian",
              "Indian",
              "Biryani",
              "Desserts",
              "Sweets",
              "Bakery"
            ],
            "avgRating": 4.1,
            "avgRatingString": "4.1",
        },

        {

        "id": "234764",
                      "name": "Basil Pizzeria",
                      "cloudinaryImageId": "4a1a7639fa86cb4e15a35d55e5e7d390",
                      "locality": "Polyclinic Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Pizzas",
                        "Burgers"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

{
                    "id": "68611",
                      "name": "RR Durbar",
                      "cloudinaryImageId": "ef2cb7ec71357f8609203236620b007d",
                      "locality": "Siddhartha Nagar\n",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Andhra",
                        "Chinese",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "178378",
                      "name": "Tandoori Hub",
                      "cloudinaryImageId": "brlbwyzoq49acejaqixc",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "North Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",

                    },

                    {
                        "id": "69570",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Mg Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "71320",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "P & T Colony",
                      "areaName": "Auto Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",
                    },

                    { 
                        "id": "68809",
                      "name": "Klub F5",
                      "cloudinaryImageId": "ddg8lc4a96pqqli9zfpy",
                      "locality": "Siddhartha nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Beverages",
                        "North Indian",
                        "Tandoor",
                        "Chinese",
                        "American"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68617",
                      "name": "Sri Anjaneya Restaurant",
                      "cloudinaryImageId": "i7n1ckfopgxmyyotm7l7",
                      "locality": "Guru Nanak Colony Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra",
                        "South Indian"
                      ],
                      "avgRating": 3.6,
                      "avgRatingString": "3.6",
                    },

                    {
                        "id": "356930",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      "locality": "Guru Nanak Colony",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },


                    {
                        "id": "68471",
                      "name": "The Belgian Waffle Co.",
                      "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Waffle",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "avgRatingString": "4.3",
                    },

                    {
                        "id": "76736",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "SURYA SATYA APARTMENTS",
                      "areaName": "FORTUNE MURALI PARK ROAD",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "70496",
                      "name": "Cross Roads Restaurant",
                      "cloudinaryImageId": "jefzpknm7mfidxlnibf8",
                      "locality": "Mogalrajapuram",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",

                    },

                    {
                        "id": "289588",
                      "name": "Cafe Coffee Day",
                      "cloudinaryImageId": "b70c7d23d197251b7b315b7e4d8173ae",
                      "locality": "Sidhartha Nagar",
                      "areaName": "Labbipet",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Cafe",
                        "Snacks",
                        "Desserts",
                        "Burgers",
                        "Ice Cream",
                        "Bakery",
                        "Fast Food"
                      ],
                      "avgRating": 3.9,
                      "avgRatingString": "3.9",
                    },

                    {
                        "id": "490218",
                      "name": "Havmor Havfunn Ice Cream",
                      "cloudinaryImageId": "49845b494b1e637209b7bd1c7ca184ad",
                      "locality": "Lic Colony",
                      "areaName": "Christurajupuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Ice Cream Cakes",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.1,
                      "avgRatingString": "4.1",

                    },

                    {
                        "id": "71351",
                      "name": "Sweet Magic",
                      "cloudinaryImageId": "lzk60pgzej2frjof7mzz",
                      "locality": "Rama Rao Street",
                      "areaName": "Labbipet",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Indian",
                        "Tandoor",
                        "Desserts",
                        "Bakery",
                        "Chinese",
                        "Thalis",
                        "Beverages"
                      ],
                      "avgRating": 3.8,
                      "avgRatingString": "3.8",
                    },

                    {
                        "id": "68615",
                      "name": "Silver Dum Biryani - Original",
                      "cloudinaryImageId": "rlyepihgnuxcs74qjitv",
                      "locality": "Panta Kaluva Road",
                      "areaName": "Gurunanak Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Chinese",
                        "North Indian",
                        "Seafood"
                      ],
                      "avgRating": 4.2,
                      "avgRatingString": "4.2",
                    },

                    {
                        "id": "69574",
                      "name": "Temptations",
                      "cloudinaryImageId": "erwzzzxdrslueoiignfk",
                      "locality": "Tikkle Road",
                      "areaName": "Labbipet",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Chaat",
                        "Jain",
                        "Chinese",
                        "Pizzas",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4,
                      "avgRatingString": "4.0",
                    },

                    {
                        "id": "68796",
                      "name": "Anjaneya Family Restaurants Veg & Non veg",
                      "cloudinaryImageId": "gtpu3p8bpijkp2agnrxh",
                      "locality": "Besent Road\n",
                      "areaName": "Governorpet",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Biryani",
                        "Tandoor",
                        "Chinese",
                        "North Indian",
                        "Andhra"
                      ],
                      "avgRating": 3.7,
                      "avgRatingString": "3.7",
                    }




]
const RestaurantCard=({name,
    cuisines,
    avgRating,
    cloudinaryImageId})=>{
    
    return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>

        </div>
    )
}


const Body=()=>{
    return(
        <div className="restaurant-list">
           {restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
           })}
       
       </div>
    );
};

const Footer=()=>{
    return(
        <h1>Footer</h1>
    );
};


const AppLayout=()=>{
    return(
        
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
            
        
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);





