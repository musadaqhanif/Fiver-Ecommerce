"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Bell, ChevronDown, LogOut, User, Settings } from "lucide-react";
import svgPaths from "../imports/svg-3yquviczsh";

interface HeaderProps {
  userInfo: {
    name: string;
    role: string;
  };
}

export function Header({ userInfo }: HeaderProps) {
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    console.log("Notifications clicked");
  };

  const handleUserMenuClick = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleUserAction = (action: string) => {
    setShowUserMenu(false);
    console.log(`User action: ${action}`);
    
    switch (action) {
      case "profile":
        router.push("/profile");
        break;
      case "settings":
        router.push("/settings");
        break;
      case "logout":
        router.push("/sign-in");
        break;
    }
  };

  return (
    <div className="absolute bg-white h-[100px] overflow-clip right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] top-0 w-[1168px]">
      {/* User Profile Section */}
      <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-[964px] p-0 translate-y-[-50%] top-[calc(50%+4px)]">
        <div 
          className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
          onClick={handleUserMenuClick}
        >
          <div className="bg-blue-600 box-border content-stretch flex flex-row gap-[6.667px] items-center justify-center p-[13.333px] relative rounded-[26.667px] shrink-0 size-10">
            <div className="relative shrink-0 size-[26.667px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                <path d={svgPaths.p1fcde100} fill="white" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-medium justify-center leading-[18px] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
            <p className="block mb-0 text-[14px]">{userInfo.name}</p>
            <p className="block font-normal text-[12px] text-gray-400">{userInfo.role}</p>
          </div>
          <ChevronDown className="size-4 text-gray-600" />
        </div>

        {/* User Menu Dropdown */}
        {showUserMenu && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]">
            <div className="py-2">
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => handleUserAction("profile")}
              >
                <User className="size-4" />
                Profile
              </button>
              <button
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => handleUserAction("settings")}
              >
                <Settings className="size-4" />
                Settings
              </button>
              <hr className="my-2" />
              <button
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => handleUserAction("logout")}
              >
                <LogOut className="size-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search and Notifications */}
      <div className="absolute flex items-center gap-4 left-[880px] top-[39px]">
        {/* Search Icon */}
        <div className="size-6 cursor-pointer hover:text-blue-600 transition-colors">
          <Search className="size-6 text-gray-400" />
        </div>
        
        {/* Notifications */}
        <div className="relative">
          <div 
            className="size-6 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={handleNotificationClick}
          >
            <Bell className="size-6 text-gray-400" />
          </div>
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full size-[13px]">
            <div className="absolute flex flex-col font-normal h-[9.636px] justify-center leading-[0] not-italic text-white text-[7.803px] text-center translate-x-[-50%] translate-y-[-50%] w-[5.191px] top-[calc(50%-0.065px)] left-[calc(50%+0.105px)]">
              <p className="block leading-[10.405px]">3</p>
            </div>
          </div>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[300px]">
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-2">Notifications</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    New vendor registration: EcoCraft Artisans
                  </div>
                  <div className="text-sm text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    Support ticket escalated by John Doe
                  </div>
                  <div className="text-sm text-gray-600 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    System maintenance scheduled for tomorrow
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Page Title */}
      <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[39px] not-italic text-[#111111] text-[20px] text-left text-nowrap translate-y-[-50%] top-[calc(50%+1px)]">
        <p className="block leading-[36px] whitespace-pre">Support Dashboard</p>
      </div>
    </div>
  );
}