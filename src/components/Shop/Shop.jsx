import { useState } from 'react';

// Data
import { inventoryData } from '../../data/data';

// Components
import InventoryList from '../InventoryList/InventoryList';

// Styling
import './Shop.css';

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData);
  const [userInventory, setUserInventory] = useState([]);

  const handleAddItem = (selectedItem) => {
    // filter the item out of the inventory
    const newShopInventory = shopInventory.filter( item => item._id !== selectedItem._id)
    setShopInventory(newShopInventory)
    // add the incoming item to the user list
    setUserInventory([...userInventory,  selectedItem])

  }

  const handleRemoveItem = (selectedItem) => {
    // filter the item out of the inventory
    const newUserInventory = userInventory.filter( item => item._id !== selectedItem._id)
    setUserInventory(newUserInventory)
    // add the incoming item to the user list
    setShopInventory([...shopInventory,  selectedItem])

  }

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        {/* Shop */}
        <InventoryList
          title="Shop Inventory"
          inventory={shopInventory}
          handleItemClick={handleAddItem}
        />
        {/* Cart */}
        <InventoryList title="User Inventory" inventory={userInventory} handleItemClick={handleRemoveItem}/>
      </section>
    </main>
  );
};

export default Shop;