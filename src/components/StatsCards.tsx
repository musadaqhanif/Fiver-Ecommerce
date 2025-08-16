
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Users, UserPlus, Package, MessageSquare } from "lucide-react";
import svgPaths from "../imports/svg-3yquviczsh";
import { getStatsData, StatCard as MockStatCard } from "../lib/mockData";

interface StatCard extends Omit<MockStatCard, 'icon'> {
  icon: React.ReactNode;
  iconBg: string;
}

export function StatsCards() {
  const router = useRouter();
  const mockStats = getStatsData();
  
  const getIconComponent = (iconName: string, iconBg: string) => {
    switch (iconName) {
      case "users":
        return (
          <div className="relative shrink-0 size-[25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
              <path d={svgPaths.p3c43e300} fill="white" />
            </svg>
          </div>
        );
      case "user-plus":
        return <UserPlus className="size-[25px] text-white" />;
      case "package":
        return (
          <div className="relative shrink-0 size-10">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
              <rect fill="#6B21A8" height="40" rx="5" width="40" />
              <path d={svgPaths.p1ea11d00} fill="white" />
            </svg>
          </div>
        );
      case "message-square":
        return <MessageSquare className="size-[25px] text-white" />;
      default:
        return <Users className="size-[25px] text-white" />;
    }
  };

  const stats: StatCard[] = mockStats.map(stat => ({
    ...stat,
    icon: getIconComponent(stat.icon, stat.iconBg),
    iconBg: stat.iconBg
  }));

  const handleStatClick = (statId: string) => {
    console.log(`Clicked: ${statId}`);
    
    switch (statId) {
      case "total-users":
        console.log("Navigate to Users page");
        router.push("/users");
        break;
      case "active-vendors":
        console.log("Navigate to Vendors page");
        router.push("/manage-vendor");
        break;
      case "active-orders":
        console.log("Navigate to Orders page");
        router.push("/orders");
        break;
      case "support-chats":
        console.log("Navigate to Support page");
        router.push("/support");
        break;
    }
  };

  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-[294px] p-0 top-[222px]">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="bg-white box-border content-stretch flex flex-row gap-[75px] items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px] border border-gray-200 shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)] cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
          onClick={() => handleStatClick(stat.id)}
        >
          <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[101px]">
            <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left w-full">
              <p className="block leading-[25.613px]">{stat.title}</p>
            </div>
            <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left w-full">
              <p className="block leading-[25.613px]">{stat.value}</p>
            </div>
            <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0 w-full">
              <div className="overflow-clip relative shrink-0 size-3.5">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
                  <path
                    d="M10 1H14V5"
                    stroke="#1EA852"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d={svgPaths.p2535d600}
                    stroke="#1EA852"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left text-nowrap">
                <p className="leading-[25.613px] whitespace-pre">
                  <span className="text-[#1ea852]">{stat.change}</span>
                  <span className="text-gray-500"> vs last month</span>
                </p>
              </div>
            </div>
          </div>
          <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10 ${stat.iconBg || ""}`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}