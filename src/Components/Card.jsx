import React from 'react'
import "../css/card.css"

const Card = ({price,desc,img}) => {
  return (
  //   <div className="card">
  //   <div className="button">
  //     <button>
  //       {price}
      
  //       </button>
  //   </div>
  //   <div className="img">
  //   <img
  //    src={img} 
  //    alt="img" />
      
  //   </div>
  //   <div className="desc">
  //   <p>
  //     {desc}
     

  //     </p>
  //   </div>
  // </div>
  <div className="card-container">
    <div className=" cards" style={{ width: "" }}>
  <img src={img} className="card-img-top" alt=""  style={{ width: "21rem" }}/>
  <div className="card-body">
    <h5 className="card-title date">{price}</h5>
    <p className="card-text card-over">
      {desc}
    </p>
    {/* <a href="#" className="btn btn-primary">
      Go somewhere
    </a> */}
  </div>
</div>
  </div>

 
  )
}

export default Card