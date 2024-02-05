import { useNavigate } from "react-router-dom";
import { useConnectWallet } from "../context/ConnectContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { connection, loading } = useConnectWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!connection && !loading) navigate("/");
  }, [connection, loading, navigate]);

  if (connection) return children;
}

export default ProtectedRoute;
