import {
  Search,
  Home,
  Users,
  HelpCircle,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { usePathname, useRouter } from "next/navigation"
// import { useAuth } from "@/components/auth-context"
// import { useToast } from "@/hooks/use-toast"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Friends", href: "/dashboard/friends", icon: Users },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  //   const navigate = useNavigate()
  const location = useLocation();
  //   const { user, logout } = useAuth()
  //   const { toast } = useToast()

  //   const handleLogout = () => {
  //     logout()
  //     toast({
  //       title: "Signed out",
  //       description: "You have been successfully signed out.",
  //     })
  //     navigate("/")
  //   }

  return (
    <div
      className="flex flex-col w-80 border-r border-gray-600"
      style={{ backgroundColor: "#2f3c4d" }}
    >
      <div className="flex items-center space-x-2 p-6 border-b border-gray-600">
        <div className="w-10 h-10 bg-[#4299e1] rounded-lg flex items-center justify-center">
          <Search className="w-8 h-8 text-white" />
        </div>
        <span className="font-sans font-bold text-2xl text-white">FindIt</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-lg font-serif transition-colors ${
                isActive
                  ? "bg-[#4299e1] text-white"
                  : "text-white hover:bg-gray-600 hover:text-white"
              }`}
            >
              <item.icon className="w-8 h-8" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-600">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-[#4299e1] rounded-full flex items-center justify-center">
            <span className="text-lg font-sans font-bold text-white">
              {/* {user ? `${user.firstName[0]}${user.lastName[0]}` : "JD"} */}
              JD
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-serif font-medium text-white truncate">
              {/* {user ? `${user.firstName} ${user.lastName}` : "John Doe"} */}
              John Doe
            </p>
            <p className="text-sm text-gray-300 truncate">john@example.com</p>
          </div>
        </div>
        <button
          className="w-full flex items-center justify-start px-3 py-2 text-white hover:bg-gray-600 transition-colors rounded-lg font-serif text-lg"
          //   onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
