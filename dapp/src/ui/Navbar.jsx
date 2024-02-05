import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import WalletConnector from "./WalletConnector";
import { useConnectWallet } from "../context/ConnectContext";

function Navbar() {
  const { connection } = useConnectWallet();
  return (
    <nav className="py-6 px-[100px] absolute top-0 left-0 w-full z-50 flex justify-between items-center ">
      <Logo />
      {connection?.isConnected && <NavigationLinks />}
      <WalletConnector />
    </nav>
  );
}

export default Navbar;
