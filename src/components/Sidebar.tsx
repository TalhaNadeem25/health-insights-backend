import { NavLink } from "react-router-dom";
import { BarChart3, FileText, Home, Upload, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
}

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/dashboard", label: "Risk Dashboard", icon: BarChart3 },
  { path: "/risk-assessment", label: "Risk Assessment", icon: Users },
  { path: "/data-upload", label: "Data Upload", icon: Upload },
  { path: "/resource-optimization", label: "Resource Optimization", icon: FileText },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  const { isSignedIn } = useUser();

  return (
    <aside
      className={cn(
        "fixed md:static inset-y-0 left-0 z-40 transform md:transform-none transition-transform duration-200 ease-in-out bg-card border-r w-64 md:flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="hidden md:flex h-16 items-center px-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Health Intelligences Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">HealthIntelligences</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-health-600 text-white"
                  : "text-foreground hover:bg-muted"
              )
            }
            end={item.path === "/"}
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          <p>HealthIntelligencess v1.0.0</p>
          <p>© 2025 HealthIntelligences</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
