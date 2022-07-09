import React from 'react';
import './CSS/Card.css';


const Card=({item,handleClick})=>{
  const{id,title,description,price,img}=item;
  return(
    <div className="cards">
      <div className="image_box">
        <img className='imageitem' src={img} alt="No image"/>
      </div>
      <div className="details">
        <a href={"/details/"+id} >{title}</a>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={()=>handleClick(item)} className='btn'>Add to Cart</button>
      </div>
    </div>
  );
}
export default Card;