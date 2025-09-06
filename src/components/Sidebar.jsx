import {
  Calendar,
  Clipboard,
  FileText,
  BarChart2,
  Bell,
  Settings,
  LogOut,
} from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { icon: BarChart2, name: "Dashboard", path: "/dashboard" },
  { icon: Calendar, name: "Appointments", path: "/dashboard/appointments" },
  { icon: Clipboard, name: "Medical History", path: "/dashboard/history" },
  { icon: FileText, name: "Prescriptions", path: "/dashboard/prescriptions" },
  { icon: FileText, name: "Reports", path: "/dashboard/reports" },
  { icon: Bell, name: "Notifications", path: "/dashboard/notifications" },
  { icon: Settings, name: "Profile", path: "/dashboard/profile" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <img src="/logo1.png" alt="Kcare" className="h-10 w-auto" />
        <span className="font-display text-2xl tracking-tight text-stone-900">
          Kcare Portal
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                isActive
                  ? "bg-teal-50 text-teal-700 font-semibold"
                  : "text-stone-600 hover:bg-stone-100"
              }`
            }
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-stone-200">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-stone-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
