import { DIFFICULTY_TO_BG_IMAGE, PROPOSAL_STATUS } from '../../constants';

export default function DungeonCard({ data }) {
  const RaidButton = ({ status }) => {
    if (status === PROPOSAL_STATUS.NONE) {
      return <button>Propose Raid</button>;
    } else if (status === PROPOSAL_STATUS.ONGOING) {
      // TODO: Show countdown here or deadline timestamp
      return <span className="dungeon-action-countdown">1:45</span>;
    } else if (status === PROPOSAL_STATUS.PASSED) {
      return <button>Execute Raid</button>;
    } else if (status === PROPOSAL_STATUS.FAILED) {
      // TODO: What to do when proposal fails?
      return <button>Retry Raid</button>;
    }
  };

  return (
    <>
      <div
        className="dungeon-card"
        style={{
          backgroundImage: `url(${DIFFICULTY_TO_BG_IMAGE[data.difficulty]})`,
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
}
