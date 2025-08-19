import { Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, type FormEvent } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    alert("Signed In");
    navigate("/dashboard");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-5">
      <div className="w-full max-w-md">
        <div className="bg-[#2f3c4d] rounded-lg shadow-lg text-white">
          <div className="text-center p-6 pb-4">
            <h1 className="font-sans font-bold text-2xl mb-2">Welcome Back</h1>
            <p className="font-serif text-gray-300">
              Sign in to your account to continue helping reunite lost items
            </p>
          </div>
          <div className="p-6 pt-2 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-serif block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-[#3d4a5c] border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="font-serif block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 bg-[#3d4a5c] text-foreground border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-end">
                <Link
                  to="/forgot-password"
                  className="font-serif text-sm text-[#4299e1]  hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#4299e1] text-white rounded-md font-serif disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="text-center">
              <span className="font-serif text-muted-foreground">
                Don't have an account?{" "}
              </span>
              <Link
                to="/sign-up"
                className="font-serif text-[#4299e1] hover:underline"
              >
                Sign up
              </Link>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="font-serif text-sm text-muted-foreground hover:text-foreground"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
