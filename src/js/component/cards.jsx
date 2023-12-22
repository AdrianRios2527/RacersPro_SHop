import React from "react";

export const Cards = (props) => {

    return (

        <div className="card bg-black text-white m-4" style={{width: "18rem"}}>
        <img className="card-img-top" style={{width: "100%", height: "40%"}} src={props.url} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center mt-2">{props.tittle}</h5>
          <p className="card-text flex-grow-1 mt-2">{props.texts}</p>
          <a href="#" className="btn btn-success align-self-end">Buy</a>
        </div>
      </div>
      
    )
}