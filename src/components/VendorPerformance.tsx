"use client";

import { useRouter } from "next/navigation";
import { UserPlus, AlertTriangle, Ban, Star } from "lucide-react";
import { getVendorPerformanceData, PerformanceMetric as MockPerformanceMetric } from "../lib/mockData";

interface PerformanceMetric extends MockPerformanceMetric {
  icon: React.ReactNode;
}

export function VendorPerformance() {
  const router = useRouter();
  const mockMetrics = getVendorPerformanceData();
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "user-plus":
        return <UserPlus className="size-8 text-green-600" strokeWidth={2.7} />;
      case "alert-triangle":
        return <AlertTriangle className="size-6 text-orange-500" />;
      case "ban":
        return <Ban className="size-8 text-red-500" strokeWidth={3} />;
      case "star":
        return <Star className="size-6 text-blue-600" strokeWidth={2} />;
      default:
        return <UserPlus className="size-8 text-green-600" strokeWidth={2.7} />;
    }
  };

  const metrics: PerformanceMetric[] = mockMetrics.map(metric => ({
    ...metric,
    icon: getIconComponent(metric.icon)
  }));

  const handleMetricClick = (metricId: string) => {
    console.log(`Clicked metric: ${metricId}`);
    
    switch (metricId) {
      case "active-vendors":
        console.log("Navigate to active vendors list");
        router.push("/manage-vendor?status=active");
        break;
      case "pending-approval":
        console.log("Navigate to pending approvals");
        router.push("/manage-vendor?status=pending");
        break;
      case "suspended":
        console.log("Navigate to suspended vendors");
        router.push("/manage-vendor?status=suspended");
        break;
      case "avg-rating":
        console.log("Navigate to ratings analytics");
        router.push("/analytics?type=ratings");
        break;
    }
  };

  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[15px] h-[212px] items-start justify-center left-[294px] px-[41px] py-[17px] rounded-[10px] top-[1294px] w-[1112px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Vendor Performance Overview</p>
      </div>
      
      <div className="box-border content-stretch flex flex-row gap-[191px] items-center justify-center p-0 relative shrink-0">
        {metrics.map((metric, index) => (
          <div
            key={metric.id}
            className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[109px] cursor-pointer hover:scale-105 transition-all duration-200"
            onClick={() => handleMetricClick(metric.id)}
          >
            <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[14px] relative rounded-[30.5px] shrink-0 size-[61px] ${metric.bgColor} hover:shadow-lg transition-shadow duration-200`}>
              {metric.icon}
            </div>
            <div className="flex flex-col font-medium justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap whitespace-pre">
              <p className="block font-semibold mb-0 text-[24px]">{metric.value}</p>
              <p className="block font-normal text-[12px] text-gray-600">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}