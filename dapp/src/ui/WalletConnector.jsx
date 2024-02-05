import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";
import { connect, disconnect } from "get-starknet";
import SpinnerMini from "./SpinnerMini";
import { useState } from "react";

function WalletConnector() {
  const { dispatch, address, connection, loading } = useConnectWallet();
  const [displayAddress, setDisplayAddress] = useState(true);

  return (
    <>
      {!connection?.isConnected ? (
        <button
          className=" flex w-[240px] items-center justify-center rounded-full bg-primaryColor py-[12px] text-center text-base font-semibold uppercase text-white disabled:cursor-not-allowed border-[#f5f5f5] border-[0.2px] border-solid"
          onClick={() => connectWallet(dispatch, connect)}
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      ) : (
        <button
          className=" flex w-[240px] items-center justify-center rounded-full bg-primaryColor py-[12px] text-center text-base font-semibold text-white disabled:cursor-not-allowed border-[#f5f5f5] border-[0.2px] border-solid"
          onMouseEnter={() => setDisplayAddress(false)}
          onMouseLeave={() => setDisplayAddress(true)}
          onClick={() => disconnectWallet(dispatch, disconnect)}
        >
          {!displayAddress ? (
            loading ? (
              <SpinnerMini />
            ) : (
              "Disconnect Wallet"
            )
          ) : (
            <>
              {/* <img src={argent} className="h-[32px] w-[32px]" alt="" /> */}
              <span>{address.slice(0, 10).concat("...")}</span>
            </>
          )}
        </button>
      )}
    </>
  );
}

export default WalletConnector;
