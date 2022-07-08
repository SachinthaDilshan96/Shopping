import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './CSS/SlideShow.css'
import i from '../Images/ecommerce1.jpg';
const slideImages = [
  {
    url: require('../Images/ecommerce1.jpg'),
    caption: 'HouseHolds'
  },
  {
    url: require('../Images/ecommerce2.jpg'),
    caption: 'Fashion'
  },
  {
    url: require('../Images/ecommerce3.jpg'),
    caption: 'Electronics'
  },
  {
    url: require('../Images/ecommerce4.jpg'),
    caption: 'And Many other'
  },
];

const Slideshow = () => {
    return (
      <div className="slidecontainer">
        
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="imagediv" key={index}>
                <img className='image' src={slideImage.url} alt='null'/>
                <span>{slideImage.caption}</span>
              
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;