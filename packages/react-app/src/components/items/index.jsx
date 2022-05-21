import Inventory from './Inventory';
import Upgrades from './Upgrades';

export default function Items() {
  return (
    <div className="items-container">
      <span>Inventory</span>
      <Inventory />
      <span>Upgrades</span>
      <Upgrades />
    </div>
  );
}
