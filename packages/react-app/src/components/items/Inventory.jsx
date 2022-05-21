import { useState } from 'react';

export default function Inventory() {
  // accessory, armor, weapon
  const [itemLevels, setItemLevels] = useState([1, 1, 1]);

  const itemImages = (
    <div className="inventory-row">
      <div className="item-spacer"></div>
      <img src={`/items/accessory_${itemLevels[0]}.webp`} alt={`accessory level ${itemLevels[0]}`} className="item" />
      <img src={`/items/armor_${itemLevels[1]}.webp`} alt={`armor level ${itemLevels[1]}`} className="item" />
      <img src={`/items/weapon_${itemLevels[2]}.webp`} alt={`weapon level ${itemLevels[2]}`} className="item" />
      <div className="item-spacer"></div>
    </div>
  );

  return <div className="inventory-container">{itemImages}</div>;
}
