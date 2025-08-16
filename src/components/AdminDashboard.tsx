"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { StatsCards } from "./StatsCards";
import { QuickActions } from "./QuickActions";
import { ChartsSection } from "./ChartsSection";
import { RecentActivity } from "./RecentActivity";
import { VendorPerformance } from "./VendorPerformance";
import { SearchComponent } from "./SearchComponent";
import { SearchResult } from "../lib/mockData";

export function AdminDashboard() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const userInfo = {
    name: "Sarah Chen",
    role: "Admin",
  };

  const handleSearchResultClick = (result: SearchResult) => {
    console.log(`Navigating to ${result.type}: ${result.title}`);
    
    switch (result.type) {
      case "vendor":
        router.push(`/manage-vendor?vendorId=${result.id}`);
        break;
      case "order":
        router.push(`/orders?orderId=${result.id}`);
        break;
      case "user":
        router.push(`/users?userId=${result.id}`);
        break;
      default:
        console.log(`No navigation defined for ${result.type}`);
    }
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
        <div className="absolute top-[27px] translate-x-[-50%] left-[calc(50%+248px)]">
          <SearchComponent 
            placeholder="Search order, products vendors...."
            onResultClick={handleSearchResultClick}
          />
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