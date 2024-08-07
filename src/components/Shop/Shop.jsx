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

  const handleAddItem = () => {
    const mockItem = { _id: 62345, name: 'Banana', price: .27 }
    const mockItem2 = { _id: 61345, name: 'Banana', price: .27 }

    setShopInventory([mockItem, mockItem2])
  }

  return (
    <main>
      <h1>Shop</h1>
      <section className="shop-section">
        {/* Shop */}
        <InventoryList title="Shop Inventory" inventory={shopInventory} />
        {/* Cart */}
        <InventoryList title="User Inventory" inventory={userInventory} />
      </section>
    </main>
  );
};

export default Shop;