import { useState } from "react"
import { Loader2 } from "lucide-react"
import {Link, useNavigate} from "react-router-dom"
// import { useAuth } from "@/components/auth-context"
// import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
//   const { signup } = useAuth()
  const navigate = useNavigate()
//   const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/dashboard")

//     if (formData.password !== formData.confirmPassword) {
//       toast({
//         title: "Password mismatch",
//         description: "Please make sure your passwords match.",
//         variant: "destructive",
//       })
//       return
//     }

//     setIsLoading(true)

//     try {
//       const success = await signup({
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         password: formData.password,
//       })

//       if (success) {
//         toast({
//           title: "Welcome to FindIt!",
//           description: "Your account has been created successfully.",
//         })
//         router.push("/dashboard")
//       } else {
//         toast({
//           title: "Signup failed",
//           description: "Please check your information and try again.",
//           variant: "destructive",
//         })
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "An unexpected error occurred. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-[#2f3c4d] rounded-lg text-white border border-border shadow-lg">
          <div className="text-center p-6 pb-4">
            <h1 className="font-sans font-bold text-2xl text-white mb-2">Join Our Community</h1>
            {/* <p className="font-serif text-gray-300">
              Create your account and start helping reunite lost items with their owners
            </p> */}
          </div>
          <div className="p-6 pt-2 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="font-serif text-card-foreground block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-3 py-2 bg-input text-foreground border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="font-serif text-card-foreground block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full px-3 py-2 bg-input text-foreground border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-serif text-card-foreground block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 bg-input text-foreground border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="font-serif text-card-foreground block text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full px-3 py-2 bg-input text-foreground border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="font-serif text-card-foreground block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 bg-input text-foreground border border-[#4a5568] rounded-md focus:outline-none focus:ring-[1.5px] focus:ring-[#4299e1] font-serif"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-start space-x-2">
                <input id="terms" type="checkbox" className="rounded border-border mt-1" required />
                <label htmlFor="terms" className="font-serif text-sm leading-relaxed text-muted-foreground">
                  I agree to the{" "}
                  <Link to="" className="text-[#4299e1] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="" className="text-[#4299e1] hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#4299e1] rounded-md font-serif disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <div className="text-center">
              <span className="font-serif text-muted-foreground">Already have an account? </span>
              <Link to="/sign-in" className="font-serif text-[#4299e1] hover:underline">
                Sign in
              </Link>
            </div>

            <div className="text-center">
              <Link to="/" className="font-serif text-sm text-muted-foreground hover:text-foreground">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
