import { Search, Bell } from "lucide-react";
import svgPaths from "../imports/svg-3yquviczsh";

interface HeaderProps {
  userInfo: {
    name: string;
    role: string;
  };
}

export function Header({ userInfo }: HeaderProps) {
  return (
    <div className="absolute bg-white h-[100px] overflow-clip right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] top-0 w-[1168px]">
      {/* User Profile Section */}
      <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-[964px] p-0 translate-y-[-50%] top-[calc(50%+4px)]">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
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
        </div>
        <div className="relative shrink-0 size-[15.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3e632e00} fill="#6B7280" />
          </svg>
        </div>
      </div>

      {/* Search and Notifications */}
      <div className="absolute flex items-center gap-4 left-[880px] top-[39px]">
        {/* Search Icon */}
        <div className="size-6">
          <Search className="size-6 text-gray-400" />
        </div>
        
        {/* Notifications */}
        <div className="relative">
          <div className="size-6">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p80a5400} fill="#6B7280" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full size-[13px]">
            <div className="absolute flex flex-col font-normal h-[9.636px] justify-center leading-[0] not-italic text-white text-[7.803px] text-center translate-x-[-50%] translate-y-[-50%] w-[5.191px] top-[calc(50%-0.065px)] left-[calc(50%+0.105px)]">
              <p className="block leading-[10.405px]">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Title */}
      <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[39px] not-italic text-[#111111] text-[20px] text-left text-nowrap translate-y-[-50%] top-[calc(50%+1px)]">
        <p className="block leading-[36px] whitespace-pre">Support Dashboard</p>
      </div>
    </div>
  );
}