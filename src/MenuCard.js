import React from 'react'
import './App.css'

const MenuCard = ({menuData}) => {
  
  return (
    <>
    <div className="section-layout">
    {
        menuData.map((cur)=>{
          const { id, category, name, description, image } = cur
        return(
            <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span><br />
            <span className="card-author subtle">{category}</span>
            <h2 className="card-title">{name}</h2>
            <span className="card-description subtle">
              {description}
            </span>
          
          </div>
          <img src={image} alt="images" className='card-media' />
          <div className="card-order subtle">
          <span className='card-tag subtle'>Order now</span>
          </div>
        </div>
      </div>
        )
        })
    }
    </div>
    </>
  )
}

export default MenuCard