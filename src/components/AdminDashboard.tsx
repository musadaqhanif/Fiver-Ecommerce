import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { StatsCards } from "./StatsCards";
import { QuickActions } from "./QuickActions";
import { ChartsSection } from "./ChartsSection";
import { RecentActivity } from "./RecentActivity";
import { VendorPerformance } from "./VendorPerformance";

export function AdminDashboard() {
  const userInfo = {
    name: "Sarah Chen",
    role: "Admin",
  };

  return (
    <div className="bg-white relative size-full min-h-screen">
      <div className="absolute bg-[#fdfdfd] h-[1533px] left-0 top-0 w-[1440px]" />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Header */}
      <Header userInfo={userInfo} />
      
      {/* Main Content Area */}
      <div className="ml-[272px]">
        {/* Page Title */}
        <div className="absolute flex flex-col font-bold justify-center leading-[0] left-[294px] not-italic text-[27px] text-blue-600 text-left text-nowrap top-[147px] translate-y-[-50%]">
          <p className="block leading-[36px] whitespace-pre">Admin Dashboard</p>
        </div>
        
        {/* Subtitle */}
        <div className="absolute flex flex-col font-medium justify-center leading-[0] left-[294px] not-italic text-[16px] text-gray-700 text-left text-nowrap top-[178px] translate-y-[-50%]">
          <p className="block leading-[25.613px] whitespace-pre">Monitor platform activity and manage support operations</p>
        </div>
        
        {/* Search Bar */}
        <div className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] top-[27px] translate-x-[-50%] w-[400px] border border-gray-200 left-[calc(50%+248px)]">
          <div className="relative shrink-0 size-[18.5px]">
            <div className="absolute inset-[-4.05%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path
                  d="M9.033 17.0777C10.6238 17.0792 12.1794 16.6094 13.5034 15.7275C14.8274 14.8456 15.8604 13.5912 16.472 12.1227C17.0833 10.6539 17.2445 9.03674 16.9352 7.47624C16.626 5.91574 15.8602 4.48226 14.735 3.35766C13.6105 2.23261 12.1777 1.46618 10.6177 1.15522C9.05769 0.844263 7.44052 1.00274 5.97057 1.61063C4.50062 2.21852 3.24387 3.24852 2.35915 4.57047C1.47443 5.89242 1.00145 7.44697 1 9.03766C1 11.1687 1.846 13.2117 3.352 14.7187C4.85848 16.2258 6.90107 17.0741 9.032 17.0777M14.738 14.7407L19.5 19.4997"
                  stroke="#E5E7EB"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dddddd] text-[15px] text-left text-nowrap">
            <p className="block leading-[27.281px] whitespace-pre">Search order, products vendors....</p>
          </div>
        </div>
        
        {/* Stats Cards */}
        <StatsCards />
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Charts Section */}
        <ChartsSection />
        
        {/* Recent Activity */}
        <RecentActivity />
        
        {/* Vendor Performance */}
        <VendorPerformance />
      </div>
    </div>
  );
}