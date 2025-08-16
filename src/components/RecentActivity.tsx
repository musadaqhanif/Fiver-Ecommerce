"use client";

import { useRouter } from "next/navigation";
import { Users, MessageSquare, UserPlus } from "lucide-react";
import { getRecentActivityData, ActivityItem as MockActivityItem } from "../lib/mockData";

interface ActivityItem extends MockActivityItem {
  icon: React.ReactNode;
}

export function RecentActivity() {
  const router = useRouter();
  const mockActivities = getRecentActivityData();
  
  const getIconComponent = (iconName: string, type: string) => {
    switch (iconName) {
      case "users":
        return <Users className="size-[25px] text-orange-500" />;
      case "message-square":
        return <MessageSquare className="size-[25px] text-red-500" />;
      case "user-plus":
        return <UserPlus className="size-6 text-green-600" />;
      default:
        return <Users className="size-[25px] text-orange-500" />;
    }
  };

  const activities: ActivityItem[] = mockActivities.map(activity => ({
    ...activity,
    icon: getIconComponent(activity.icon, activity.type)
  }));

  const getActivityStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-[rgba(255,236,175,0.21)] border-orange-500";
      case "error":
        return "bg-[rgba(255,217,217,0.44)] border-red-500";
      case "info":
        return "bg-[rgba(219,234,254,0.5)] border-blue-600";
      case "success":
        return "bg-[rgba(220,252,231,0.5)] border-green-600";
      default:
        return "";
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case "warning":
        return "text-orange-500";
      case "error":
        return "text-red-500";
      case "info":
        return "text-blue-600";
      case "success":
        return "text-green-600";
      default:
        return "text-gray-900";
    }
  };

  const handleActivityClick = (activityId: string) => {
    console.log(`Clicked activity: ${activityId}`);
    
    switch (activityId) {
      case "1":
        console.log("Navigate to vendor details");
        router.push("/manage-vendor?vendorId=ecocraft");
        break;
      case "2":
        console.log("Navigate to support chat");
        router.push("/support?chatId=john-doe");
        break;
      case "3":
        console.log("Navigate to vendor management");
        router.push("/manage-vendor?vendorId=techinnovate");
        break;
      case "4":
        console.log("Navigate to user analytics");
        router.push("/users?filter=new");
        break;
    }
  };

  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[19px] h-[378px] items-start justify-start left-[294px] px-[26px] py-[27px] rounded-[10px] top-[901px] w-[1112px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Recent Activity & Alerts</p>
      </div>
      
      {activities.map((activity) => (
        <div
          key={activity.id}
          className={`box-border content-stretch flex flex-col gap-2.5 items-start justify-center pl-4 pr-[53px] py-[7px] relative rounded-[10px] shrink-0 w-[1038px] border ${getActivityStyles(activity.type)} shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)] cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
          onClick={() => handleActivityClick(activity.id)}
        >
          <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
            {activity.icon}
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-0 px-0 relative shrink-0 w-[294px]">
              <div className={`flex flex-col font-medium justify-center leading-[0] mb-[-12px] not-italic relative shrink-0 text-[0px] text-left text-nowrap ${getTextColor(activity.type)}`}>
                <p className="leading-[36px] whitespace-pre">
                  <span className="text-[14px]">{activity.message}</span>
                  <span className="text-[14px]"> </span>
                  <span className="text-[10px]">{activity.time}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}