// // import ReactDom from 'react-dom';
// //  function Avdhut(){
// //     return(
// //         <div>Avdhut</div>
// //     )
// //  }
// //  export default Avdhut



// //  const Avdhut=()=>{
// //     return(
// //         <>
// //         <Bike/>
// //         <Car/>
        
        
// //         </>
// //     )
// //  }
    

// //  const Bike=()=><h1> this is my bike</h1>
// //  const Car=()=><h1>this is my car</h1>
// //  export default Avdhut


// // import React from 'react'


// // function Avdhut() {
// //   return (

// //     <>
// //    <Person/>
// //   <Message/>
    
// //     </>
// //   )
// // }
// // const Person=()=><h2>avdhut</h2>
// // const Message=()=><h2>khot</h2>

// // export default Avdhut


// import React from 'react'

// function Avdhut() {
//    return <>
//    <Person/>
    
//     </>

// }
// function Person(){
//     return(
//         <>
//         <h1>name:avdhut</h1>
//         <h1> age:23</h1>
//         <h1>location:</h1>
//         <p>message : <Message/> </p>
//         <br/>
//         <img/>
//         </>

       
        
        
       

//     )
// }
// const Message=()=><h1>this is a data this page</h1>
// const img=()=>(
//     <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"/>

// )

///1user profile///
import React from 'react'
const UserProfile=()=>(
    <>
    <User/>
    </>
)

Function User(){
    return(
        <>
        <h1>Username:john doe</h1>
        <h2>Role:Developer</h2>
        <h3>Experience:5 years</h3>
        < Status/>
        <ProfilePic/>
        </>

        
    
    )

    const Status=()=><P> Satus:Active</P>
    const ProfilePic=()=>(
        <img src='https://via.placeholder.com/100' alt='Profile'/>
    )
    

}
export default Avdhut;

///2.Weather Info//
import React from 'react';


const Weather = () => (
  <>
    <City />
  </>
);


function City() {
  return (
    <>
      <h1>City: Mumbai</h1>
      <h2>Temperature: 30°C</h2>
      <h3>Condition: Sunny</h3>
      <Alert />
    </>
  );
}
export default Avdhut;


const Alert = () => <p>Weather Alert: No alerts</p>;
////3.Book Details///
import React from 'react';


const Book = () => (
  <>
    <BookInfo />
  </>
);


function BookInfo() {
  return (
    <>
      <h1>Title: React for Beginners</h1>
      <h2>Author: John Smith</h2>
      <h3>Pages: 250</h3>
      <Availability />
    </>
  );
}


const Availability = () => <p>Status: Available</p>;
export default Avdhut;

//////////////4.*Car Info//////////////
import React from 'react';


const Car = () => (
  <>
    <CarDetails />
  </>
);


function CarDetails() {
  return (
    <>
      <h1>Brand: Tesla</h1>
      <h2>Model: Model S</h2>
      <h3>Year: 2022</h3>
      <Feature />
    </>
  );
}


const Feature = () => <p>Feature: Autopilot</p>;
export default Avdhut;


/////5.Movie Info///
import React from 'react';


const Movie = () => (
  <>
    <MovieDetails />
  </>
);


function MovieDetails() {
  return (
    <>
      <h1>Title: Avengers</h1>
      <h2>Genre: Action</h2>
      <h3>Rating: 8.5/10</h3>
      <Review />
    </>
  );
}


const Review = () => <p>Review: Must Watch!</p>;
export default Avdhut;

////Country Details//////
import React from 'react';


const Country = () => (
  <>
    <CountryInfo />
  </>
);


function CountryInfo() {
  return (
    <>
      <h1>Country: India</h1>
      <h2>Capital: New Delhi</h2>
      <h3>Population: 1.4 Billion</h3>
      <Currency />
    </>
  );
}


const Currency = () => <p>Currency: Indian Rupee (INR)</p>;
export default Avdhut;

///////food item/////
import React from 'react';


const Food = () => (
  <>
    <FoodDetails />
  </>
);


function FoodDetails() {
  return (
    <>
      <h1>Dish: Pizza</h1>
      <h2>Type: Italian</h2>
      <h3>Calories: 285 kcal</h3>
      <Taste />
    </>
  );
}


const Taste = () => <p>Taste: Delicious</p>;
export default Avdhut;



//////Mobile Phone Details/////
import React from 'react';


const Mobile = () => (
  <>
    <MobileDetails />
  </>
);


function MobileDetails() {
  return (
    <>
      <h1>Brand: Apple</h1>
      <h2>Model: iPhone 15</h2>
      <h3>Storage: 256GB</h3>
      <Battery />
    </>
  );
}


const Battery = () => <p>Battery: 4000mAh</p>;
export default Avdhut;


//////music Album///
import React from 'react';
const Album=()=>(
    <>
    <AlbumDetails/>
    </>
    
    
   

)
function AlbumDetails(){
    return(
        <>
        <h1>Album:Random Acess Memories</h1>
        <h2>Artist:Daft Punk</h2>
       <h3>Years:2013</h3>
       < Song/>
    
    
    
        
        </>
       const Song=()=><p>Hits song:Get Lckey</p>


    )
}
export default Avdhut;



////laptope Details///

import React from 'react'
const Laptope=()=>(
    <>
    
    
    </>
)
 function LaptopInfo(){
    return(
        <>
        <h1>Brand:Dell</h1>
        <h2>Model:XPS 15</h2>
        <h3>Ram:16GB</h3>
        
        </>
    )
 }
 const Processor()=><p>Processor:Intel i7</p>;
export default Avdhut;














export default Avdhut



