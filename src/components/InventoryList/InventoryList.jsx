const InventoryList = ({inventory, title})=> {
 return (
  <div>
    <h2>{title}</h2>
    <ul>
        {inventory.map((item) => (
          <li key={item._id}>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
  </div>
 )
}

export default InventoryList;