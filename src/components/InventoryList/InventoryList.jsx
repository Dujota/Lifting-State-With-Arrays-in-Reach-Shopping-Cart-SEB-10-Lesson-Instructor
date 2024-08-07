import './InventoryList.css';

const InventoryList = ({inventory, title, handleItemClick})=> {

  function deriveButtonText(){
    if(title.toLowerCase().includes("shop")){
      return "Add Item"
    }else{
      return "Remove Item"
    }
  }


 return (
  <div className="inventory-list">
    <h2>{title}</h2>
    <ul>
        {inventory.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => handleItemClick(item)}>{deriveButtonText()}</button>
          </li>
        ))}
      </ul>


  </div>
 )
}

export default InventoryList;