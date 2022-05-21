import { ACCESSORY, ARMOR, WEAPON } from '../../constants';

export default function Upgrades() {
  // TODO: Connect item onClick to contract's item upgrade
  const upgradeItem = (itemType, level) => {
    if (level > 1) {
      alert(`upgrading ${itemType} to level ${level}`);
    }
  };

  const upgradeRows = [];

  for (let rowIdx = 1; rowIdx < 6; rowIdx++) {
    upgradeRows.push(
      <div className="upgrade-row" key={`upgrade-${rowIdx}`}>
        <div className="upgrade-info">
          <div className="upgrade-level">Lvl {rowIdx}</div>
          {rowIdx !== 1 && <div className="upgrade-cost">{(rowIdx - 1) ** 3 * 100}g</div>}
        </div>
        <img
          src={`/items/accessory_${rowIdx}.webp`}
          alt={`accessory level ${rowIdx}`}
          onClick={() => upgradeItem(ACCESSORY, rowIdx)}
          className="item"
        />
        <img
          src={`/items/armor_${rowIdx}.webp`}
          alt={`armor level ${rowIdx}`}
          onClick={() => upgradeItem(ARMOR, rowIdx)}
          className="item"
        />
        <img
          src={`/items/weapon_${rowIdx}.webp`}
          alt={`weapon level ${rowIdx}`}
          onClick={() => upgradeItem(WEAPON, rowIdx)}
          className="item"
        />
        <div className="item-spacer"></div>
      </div>
    );
  }

  return <div className="upgrades-container">{upgradeRows}</div>;
}
