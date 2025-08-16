import { Users, UserPlus, Package, MessageSquare } from "lucide-react";
import svgPaths from "../imports/svg-3yquviczsh";

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  iconBg: string;
}

export function StatsCards() {
  const stats: StatCard[] = [
    {
      title: "Total Users",
      value: "18,249",
      change: "+8%",
      trend: "up",
      icon: (
        <div className="relative shrink-0 size-[25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p3c43e300} fill="white" />
          </svg>
        </div>
      ),
      iconBg: "bg-blue-600",
    },
    {
      title: "Active Vendors",
      value: "1,247",
      change: "+15%",
      trend: "up",
      icon: <UserPlus className="size-[25px] text-white" />,
      iconBg: "bg-green-600",
    },
    {
      title: "Active Orders",
      value: "2,847",
      change: "12%",
      trend: "up",
      icon: (
        <div className="relative shrink-0 size-10">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <rect fill="#6B21A8" height="40" rx="5" width="40" />
            <path d={svgPaths.p1ea11d00} fill="white" />
          </svg>
        </div>
      ),
      iconBg: "",
    },
    {
      title: "Support Chats",
      value: "156",
      change: "+5%",
      trend: "up",
      icon: <MessageSquare className="size-[25px] text-white" />,
      iconBg: "bg-blue-600",
    },
  ];

  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-[294px] p-0 top-[222px]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white box-border content-stretch flex flex-row gap-[75px] items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px] border border-gray-200 shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
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