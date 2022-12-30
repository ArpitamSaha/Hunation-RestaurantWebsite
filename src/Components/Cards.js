import React from 'react'
import food from './images/Food.jpeg'
import beverage from './images/Beverages.jpeg'
import desserts from './images/Dessert.jpg'
import special from './images/Special.jpeg'

function Cards() {
  return (
    <>
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-md-3" >
          <h3 className='fw-bold' style={{fontFamily: "Special Elite, cursive"}}>Beverages</h3>
          <div className="food">
            <img src={beverage} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em style={{fontFamily: "Tangerine, cursive"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button" style={{fontFamily: "Tangerine, cursive"}}>BEVERAGES MENU</a>
          </div>
        </div>
        <div className="col-md-3">
          <h3 className='fw-bold' style={{fontFamily: "Special Elite, cursive"}}>Food</h3>
          <div className="food">
            <img src={food} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em style={{fontFamily: "Tangerine, cursive"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button" style={{fontFamily: "Tangerine, cursive"}}>FOOD MENU</a>
          </div>
        </div>
        <div className="col-md-3" >
          <h3 className='fw-bold' style={{fontFamily: "Special Elite, cursive"}}>Desserts</h3>
          <div className="food">
            <img src={desserts} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em style={{fontFamily: "Tangerine, cursive"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button" style={{fontFamily: "Tangerine, cursive"}}>DESSERTS MENU</a>
          </div>
        </div>
        <div className="col-md-3" >
          <h3 className='fw-bold' style={{fontFamily: "Special Elite, cursive"}}>Our Special</h3>
          <div className="food" >
            <img src={special} alt="" className="rounded-circle lazyload py-3 px-1" style={{width:"200px" , height:"220px"}}/>
            <p className="description">
              <em style={{fontFamily: "Tangerine, cursive"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum animi quidem quibusdam corrupti laudantium consequuntur ullam praesentium a placeat magnam.</em>
            </p>
            <a href="/" className="btn btn-outline-dark" role="button" style={{fontFamily: "Tangerine, cursive"}}>SPECIAL'S MENU</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards