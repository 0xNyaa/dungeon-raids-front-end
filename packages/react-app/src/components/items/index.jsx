import { useState } from 'react';

// active items/inventory components here
export default function Items() {
  // accessory, armor, weapon
  const [itemLevels, setItemLevels] = useState([1, 1, 1]);

  const Inventory = () => {
    const itemImages = itemLevels.map((itemLevel, index) => (
      <div style={{ backgroundImage: `url(/items/${index + 1}.png)` }} className="item" key={`item-${index}`} />
    ));

    return <div className="inventory-container">{itemImages}</div>;
  };

  // TODO: Change item images to be dynamic
  const Upgrades = () => {
    const upgradeImages = [];
    for (let i = 1; i < 6; i++) {
      upgradeImages.push(
        <div className="upgrade-row" key={`upgrade-${i}`}>
          <div className="upgrade-info">
            <div className="upgrade-level">Lvl {i}</div>
            {i !== 1 && <div className="upgrade-cost">{(i - 1) * 100}g</div>}
          </div>
          <img src={`/images/accessory_${i}.webp`} alt={`accessory level ${i}`} className="item" />
          <img src={`/images/armor_${i}.webp`} alt={`armor level ${i}`} className="item" />
          <img src={`/images/weapon_${i}.webp`} alt={`weapon level ${i}`} className="item" />
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
