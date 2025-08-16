import { Users, MessageSquare, Shield, Settings } from "lucide-react";
import svgPaths from "../imports/svg-3yquviczsh";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

export function Sidebar() {
  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <div className="relative shrink-0 size-[25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path 
              clipRule="evenodd" 
              d={svgPaths.p5bf9500} 
              fill="#2563EB" 
              fillRule="evenodd" 
            />
          </svg>
        </div>
      ),
      isActive: true,
    },
    {
      id: "vendors",
      label: "Vendors",
      icon: <Users className="size-5 text-gray-600" />,
    },
    {
      id: "support-chat",
      label: "Support Chat",
      icon: <MessageSquare className="size-5 text-gray-600" />,
    },
    {
      id: "roles-permissions",
      label: "Roles & Permissions",
      icon: <Shield className="size-5 text-gray-600" />,
    },
  ];

  return (
    <div className="absolute bg-white h-[1533px] left-0 top-0 w-[272px] border-r border-neutral-100">
      {/* Logo */}
      <div className="absolute flex flex-col font-bold justify-center leading-[0] not-italic text-[20px] text-blue-600 text-left text-nowrap top-[50px] translate-y-[-50%] left-[39px]">
        <p className="block leading-[36px] whitespace-pre">Gldcart Vendor</p>
      </div>

      {/* Navigation Items */}
      <div className="mt-[152px]">
        {navItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 ${
              item.isActive
                ? "bg-blue-100 rounded-[5px] border-r-2 border-blue-600"
                : ""
            }`}
            style={{ top: `${152 + index * 74}px` }}
          >
            {item.icon}
            <div className={`flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap ${
              item.isActive ? "text-blue-600" : "text-gray-600"
            }`}>
              <p className="block leading-[27.281px] whitespace-pre">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Settings at bottom */}
      <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[59px] px-4 py-2 top-[1426px]">
        <Settings className="size-[25px] text-gray-600" />
        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
          <p className="block leading-[27.281px] whitespace-pre">Setting</p>
        </div>
      </div>
    </div>
  );
}