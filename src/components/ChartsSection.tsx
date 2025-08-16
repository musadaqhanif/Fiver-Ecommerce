import svgPaths from "../imports/svg-3yquviczsh";

interface ChartData {
  month: string;
  sales: number;
  users: number;
  salesAmount: string;
  userCount: string;
}

export function ChartsSection() {
  const chartData: ChartData[] = [
    { month: "Jan", sales: 57, users: 57, salesAmount: "$42,000", userCount: "1200 users" },
    { month: "Feb", sales: 40, users: 45, salesAmount: "$38,000", userCount: "1350 users" },
    { month: "Mar", sales: 84, users: 57, salesAmount: "$42,000", userCount: "1200 users" },
    { month: "Apr", sales: 57, users: 57, salesAmount: "$45,000", userCount: "1480 users" },
    { month: "May", sales: 70, users: 57, salesAmount: "$42,000", userCount: "1200 users" },
    { month: "Jun", sales: 93, users: 92, salesAmount: "$42,000", userCount: "1200 users" },
  ];

  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[294px] p-0 top-[547px]">
      {/* Sales & User Growth Chart */}
      <div className="bg-white relative rounded-[10px] shrink-0 w-[551px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start overflow-clip pb-[19px] pl-[22px] pr-[35px] pt-[17px] relative w-[551px]">
          <div className="relative shrink-0 w-full">
            <div className="flex flex-row items-end relative size-full">
              <div className="box-border content-stretch flex flex-row gap-6 items-end justify-start leading-[0] px-[3px] py-0 relative w-full">
                <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-[222px]">
                  <div className="flex flex-col font-medium justify-center min-w-full not-italic relative shrink-0 text-[#000000] text-[18px] text-left w-[min-content]">
                    <p className="block leading-[36px]">Sales & User Growth</p>
                  </div>
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                    {chartData.map((data, index) => (
                      <div key={data.month} className={`box-border content-stretch flex flex-row gap-[5px] items-center justify-start leading-[0] p-0 relative ${index === 0 ? "[grid-area:1_/_1] ml-0 mt-0" : `[grid-area:1_/_1] ml-0 mt-[${index * 36}px]`}`}>
                        <div className="flex flex-col font-normal justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
                          <p className="block leading-[36px] whitespace-pre">{data.month}</p>
                        </div>
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                          <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
                          <div 
                            className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-0 rounded-[100px]"
                            style={{ width: `${(data.sales / 100) * 193}px` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                  {chartData.map((data, index) => (
                    <div key={`users-${index}`} className={`box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative ${index === 0 ? "[grid-area:1_/_1] ml-0 mt-0" : `[grid-area:1_/_1] ml-0 mt-[${index * 36}px]`}`}>
                      <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
                        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                          <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
                          <div 
                            className="[grid-area:1_/_1] bg-green-600 h-[5px] ml-0 mt-0 rounded-[100px]"
                            style={{ width: `${(data.users / 100) * 193}px` }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col font-normal justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
                        <p className="block font-medium mb-0 text-[10px]">{data.salesAmount}</p>
                        <p className="block text-[8px]">{data.userCount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-[9px] items-center justify-start p-0 relative shrink-0 w-full">
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 494 1">
                  <line
                    stroke="#D9D9D9"
                    strokeLinecap="round"
                    strokeOpacity="0.52"
                    x1="0.5"
                    x2="493.5"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
                <div className="relative shrink-0 size-2.5">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" fill="#2563EB" r="5" />
                  </svg>
                </div>
                <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left text-nowrap">
                  <p className="block leading-[25.613px] whitespace-pre">Sales</p>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
                <div className="relative shrink-0 size-2.5">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" fill="#1EA852" r="5" />
                  </svg>
                </div>
                <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left text-nowrap">
                  <p className="block leading-[25.613px] whitespace-pre">Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Vendors */}
      <div className="bg-white box-border content-stretch flex flex-col gap-[18px] h-[339px] items-start justify-start pl-[35px] pr-[33px] py-[17px] relative rounded-[10px] shrink-0 w-[551px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
        <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[36px] whitespace-pre">Top Performing Vendors</p>
        </div>
        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0 w-[474px]">
          {[
            { rank: 1, name: "EcoCraft Artisans", rating: "4.9", products: "45 products", revenue: "$12,450" },
            { rank: 2, name: "TechInnovate Solutions", rating: "4.7", products: "23 products", revenue: "$8,920" },
            { rank: 3, name: "Organic Harvest Co", rating: "4.8", products: "67 products", revenue: "$15,670" },
            { rank: 4, name: "Urban Fashion Hub", rating: "4.6", products: "34 products", revenue: "$9,340" },
          ].map((vendor) => (
            <div key={vendor.rank} className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0">
                <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">{vendor.rank}</p>
                  </div>
                </div>
                <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
                  <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left text-nowrap">
                    <p className="block leading-[normal]">{vendor.name}</p>
                  </div>
                  <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="h-3 relative shrink-0 w-[11px]">
                      <div className="absolute inset-[5.22%_6.7%_13.19%_6.7%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                          <path d={svgPaths.p1297f200} fill="#FF951C" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-gray-600 text-left text-nowrap">
                      <p className="block leading-[normal] whitespace-pre">{vendor.rating} • {vendor.products}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-nowrap text-right">
                <p className="block leading-[normal] whitespace-pre">{vendor.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}