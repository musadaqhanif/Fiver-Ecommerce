import svgPaths from "@/imports/svg-zxqbzyimw4";
const imgImage110 = "/productCatalog/ff4492426870dd7f0bc57524cbd0f240d4fb3674.png";
const imgImage112 = "/productCatalog/6321cb756e6cd3c80a3eb0fc612716e12970f8ee.png";
const imgImage111 = "/productCatalog/45f1c5e6635e370a935a687436b2e053e0c8d893.png";

function MageSearch() {
  return (
    <div
      className="absolute left-[217px] size-6 top-[46px]"
      data-name="mage:search"
    />
  );
}

function OcticonPerson16() {
  return (
    <div
      className="relative shrink-0 size-[26.667px]"
      data-name="octicon:person-16"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 27 27"
      >
        <g id="octicon:person-16">
          <path
            d={svgPaths.p1fcde100}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-blue-600 box-border content-stretch flex flex-row gap-[6.667px] items-center justify-center p-[13.333px] relative rounded-[26.667px] shrink-0 size-10">
      <OcticonPerson16 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0">
      <Frame7 />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[18px] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block mb-0 text-[14px]">Sarah Chen</p>
        <p className="block font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-gray-400">
          Admin
        </p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[15.75px]" data-name="Img">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Img">
          <path
            d={svgPaths.p3e632e00}
            fill="var(--fill-0, #6B7280)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-[964px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 4px)" }}
    >
      <Frame8 />
      <Img />
    </div>
  );
}

function TdesignNotification() {
  return (
    <div
      className="absolute left-[928px] size-6 top-[45px]"
      data-name="tdesign:notification"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="tdesign:notification">
          <path
            d={svgPaths.p80a5400}
            fill="var(--fill-0, #6B7280)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-red-500 right-[215px] rounded-[5779.77px] size-[13px] top-[39px]"
      data-name="Background"
    >
      <div
        className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[9.636px] justify-center leading-[0] not-italic text-[#ffffff] text-[7.803px] text-center translate-x-[-50%] translate-y-[-50%] w-[5.191px]"
        style={{ top: "calc(50% - 0.065px)", left: "calc(50% + 0.105px)" }}
      >
        <p className="block leading-[10.405px]">3</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[921px] top-[39px]">
      <TdesignNotification />
      <Background />
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-[400px]"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 72.5px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="relative shrink-0 size-[18.5px]" data-name="Vector">
        <div className="absolute inset-[-4.05%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 21 21"
          >
            <path
              d={svgPaths.p2ccfde80}
              id="Vector"
              stroke="var(--stroke-0, #E5E7EB)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#dddddd] text-[15px] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">
          Search order, products vendors....
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#ffffff] h-[100px] overflow-clip right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] top-0 w-[1149px]">
      <MageSearch />
      <Frame9 />
      <Group1 />
      <div
        className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[39px] not-italic text-[#111111] text-[20px] text-left text-nowrap translate-y-[-50%]"
        style={{ top: "calc(50% + 1px)" }}
      >
        <p className="block leading-[36px] whitespace-pre">{`Dashboard `}</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame676() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[1195px] p-[10px] rounded-[10px] top-[136px] w-[188px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Search Filters</p>
      </div>
    </div>
  );
}

function Frame680() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[995px] p-[10px] rounded-[10px] top-[136px] w-[188px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">
          View Vendor Profile
        </p>
      </div>
    </div>
  );
}

function Frame679() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[5px] items-start justify-start leading-[0] left-[366px] not-italic p-0 text-left top-[145px] w-[282px]">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[27px] text-blue-600 w-full">
        <p className="block leading-[36px]">Product Catalog</p>
      </div>
      <div className="font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal relative shrink-0 text-[#000000] text-[14px] w-full">
        <p className="block leading-[25.613px]">{`Your products showcasing earned badges `}</p>
      </div>
    </div>
  );
}

function SolarMoonLinear() {
  return (
    <div
      className="relative shrink-0 size-[15.233px]"
      data-name="solar:moon-linear"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="solar:moon-linear">
          <path
            d={svgPaths.p184a6100}
            fill="var(--fill-0, #1EA852)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame657() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">
          Halal Verified
        </p>
      </div>
    </div>
  );
}

