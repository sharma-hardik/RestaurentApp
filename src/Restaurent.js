import React,{useState} from 'react'
import MenuCard from './MenuCard'
import './App.css'
import MenuApi from './MenuApi'

const uniqueList = [...new Set( MenuApi.map((curEle)=>{
  return curEle.category;
})
)];
console.log(uniqueList);
const Restaurent = () => {
  const [menuData, setMenuData] = useState(MenuApi);

  const filterItem = (category) =>{
    
   
      const updatedList = MenuApi.filter((curEle)=>{
            return (curEle.category===category);
      });
     setMenuData(updatedList);
    
  };
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group-item" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
        <button className="btn-group-item" onClick={()=>filterItem("Lunch")}>Lunch</button>
        <button className="btn-group-item" onClick={()=>filterItem("Dinner")}>Dinner</button>
        <button className="btn-group-item" onClick={()=>setMenuData(MenuApi)}>All</button>
      </div>
    </nav>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent
