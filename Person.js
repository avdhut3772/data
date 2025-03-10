import React from 'react'
function Avdhut(){
    return<Person name='yash' like='play kabbadi'rank='1'/>
}

// const Person=(props)=>{
//     console.log(props)
//     return(
//         <>
//         <h1>name:{props.name}</h1>
//         <h2>like:{props.like}</h2>
//         <h3>rank:{props.rank}</h3>
        
//         </>
//     )

// }

///////////////
const Person=({name,like,rank})=>{
    return(
        <>
        
        <h1>name:{name}</h1>
        <h2> like:{like}</h2>
        <h3>rank:{rank}</h3>
        
        
        </>
    )

}

export default Avdhut;