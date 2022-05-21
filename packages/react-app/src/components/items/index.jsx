import { useState } from 'react';

// active items/inventory components here
export default function Items() {
  // accessory, armor, weapon
  const [itemLevels, setItemLevels] = useState([1, 1, 1]);

  const Inventory = () => {
    const itemImages = (
      <div className="inventory-row">
        <div className="inventory-info"></div>
        <img
          src={`/images/accessory_${itemLevels[0]}.webp`}
          alt={`accessory level ${itemLevels[0]}`}
          className="item"
        />
        <img src={`/images/armor_${itemLevels[1]}.webp`} alt={`armor level ${itemLevels[1]}`} className="item" />
        <img src={`/images/weapon_${itemLevels[2]}.webp`} alt={`weapon level ${itemLevels[2]}`} className="item" />
      </div>
    );

    return <div className="inventory-container">{itemImages}</div>;
  };

  // TODO: Connect item onClick to contract's item upgrade
  const Upgrades = () => {
    const upgradeImages = [];
    for (let rowIdx = 1; rowIdx < 6; rowIdx++) {
      upgradeImages.push(
        <div className="upgrade-row" key={`upgrade-${rowIdx}`}>
          <div className="upgrade-info">
            <div className="upgrade-level">Lvl {rowIdx}</div>
            {rowIdx !== 1 && <div className="upgrade-cost">{(rowIdx - 1) ** 3 * 100}g</div>}
          </div>
          <img src={`/images/accessory_${rowIdx}.webp`} alt={`accessory level ${rowIdx}`} className="item" />
          <img src={`/images/armor_${rowIdx}.webp`} alt={`armor level ${rowIdx}`} className="item" />
          <img src={`/images/weapon_${rowIdx}.webp`} alt={`weapon level ${rowIdx}`} className="item" />
        </div>
      );
    }

    return <div className="upgrades-container">{upgradeImages}</div>;
  };
  return (
    <div className="items-container">
      <span>Inventory</span>
      <Inventory />
      <span>Upgrades</span>
      <Upgrades />
    </div>
  );
}
