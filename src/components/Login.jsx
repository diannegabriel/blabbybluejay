import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signInGoogle } = UserAuth();

  const handleLogin = async () => {
    try {
      await signInGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  // This will redirect the user to the /chat page when logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="h-[100vh]">
      <div className="hero h-screen bg-slate-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-[#1d2d5c]">Hey there!</h1>
            <p className="py-6 text-zinc-700">
              Chat with Blue Jays fans in real-time. Trade talks? Game day? Post
              season? Come by and chill!
            </p>
            <button onClick={handleLogin} className="btn bg-[#134a8e] text-[#ffffff] hover:bg-[#1d2d5c]">
              Start Blabbing!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
