import React from 'react';
import './CardItem.css';


const CardItem = () => {
    const cardItems = [{id:1, img:'images/img-2.jpg',text:'lorem ipsum ilorem soleam'},
{id:2, img:'images/img-9.jpg', text:'lorem ipsum ilorem soleam'},{id:3, img:'images/img-6.jpg',text:'lorem ipsum ilorem soleam'},
{id:4, img:'images/img-3.jpg', text:'lorem ipsum ilorem soleam'}, {id:5, img:'images/img-4.jpg', text:'lorem ipsum ilorem soleam'}
]
  return (
    <>
       {
        cardItems.map(cardItem => (
            <div className="cardItem" key={cardItem.id}>
                <img src={cardItem.img} alt="" className='card-item-img'/>
                <div className="card-body">
                    <p>{cardItem.text}</p>
                </div> 
            </div>
        ))
       } 
    </>
  )
}

export default CardItem;