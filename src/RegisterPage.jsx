import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-md"
      >
        <h2 className="text-center text-3xl font-bold text-white">Join ChatVerse</h2>
        <p className="mt-2 text-center text-white/80">Create your account</p>

        <form className="mt-6 space-y-4">
          {/* Name Field */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-white/70" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg bg-white/20 p-3 pl-10 text-white outline-none focus:bg-white/30"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-white/70" />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-white/20 p-3 pl-10 text-white outline-none focus:bg-white/30"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-white/70" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-lg bg-white/20 p-3 pl-10 pr-10 text-white outline-none focus:bg-white/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white/70"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <button className="w-full rounded-lg bg-purple-600 p-3 text-white transition hover:bg-purple-700">
            Sign Up
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <button className="flex items-center space-x-2 rounded-lg bg-white/20 px-4 py-2 text-white transition hover:bg-white/30">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="h-5 w-5" />
            <span>Google</span>
          </button>
          <button className="flex items-center space-x-2 rounded-lg bg-white/20 px-4 py-2 text-white transition hover:bg-white/30">
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" className="h-5 w-5" />
            <span>Facebook</span>
          </button>
        </div>

        <p className="mt-4 text-center text-white/80">
          Already have an account? <a href="/login" className="text-white font-semibold hover:underline">Login</a>
        </p>
      </motion.div>
    </div>
  );
}
