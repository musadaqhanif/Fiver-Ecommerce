"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, Eye, Edit, Trash2, UserPlus, Calendar, Star, Package } from "lucide-react";
import { getAllVendorsData, Vendor, SearchResult } from "../lib/mockData";
import { SearchComponent } from "./SearchComponent";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function VendorManagementDynamic() {
  const router = useRouter();
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [filteredVendors, setFilteredVendors] = useState<Vendor[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const userInfo = {
    name: "Sarah Chen",
    role: "Admin",
  };

  useEffect(() => {
    const allVendors = getAllVendorsData();
    setVendors(allVendors);
    setFilteredVendors(allVendors);
  }, []);

  useEffect(() => {
    let filtered = vendors;
    if (statusFilter !== "all") {
      filtered = filtered.filter(vendor => vendor.status === statusFilter);
    }
    setFilteredVendors(filtered);
  }, [vendors, statusFilter]);

  const handleSearchResultClick = (result: SearchResult) => {
    if (result.type === "vendor") {
      router.push(`/manage-vendor?vendorId=${result.id}`);
    }
  };

  const handleVendorClick = (vendorId: string) => {
    router.push(`/manage-vendor?vendorId=${vendorId}`);
  };

  const handleActionClick = (action: string, vendorId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`${action} vendor: ${vendorId}`);
    
    switch (action) {
      case "view":
        router.push(`/manage-vendor?vendorId=${vendorId}`);
        break;
      case "edit":
        router.push(`/manage-vendor?vendorId=${vendorId}&action=edit`);
        break;
      case "delete":
        if (confirm("Are you sure you want to delete this vendor?")) {
          setVendors(prev => prev.filter(v => v.id !== vendorId));
        }
        break;
      case "approve":
        setVendors(prev => prev.map(v => 
          v.id === vendorId ? { ...v, status: "active" as const } : v
        ));
        break;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-600";
      case "pending": return "bg-yellow-100 text-yellow-600";
      case "suspended": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Active";
      case "pending": return "Pending";
      case "suspended": return "Suspended";
      default: return status;
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
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
          <p className="block leading-[36px] whitespace-pre">Vendor Management</p>
        </div>
        
        {/* Subtitle */}
        <div className="absolute flex flex-col font-medium justify-center leading-[0] left-[294px] not-italic text-[16px] text-gray-700 text-left text-nowrap top-[178px] translate-y-[-50%]">
          <p className="block leading-[25.613px] whitespace-pre">Manage all vendors and their approval status</p>
        </div>
        
        {/* Search Bar */}
        <div className="absolute top-[27px] translate-x-[-50%] left-[calc(50%+248px)]">
          <SearchComponent 
            placeholder="Search vendors..."
            onResultClick={handleSearchResultClick}
          />
        </div>

        {/* Main Content */}
        <div className="absolute left-[294px] top-[222px] right-6">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex items-center justify-between">
            <div className="w-2/3">
              <SearchComponent 
                placeholder="Search vendors..."
                onResultClick={handleSearchResultClick}
              />
            </div>
            
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              >
                <span>{statusFilter === "all" ? "All Status" : getStatusText(statusFilter)}</span>
                <ChevronDown className="size-4" />
              </button>

              {showStatusDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {["all", "active", "pending", "suspended"].map((status) => (
                    <div
                      key={status}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setStatusFilter(status);
                        setShowStatusDropdown(false);
                      }}
                    >
                      <span className="text-sm">
                        {status === "all" ? "All Status" : getStatusText(status)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex gap-4 mb-6">
            <div className="bg-yellow-100 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-gray-700">
                {vendors.filter(v => v.status === "pending").length} Pending Approvals
              </span>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium text-green-600">
                {vendors.filter(v => v.status === "active").length} Active
              </span>
            </div>
          </div>

          {/* Vendor Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gray-100 px-6 py-3 grid grid-cols-7 gap-4 text-sm font-medium text-gray-600">
              <div>Vendor Name</div>
              <div>Email</div>
              <div>Join Date</div>
              <div>Status</div>
              <div>Rating</div>
              <div>Products</div>
              <div>Actions</div>
            </div>

            {/* Table Rows */}
            {filteredVendors.length > 0 ? (
              filteredVendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="px-6 py-4 grid grid-cols-7 gap-4 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleVendorClick(vendor.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">{getInitials(vendor.name)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{vendor.name}</p>
                      <p className="text-xs text-gray-500">{vendor.vendorId}</p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">{vendor.email}</div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="size-4" />
                    {vendor.joinDate}
                  </div>
                  
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vendor.status)}`}>
                      {getStatusText(vendor.status)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="size-4 text-yellow-500 fill-current" />
                    {vendor.rating}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Package className="size-4" />
                    {vendor.totalProducts}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                      onClick={(e) => handleActionClick("view", vendor.id, e)}
                    >
                      <Eye className="size-4" />
                    </button>
                    <button
                      className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                      onClick={(e) => handleActionClick("edit", vendor.id, e)}
                    >
                      <Edit className="size-4" />
                    </button>
                    {vendor.status === "pending" && (
                      <button
                        className="p-1 text-gray-400 hover:text-green-600 transition-colors"
                        onClick={(e) => handleActionClick("approve", vendor.id, e)}
                      >
                        <UserPlus className="size-4" />
                      </button>
                    )}
                    <button
                      className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                      onClick={(e) => handleActionClick("delete", vendor.id, e)}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center">
                <p className="text-gray-500">No vendors found matching the current filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
