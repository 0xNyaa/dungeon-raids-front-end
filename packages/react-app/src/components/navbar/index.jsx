// import connect button
import { formatEther } from '@ethersproject/units';
import { shortenAddress, useEtherBalance, useEthers } from '@usedapp/core';

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
      // show an avatar here instead of a button
      return (
        <div>
          <button onClick={deactivate}>Disconnect</button>
        </div>
      );
    }
  };

  const AccountInfo = () => (
    <div className="account-info">
      <div>{shortenAddress(account)}</div>
      {userBalance && (
        <div className="balance">
          {`${formatEther(userBalance)} MATIC`}
        </div>
      )}
    </div>
  );

  return (
    <div className="navbar">
      <ConnectButton />
      {account && <AccountInfo />}
    </div>
  );
}
