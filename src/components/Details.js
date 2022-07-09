import React from 'react'
import list from './data';
import './CSS/Details.css';

export default function Details() {
  const url=window.location.href;
  const id=url.split('details/')[1];
  const item=list.find((d) => d.id == id)
  return (
    <div>
      <h1 className='heading'>Details of {item.title}</h1>
      <table className="table"  >
        <tr> <td><img className="img" src={item.img} /></td>
              <td><h1> {item.title}</h1></td>
              <td><p>{item.description}</p></td>
        </tr>
        
      </table>
    
   
    </div>

  )
}
