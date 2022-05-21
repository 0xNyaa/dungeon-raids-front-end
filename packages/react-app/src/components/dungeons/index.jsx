import { EASY, MEDIUM, HARD } from '../../constants';
import DungeonCard from './DungeonCard';

export default function Dungeons() {
  const dungeonData = [
    {
      name: 'Aztec',
      difficulty: EASY,
      partySize: '1',
      quorum: '1,500 / 100',
      deadline: '1m 45s',
      status: 'ONGOING',
    },
    {
      name: 'Blight',
      difficulty: MEDIUM,
      partySize: '3',
      quorum: '5000 / 1,000',
      deadline: '10s ago',
      status: 'PASSED',
    },
    {
      name: 'Citadel',
      difficulty: HARD,
      partySize: '5',
      quorum: '0 / 2,000',
      deadline: 'Not Started',
      status: 'NONE',
    },
  ];

  return (
    <div className="dungeon-container">
      {dungeonData.map((dungeon, index) => (
        <DungeonCard key={`dungeon-${index}`} data={dungeon} />
      ))}
    </div>
  );
}
