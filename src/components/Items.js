import React, { useState } from 'react'
import Card from './Card';
import list from './data';
import './CSS/Items.css';
function Items({handleClick}) {

  return (
    <div className="itemcontainer">
        <h1>Browse Items</h1>
        <div className="items">
       { list.map((item) =>
          (<Card key={item.id} item={item} handleClick={handleClick}/>))}
        </div>
    </div>
  )
}

export default Items;