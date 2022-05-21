// import connect button
import { formatEther } from '@ethersproject/units';
import { shortenAddress, useEtherBalance, useEthers } from '@usedapp/core';
import { FaCrown } from 'react-icons/fa';
import { BsCoin } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Navbar() {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const userBalance = useEtherBalance(account);

  const ConnectButton = () => {
    if (!account) {
      return (
        <div>
          <button onClick={activateBrowserWallet}>Connect</button>
        </div>
      );
    } else {
      // TODO: Show an avatar here instead of a button
      return (
        <div>
          <button onClick={deactivate}>Disconnect</button>
        </div>
      );
    }
  };

  const AccountInfo = () => (
    <div className="navbar-stats account-info">
      {userBalance && <div>{`${parseFloat(formatEther(userBalance)).toFixed(5)} MATIC`}</div>}
      <div>{shortenAddress(account)}</div>
    </div>
  );

  const Resources = () => {
    return (
      <div className="navbar-stats resources">
        <div className="resource-power">
          <IconContext.Provider value={{ color: '#824eee' }}>
            <FaCrown className="resource-icon" />
          </IconContext.Provider>
          <span>1,500</span>
        </div>
        <div className="resource-gold">
          <IconContext.Provider value={{ color: '#EEBC1D' }}>
            <BsCoin className="resource-icon" />
          </IconContext.Provider>
          <span>100</span>
        </div>
      </div>
    );
  };

  return (
    <div className="navbar">
      <ConnectButton />
      {account && (
        <>
          <AccountInfo />
          <Resources />
        </>
      )}
    </div>
  );
}
