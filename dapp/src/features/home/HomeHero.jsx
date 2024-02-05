import { connect } from "get-starknet";
import { connectWallet } from "../../api/ConnectAPI";
import { useConnectWallet } from "../../context/ConnectContext";
import SpinnerMini from "../../ui/SpinnerMini";
import { useNavigate } from "react-router-dom";

function HomeHero() {
  const { dispatch, connection, loading } = useConnectWallet();
  const navigate = useNavigate();
  return (
    <div className="pt-[260px] min-h-screen bg-heroBg flex flex-col items-center text-white text-center">
      <h1 className="text-[55px] mb-3 font-extrabold">
        Transforming Data, Protecting Identities
      </h1>
      <p className="text-2xl font-normal mb-[65px]">
        Discover the Freedom of Anonymized Insights.
      </p>
      {!connection?.isConnected ? (
        <button
          className=" flex w-[280px] items-center justify-center rounded-full bg-primaryColor py-[14px] text-center text-lg font-bold uppercase text-white disabled:cursor-not-allowed border-[#f5f5f5] border-[0.2px] border-solid"
          onClick={() => connectWallet(dispatch, connect)}
          disabled={loading}
        >
          {loading ? <SpinnerMini /> : "Connect Wallet"}
        </button>
      ) : (
        <button
          className=" flex w-[280px] items-center justify-center rounded-full bg-primaryColor py-[14px] text-center text-lg font-bold uppercase text-white disabled:cursor-not-allowed border-[#f5f5f5] border-[0.2px] border-solid"
          onClick={() => navigate("/customize")}
        >
          Get started
        </button>
      )}
    </div>
  );
}

export default HomeHero;
