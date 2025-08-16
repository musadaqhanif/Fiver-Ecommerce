import { UserPlus, AlertTriangle, Ban, Star } from "lucide-react";

interface PerformanceMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
}

export function VendorPerformance() {
  const metrics: PerformanceMetric[] = [
    {
      label: "Active Vendors",
      value: "1,247",
      icon: <UserPlus className="size-8 text-green-600" strokeWidth={2.7} />,
      bgColor: "bg-[rgba(220,252,231,0.5)]",
    },
    {
      label: "Pending Approval",
      value: "23",
      icon: <AlertTriangle className="size-6 text-orange-500" />,
      bgColor: "bg-[rgba(246,229,210,0.73)]",
    },
    {
      label: "Suspended",
      value: "8",
      icon: <Ban className="size-8 text-red-500" strokeWidth={3} />,
      bgColor: "bg-[rgba(255,217,217,0.5)]",
    },
    {
      label: "Avg Rating",
      value: "4.7",
      icon: <Star className="size-6 text-blue-600" strokeWidth={2} />,
      bgColor: "bg-[rgba(219,234,254,0.5)]",
    },
  ];

  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[15px] h-[212px] items-start justify-center left-[294px] px-[41px] py-[17px] rounded-[10px] top-[1294px] w-[1112px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Vendor Performance Overview</p>
      </div>
      
      <div className="box-border content-stretch flex flex-row gap-[191px] items-center justify-center p-0 relative shrink-0">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[109px]"
          >
            <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[14px] relative rounded-[30.5px] shrink-0 size-[61px] ${metric.bgColor}`}>
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