import { inventoryData } from '../../data/data';
import InventoryList from '../InventoryList/InventoryList';

const Shop = () => {
  console.log('Inventory Data:', inventoryData);

  return (
    <main id="value" className="hello">
      <h1>Shop</h1>
      <InventoryList inventory={inventoryData} />
    </main>
  );
};

export default Shop;