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
      return (
        <div>
          <button onClick={deactivate}>Disconnect</button>
        </div>
      );
    }
  };

  const AccountInfo = () => (
    <div>
      <ConnectButton />
      {account && <div>{shortenAddress(account)}</div>}
    </div>
  );

  return (
    <div>
      <AccountInfo />
      {userBalance && (
        <div className="balance">
          <p className="bold">{formatEther(userBalance)} MATIC</p>
        </div>
      )}
    </div>
  );
}
