import React from 'react';


function Greeting() {
  return <Welcome name='avdhut' age={23} />;
}


const Welcome = (props) => {
  return (
    <div>
      <h1>Hello,{props.name} !</h1>
      <p>Your age is{props.age} </p>
    </div>
  );
}


export default Greeting;

////2.product display/////
import React from 'react';


function ProductDisplay() {
  return <Product name='Laptop' price={50000} />;
}


const Product = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
    </div>
  );
};
/////student details

import React  from 'react'
 function StudentDetails(){
  return< Student name='Pratik' grade='b+'/>
 }
 const Student =(props)=>{
  return(
    <div>
      <h4>{props.name}</h4>
      <p>Grade:{props.grade}</p>
    </div>

  )
 }
/////car component
import React from'react'

function CarInfo(){
  return<Car brand='Bmw'model='Q5'/>
}

const Car=(props)=>{
  return(
    <div>
      <h2>{props.brand}</h2>
      <p>Model:{props.model}</p>
    </div>
  )
}
// export default CarInfo;

////Simple Bio////
import React from'react'

function Bio(){
  return<Person name='avdhut' hobby='Cooking'/>
}

const Person=(props)=>{
  return(
    <div>
      <h1>{ props.name}</h1>
      <p>Hobby:{props.hobby}</p>
    </div>
  )
}
// export default Bio


////Job Posting/////
import React from 'react'

function JobInfo(){
  return<Job tittle='Developer'company='Google'/>
}
const  Job=(props)=>{
  return(
    <div>
      <h2>{props.title}</h2>
      <p>Company:{props.company}</p>
    </div>
  )
}
// export default Job;

////task component///

function TaskDetails(){
  return
}

const Task=(props)=>{
  return(
    <div>
      <h3>Task:{props.name}</h3>
      <p>Status:{props.status}</p>
    </div>
  )
}
// export default Task;
