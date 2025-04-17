import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    // If the user is authenticated, redirect to dashboard
    if (user.isAuthenticated) {
      navigate("/dashboard");
    } else {
      // Otherwise redirect to landing page
      navigate("/");
    }
  }, [user.isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-farm-green-600">Loading...</h1>
      </div>
    </div>
  );
};

export default Index;
