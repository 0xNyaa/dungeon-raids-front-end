import EasyDungeonBG from './images/easy_dungeon_full.webp';
import MediumDungeonBG from './images/medium_dungeon_full.jpeg';
import HardDungeonBG from './images/hard_dungeon_full.jpeg';

const EASY = 'Easy';
const MEDIUM = 'Medium';
const HARD = 'Hard';

const difficultyToBgImage = {
  [EASY]: EasyDungeonBG,
  [MEDIUM]: MediumDungeonBG,
  [HARD]: HardDungeonBG,
};

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

  const RaidButton = ({status}) => {
    if (status === 'NONE') {
      return <button>Propose Raid</button>;
    } else if (status === 'ONGOING') {
      // TODO: Show countdown here or deadline timestamp
      return <span className="dungeon-action-countdown">1:45</span>;
    } else if (status === 'PASSED') {
      return <button>Execute Raid</button>;
    } else if (status === 'FAILED'){
      // TODO: What to do when proposal fails?
      return <button>Retry Raid</button>;
    }
  }
  const DungeonCard = ({ data }) => {
    return (
      <>
        <div
          className="dungeon-card"
          style={{
            backgroundImage: `url(${difficultyToBgImage[data.difficulty]})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="dungeon-name">{data.name}</div>
          <RaidButton status={data.status} />
          <div className="dungeon-details">
            <div className="dungeon-detail-labels">
              <span>Difficulty</span>
              <span>Party Size</span>
              <span>Quorum</span>
              <span>Deadline</span>
            </div>
            <div className="dungeon-detail-values">
              <span>{data.difficulty}</span>
              <span>{data.partySize}</span>
              <span>{data.quorum}</span>
              <span>{data.deadline}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="dungeon-container">
      {dungeonData.map((dungeon, index) => (
        <DungeonCard key={`dungeon-${index}`} data={dungeon} />
      ))}
    </div>
  );
}
