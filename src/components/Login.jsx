import React from "react";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const { currentUser, signInGoogle } = UserAuth();
  console.log(currentUser)

  const handleLogin = async () => {
    try {
      await signInGoogle
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="hero h-[90vh] bg-slate-300">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-blue-800">Hey there!</h1>
            <p className="py-6 text-zinc-700">
              Chat with Blue Jays fans in real-time. Trade talks? Game day? Post
              season? Come by and chill!
            </p>
            <button onClick={handleLogin} className="btn btn-primary">Start Blabbing!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
