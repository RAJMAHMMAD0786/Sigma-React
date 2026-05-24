import React from 'react'

import "./Card.css"

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{overflow:"hidden"}}>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__kF07bXDIuZ2SsPF3EBkmTWC3mU6VZUf6w&s" alt="img not found" width={330} height={100} style={{border:"1px solid red" }}/>
                
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default Card