function Frame658() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[345px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[572px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame657 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline() {
  return (
    <div
      className="relative shrink-0 size-[15.233px]"
      data-name="material-symbols:handshake-outline"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="material-symbols:handshake-outline">
          <path
            d={svgPaths.p26076a30}
            fill="var(--fill-0, #2563EB)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame660() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">
          Ethical Seller
        </p>
      </div>
    </div>
  );
}

function Frame659() {
  return (
    <div className="absolute bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[457px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[572px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame660 />
    </div>
  );
}

function Frame681() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[345px] p-[10px] rounded-[10px] top-[664px] w-[199px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-[-1px] pointer-events-none rounded-[11px]"
      />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Edit Product</p>
      </div>
    </div>
  );
}

function Frame682() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[551px] p-[10px] rounded-[10px] top-[665px] w-[93px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-[-1px] pointer-events-none rounded-[11px]"
      />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">View</p>
      </div>
    </div>
  );
}

function Group2085669070() {
  return (
    <div className="absolute contents left-[345px] top-[629px]">
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[345px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[629px]">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{`$29.99                         `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`       124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function ProductCard({
  image,
  title,
  price,
  reviews,
  badges,
  position,
}: {
  image: string;
  title: string;
  price: string;
  reviews: string;
  badges: Array<{
    type: "halal" | "ethical" | "local";
    position: { left: string; top: string };
  }>;
  position: { left: string; top: string; width: string; height: string };
}) {
  return (
    <div
      className="absolute bg-[#ffffff] rounded-[10px]"
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
        height: position.height,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] rounded-tl-[10px] rounded-tr-[10px] top-0 w-full"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[21px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[281px]">
        <p className="block leading-[25.613px] whitespace-pre">{title}</p>
      </div>

      {badges.map((badge, index) => (
        <div
          key={index}
          className={`absolute box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center px-[9.521px] py-[3.174px] rounded-[63.472px] w-[101.556px] ${
            badge.type === "halal"
              ? "bg-green-100 border-[#1ea852] border-[0.635px] border-solid"
              : badge.type === "ethical"
              ? "bg-blue-200 border-[0.635px] border-blue-600 border-solid"
              : "bg-[rgba(255,236,175,0.37)] border-[0.637px] border-solid border-yellow-400"
          }`}
          style={{ left: badge.position.left, top: badge.position.top }}
        >
          <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
            {badge.type === "halal" && <SolarMoonLinear />}
            {badge.type === "ethical" && <MaterialSymbolsHandshakeOutline />}
            {badge.type === "local" && (
              <div className="overflow-clip relative shrink-0 size-[15.3px]">
                <div className="absolute inset-[8.33%_16.66%_8.34%_16.67%]">
                  <div className="absolute inset-[-5.01%_-6.25%_-4.99%_-6.25%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 12 15"
                    >
                      <g>
                        <path
                          d={svgPaths.p2571b0f0}
                          stroke="var(--stroke-0, #FACC15)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.275"
                        />
                        <path
                          d={svgPaths.p802d300}
                          stroke="var(--stroke-0, #FACC15)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.275"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
              <p className="block leading-[17.316px] whitespace-pre">
                {badge.type === "halal"
                  ? "Halal Verified"
                  : badge.type === "ethical"
                  ? "Ethical Seller"
                  : "Local Seller"}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[21px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[369px]">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{price}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px] ml-8">
            {reviews}
          </span>
        </p>
      </div>

      <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[21px] p-[10px] rounded-[10px] top-[404px] w-[199px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-200 border-solid inset-[-1px] pointer-events-none rounded-[11px]"
        />
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">Edit Product</p>
        </div>
      </div>

      <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center right-[21px] p-[10px] rounded-[10px] top-[404px] w-[93px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-200 border-solid inset-[-1px] pointer-events-none rounded-[11px]"
        />
        <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">View</p>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  const menuItems = [
    { icon: "dashboard", label: "Dashboard", active: true },
    { icon: "products", label: "My Products", active: false },
    { icon: "orders", label: "Orders", active: false },
    { icon: "analytics", label: "Analytics", active: false },
    { icon: "reviews", label: "Reviews", active: false },
    { icon: "payouts", label: "Payouts", active: false },
    { icon: "messages", label: "Messages", active: false },
    { icon: "badges", label: "Badges", active: false },
    { icon: "policies", label: "Policies & Shipping", active: false },
    { icon: "settings", label: "Settings", active: false },
  ];

  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[42px] h-[1448px] items-start justify-start left-0 pb-0 pt-[27px] px-6 top-0 w-[291px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-9 justify-center leading-[0] not-italic relative shrink-0 text-[27px] text-blue-600 text-left w-[201.354px]">
        <p className="block leading-[36px]">Gldcart Vendor</p>
      </div>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${
            item.active ? "bg-blue-100 rounded-[6.75px] p-4" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="size-[18.662px]" />
            <div
              className={`flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center not-italic relative text-[19.157px] text-left text-nowrap translate-y-[-50%] ${
                item.active || item.label === "Badges"
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              <p className="block leading-[27.281px] whitespace-pre">
                {item.label}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function page() {
  const products = [
    {
      image: imgImage110,
      title: "Ribeye Steak",
      price: "$29.99",
      reviews: "124 reviews",
      badges: [
        { type: "halal" as const, position: { left: "21px", top: "312px" } },
        { type: "ethical" as const, position: { left: "133px", top: "312px" } },
      ],
      position: {
        left: "324px",
        top: "260px",
        width: "346px",
        height: "489px",
      },
    },
    {
      image: imgImage112,
      title: "Ribeye Steak",
      price: "$8.29",
      reviews: "124 reviews",
      badges: [
        { type: "halal" as const, position: { left: "21px", top: "312px" } },
        { type: "ethical" as const, position: { left: "133px", top: "312px" } },
      ],
      position: {
        left: "327px",
        top: "771px",
        width: "346px",
        height: "489px",
      },
    },
    {
      image: imgImage110,
      title: "Ribeye Steak",
      price: "$29.99",
      reviews: "124 reviews",
      badges: [
        { type: "halal" as const, position: { left: "21px", top: "312px" } },
        { type: "ethical" as const, position: { left: "133px", top: "312px" } },
      ],
      position: {
        left: "697px",
        top: "259px",
        width: "346px",
        height: "489px",
      },
    },
    {
      image: imgImage110,
      title: "Ribeye Steak",
      price: "$29.99",
      reviews: "124 reviews",
      badges: [
        { type: "halal" as const, position: { left: "21px", top: "312px" } },
        { type: "ethical" as const, position: { left: "133px", top: "312px" } },
      ],
      position: {
        left: "700px",
        top: "770px",
        width: "346px",
        height: "489px",
      },
    },
    {
      image: imgImage111,
      title: "Ribeye Steak",
      price: "$29.99",
      reviews: "124 reviews",
      badges: [
        { type: "halal" as const, position: { left: "21px", top: "312px" } },
        { type: "ethical" as const, position: { left: "133px", top: "312px" } },
        { type: "local" as const, position: { left: "21px", top: "345px" } },
      ],
      position: {
        left: "1063px",
        top: "259px",
        width: "346px",
        height: "489px",
      },
    },
    {
      image: imgImage111,
      title: "Ribeye Steak",
      price: "$29.99",
      reviews: "124 reviews",
      badges: [
        { type: "halal" as const, position: { left: "21px", top: "312px" } },
        { type: "ethical" as const, position: { left: "133px", top: "312px" } },
        { type: "local" as const, position: { left: "21px", top: "345px" } },
      ],
      position: {
        left: "1066px",
        top: "770px",
        width: "346px",
        height: "489px",
      },
    },
  ];

  return (
    <div className="bg-gray-50 relative size-full" data-name="Product Catalog">
      <Frame1 />
      <Frame676 />
      <Frame680 />
      <Frame679 />

      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}

      <div className="absolute flex h-0 items-center justify-center left-[332px] top-[164px] w-[26px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[26px]">
            <div className="absolute bottom-[-7.36px] left-0 right-[-3.85%] top-[-7.36px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 27 16"
              >
                <path
                  d={svgPaths.p2a13ca00}
                  fill="var(--stroke-0, #374151)"
                  id="Arrow 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#2762ea] gap-2.5 h-[58px] items-center justify-center p-[10px] rounded-[10px] to-[#9234ea] top-[1281px] translate-x-[-50%] w-[188px]"
        style={{ left: "calc(50% + 90px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            +Add New Product
          </p>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
