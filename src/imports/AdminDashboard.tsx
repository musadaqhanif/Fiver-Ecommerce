import svgPaths from "./svg-3yquviczsh";

function MageSearch() {
  return <div className="absolute left-[217px] size-6 top-[46px]" data-name="mage:search" />;
}

function OcticonPerson16() {
  return (
    <div className="relative shrink-0 size-[26.667px]" data-name="octicon:person-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="octicon:person-16">
          <path d={svgPaths.p1fcde100} fill="var(--fill-0, white)" id="Vector" />
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
        <p className="block font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-gray-400">Admin</p>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[15.75px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Img">
          <path d={svgPaths.p3e632e00} fill="var(--fill-0, #6B7280)" id="Vector" />
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
    <div className="absolute left-[928px] size-6 top-[45px]" data-name="tdesign:notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tdesign:notification">
          <path d={svgPaths.p80a5400} fill="var(--fill-0, #6B7280)" id="Vector" />
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
    <div className="absolute contents left-[928px] top-[39px]">
      <TdesignNotification />
      <Background />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#ffffff] h-[100px] overflow-clip right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] top-0 w-[1168px]">
      <MageSearch />
      <Frame9 />
      <Group1 />
      <div
        className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[39px] not-italic text-[#111111] text-[20px] text-left text-nowrap translate-y-[-50%]"
        style={{ top: "calc(50% + 1px)" }}
      >
        <p className="block leading-[36px] whitespace-pre">{`Support Dashboard `}</p>
      </div>
    </div>
  );
}

function CuidaDashboardOutline() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="cuida:dashboard-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="cuida:dashboard-outline">
          <path clipRule="evenodd" d={svgPaths.p5bf9500} fill="var(--fill-0, #2563EB)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 rounded-[5px] top-[152px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_2px_0px_0px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[5px]"
      />
      <CuidaDashboardOutline />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_1.67%_6.5%_8.33%]" data-name="Group">
      <div className="absolute inset-[-6.17%_-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <g id="Group">
            <path
              d={svgPaths.p1fac000}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p254d7680}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.pa93ba00}
              id="Vector_3"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LucideUsersRound() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="lucide:users-round">
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 top-[226px]">
      <LucideUsersRound />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Vendors</p>
      </div>
    </div>
  );
}

function MajesticonsChatLine() {
  return (
    <div className="relative shrink-0 size-5" data-name="majesticons:chat-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="majesticons:chat-line">
          <path
            d={svgPaths.p24054b80}
            id="Vector"
            stroke="var(--stroke-0, #4B5563)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 top-[300px]">
      <MajesticonsChatLine />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Support Chat</p>
      </div>
    </div>
  );
}

function UilSetting() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="uil:setting">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="uil:setting">
          <path d={svgPaths.p22ec1d00} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[59px] px-4 py-2 top-[1426px]">
      <UilSetting />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Setting</p>
      </div>
    </div>
  );
}

function LucideShield() {
  return (
    <div className="relative shrink-0 size-5" data-name="lucide:shield">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="lucide:shield">
          <path
            d={svgPaths.p21b6f680}
            id="Vector"
            stroke="var(--stroke-0, #4B5563)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] h-11 items-center justify-start left-[39px] px-4 py-2 top-[374px] w-[238px]">
      <LucideShield />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">{`Roles & Permissions`}</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] top-[27px] translate-x-[-50%] w-[400px]"
      style={{ left: "calc(50% + 248px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="relative shrink-0 size-[18.5px]" data-name="Vector">
        <div className="absolute inset-[-4.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
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
        <p className="block leading-[27.281px] whitespace-pre">Search order, products vendors....</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Group">
      <div className="absolute inset-[-7.14%_-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <g id="Group">
            <path
              d="M10 1H14V5"
              id="Vector"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p2535d600}
              id="Vector_2"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineGraphArrowIncrease() {
  return (
    <div className="overflow-clip relative shrink-0 size-3.5" data-name="streamline:graph-arrow-increase">
      <Group5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0 w-full">
      <StreamlineGraphArrowIncrease />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left text-nowrap">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[#1ea852]">{` +8%`}</span>
          <span className="text-gray-500">vs last month</span>
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left w-full">
        <p className="block leading-[25.613px]">Total Users</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left w-full">
        <p className="block leading-[25.613px]">18,249</p>
      </div>
      <Frame11 />
    </div>
  );
}

function OcticonPeople16() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="octicon:people-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="octicon:people-16">
          <path d={svgPaths.p3c43e300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-blue-600 box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
      <OcticonPeople16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame12 />
      <Frame10 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Group">
      <div className="absolute inset-[-7.14%_-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <g id="Group">
            <path
              d="M10 1H14V5"
              id="Vector"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p2535d600}
              id="Vector_2"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineGraphArrowIncrease1() {
  return (
    <div className="overflow-clip relative shrink-0 size-3.5" data-name="streamline:graph-arrow-increase">
      <Group6 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0 w-full">
      <StreamlineGraphArrowIncrease1 />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[10px] text-left text-nowrap">
        <p className="leading-[25.613px] whitespace-pre">
          <span>{` +15% `}</span>
          <span className="text-gray-500">{`vs last month `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left w-full">
        <p className="block leading-[25.613px]">{`Active Vendors `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left w-full">
        <p className="block leading-[25.613px]">1,247</p>
      </div>
      <Frame58 />
    </div>
  );
}

function CiUserAdd() {
  return (
    <div className="absolute inset-[-1.11%_2.4%_5.12%_1.6%]" data-name="ci:user-add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ci:user-add">
          <path
            d={svgPaths.p223d8f80}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function OcticonPeople17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[25px]" data-name="octicon:people-16">
      <CiUserAdd />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#1ea852] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
      <OcticonPeople17 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] h-28 items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame61 />
      <Frame69 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Group">
      <div className="absolute inset-[-7.14%_-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <g id="Group">
            <path
              d="M10 1H14V5"
              id="Vector"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p2535d600}
              id="Vector_2"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineGraphArrowIncrease2() {
  return (
    <div className="overflow-clip relative shrink-0 size-3.5" data-name="streamline:graph-arrow-increase">
      <Group7 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0 w-full">
      <StreamlineGraphArrowIncrease2 />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[10px] text-left text-nowrap">
        <p className="leading-[25.613px] whitespace-pre">
          <span>{`12% `}</span>
          <span className="text-gray-500">{` vs last month`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left w-full">
        <p className="block leading-[25.613px]">{`Active Orders `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left w-full">
        <p className="block leading-[25.613px]">2,847</p>
      </div>
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 size-10">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame 10">
          <rect fill="var(--fill-0, #6B21A8)" height="40" rx="5" width="40" />
          <path d={svgPaths.p1ea11d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] h-28 items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame71 />
      <Frame72 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Group">
      <div className="absolute inset-[-7.14%_-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <g id="Group">
            <path
              d="M10 1H14V5"
              id="Vector"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p2535d600}
              id="Vector_2"
              stroke="var(--stroke-0, #1EA852)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlineGraphArrowIncrease3() {
  return (
    <div className="overflow-clip relative shrink-0 size-3.5" data-name="streamline:graph-arrow-increase">
      <Group8 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0 w-full">
      <StreamlineGraphArrowIncrease3 />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[10px] text-left text-nowrap">
        <p className="leading-[25.613px] whitespace-pre">
          <span>{`+5% `}</span>
          <span className="text-gray-500">vs last month</span>
        </p>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left w-full">
        <p className="block leading-[25.613px]">Support Chats</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_'Noto_Sans:Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left w-full">
        <p className="block leading-[25.613px]">{`156 `}</p>
      </div>
      <Frame73 />
    </div>
  );
}

function MajesticonsChatLine1() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="majesticons:chat-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="majesticons:chat-line">
          <path
            d={svgPaths.p15950b00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-blue-600 box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
      <MajesticonsChatLine1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] h-28 items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-[294px] p-0 top-[222px]">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic pb-3 pt-0 px-0 relative shrink-0 text-[14px] text-left text-red-500 w-[294px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center mb-[-12px] relative shrink-0 w-full">
        <p className="block leading-[36px]">Suspend Vendor</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center mb-[-12px] relative shrink-0 w-full">
        <p className="block leading-[25.613px]">{`Temporarily suspend a vendor account `}</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <div className="h-[19px] relative shrink-0 w-4" data-name="Vector">
        <div className="absolute inset-[-7.89%_-9.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
            <path
              d={svgPaths.pe3fd100}
              id="Vector"
              stroke="var(--stroke-0, #EF4444)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 bg-[rgba(255,217,217,0.5)] grow h-[67px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-red-500 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[67px] items-start justify-center pl-4 pr-[53px] py-[7px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function MajesticonsChatLine2() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="majesticons:chat-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="majesticons:chat-line">
          <path
            d={svgPaths.p15950b00}
            id="Vector"
            stroke="var(--stroke-0, #2563EB)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic pb-3 pt-0 px-0 relative shrink-0 text-[14px] text-blue-600 text-left w-[261px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center mb-[-12px] relative shrink-0 w-full">
        <p className="block leading-[36px]">Respond to Chat</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center mb-[-12px] relative shrink-0 w-full">
        <p className="block leading-[25.613px]">{`Reply to urgent support message `}</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <MajesticonsChatLine2 />
      <Frame76 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 bg-[rgba(219,234,254,0.5)] grow h-[67px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-blue-600 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[67px] items-start justify-center pl-4 pr-[53px] py-[7px] relative w-full">
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function CiUserAdd1() {
  return (
    <div className="relative shrink-0 size-6" data-name="ci:user-add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ci:user-add">
          <path
            d={svgPaths.p223d8f80}
            id="Vector"
            stroke="var(--stroke-0, #1EA852)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center leading-[0] not-italic pb-3 pt-0 px-0 relative shrink-0 text-[#1ea852] text-[14px] text-left w-[271px]">
      <div
        className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center mb-[-12px] min-w-full relative shrink-0"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[36px]">Add Team member</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center mb-[-12px] relative shrink-0 w-[266px]">
        <p className="block leading-[25.613px]">Invite new support team</p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <CiUserAdd1 />
      <Frame78 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 bg-[rgba(220,252,231,0.5)] grow h-[67px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#1ea852] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-[67px] items-start justify-center pl-4 pr-[53px] py-[7px] relative w-full">
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#ffffff] left-[294px] rounded-[10px] top-[349px] w-[1112px]" data-name="Frame">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip pb-[46px] pl-[27px] pr-3 pt-[18px] relative w-[1112px]">
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-center text-nowrap">
          <p className="block leading-[36px] whitespace-pre">Quick Actions</p>
        </div>
        <Frame59 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function OcticonPeople18() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="octicon:people-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="octicon:people-16">
          <path d={svgPaths.p3c43e300} fill="var(--fill-0, #FF951C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-0 px-0 relative shrink-0 w-[294px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] mb-[-12px] not-italic relative shrink-0 text-[#ff951c] text-[0px] text-left text-nowrap">
        <p className="leading-[36px] whitespace-pre">
          <span className="text-[#ff951c] text-[14px]">{`New vendor "EcoCraft Artisans" registered `}</span>
          <span className="text-[14px]"> </span>
          <span className="text-[#ff951c] text-[10px]">{`2 hours ago  `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <OcticonPeople18 />
      <Frame80 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(255,236,175,0.21)] box-border content-stretch flex flex-col gap-2.5 items-start justify-center pl-4 pr-[53px] py-[7px] relative rounded-[10px] shrink-0 w-[1038px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#ff951c] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame81 />
    </div>
  );
}

function MajesticonsChatLine3() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="majesticons:chat-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="majesticons:chat-line">
          <path
            d={svgPaths.p15950b00}
            id="Vector"
            stroke="var(--stroke-0, #EF4444)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-0 px-0 relative shrink-0 w-[294px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] mb-[-12px] not-italic relative shrink-0 text-[0px] text-left text-nowrap text-red-500">
        <p className="leading-[36px] whitespace-pre">
          <span className="text-[14px]">{`Support chat escalated by John Doe                                                                                                                                                                                 `}</span>
          <span className="text-[10px] text-red-500">{` 3 hours ago  `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <MajesticonsChatLine3 />
      <Frame82 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[rgba(255,217,217,0.44)] box-border content-stretch flex flex-col gap-2.5 items-start justify-center pl-4 pr-[53px] py-[7px] relative rounded-[10px] shrink-0 w-[1038px]">
      <div
        aria-hidden="true"
        className="absolute border border-red-500 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame83 />
    </div>
  );
}

function OcticonPeople19() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="octicon:people-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="octicon:people-16">
          <path d={svgPaths.p3c43e300} fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-0 px-0 relative shrink-0 w-[294px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] mb-[-12px] not-italic relative shrink-0 text-[0px] text-blue-600 text-left text-nowrap">
        <p className="leading-[36px] whitespace-pre">
          <span className="text-[14px]">{`Vendor "TechInnovate" suspended for policy violation`}</span>
          <span className="text-[14px] text-blue-600"> </span>
          <span className="text-[14px]"> </span>
          <span className="text-[10px] text-blue-600">{`2 hours ago  `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <OcticonPeople19 />
      <Frame84 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[rgba(219,234,254,0.5)] box-border content-stretch flex flex-col gap-2.5 items-start justify-center pl-4 pr-[53px] py-[7px] relative rounded-[10px] shrink-0 w-[1038px]">
      <div
        aria-hidden="true"
        className="absolute border border-blue-600 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame85 />
    </div>
  );
}

function CiUserAdd2() {
  return (
    <div className="relative shrink-0 size-6" data-name="ci:user-add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ci:user-add">
          <path
            d={svgPaths.p223d8f80}
            id="Vector"
            stroke="var(--stroke-0, #1EA852)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-3 pt-0 px-0 relative shrink-0 w-[294px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] mb-[-12px] not-italic relative shrink-0 text-[#1ea852] text-[0px] text-left text-nowrap">
        <p className="leading-[36px] whitespace-pre">
          <span className="text-[14px]">50 new users registered today</span>
          <span className="text-[#1ea852] text-[14px]"> </span>
          <span className="text-[14px]"> </span>
          <span className="text-[#1ea852] text-[10px]">{`2 hours ago  `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <CiUserAdd2 />
      <Frame86 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[rgba(220,252,231,0.5)] box-border content-stretch flex flex-col gap-2.5 items-start justify-center pl-4 pr-[53px] py-[7px] relative rounded-[10px] shrink-0 w-[1038px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#1ea852] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame87 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[19px] h-[378px] items-start justify-start left-[294px] px-[26px] py-[27px] rounded-[10px] top-[901px] w-[1112px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">{`Recent Activity & Alerts `}</p>
      </div>
      <Frame46 />
      <Frame47 />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-[0.5px] rounded-[100px] w-[162.12px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start leading-[0] left-[316px] p-0 top-[712px]">
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Mar</p>
      </div>
      <Group2 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-0 rounded-[100px] w-[110.396px]" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start leading-[0] ml-0 mt-0 p-0 relative">
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Jan</p>
      </div>
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-[0.5px] rounded-[100px] w-[77.2px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start leading-[0] ml-0 mt-9 p-0 relative">
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Feb</p>
      </div>
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-0 rounded-[100px] w-[110.396px]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start leading-[0] ml-0 mt-[108px] p-0 relative">
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Apr</p>
      </div>
      <Group11 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-[0.5px] rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-0 rounded-[100px] w-[136px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start leading-[0] ml-0 mt-36 p-0 relative">
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">May</p>
      </div>
      <Group12 />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-blue-600 h-[5px] ml-0 mt-[0.5px] rounded-[100px] w-[179px]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-center leading-[0] ml-0 mt-[180px] p-0 relative">
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-end not-italic relative shrink-0 text-[#000000] text-[11px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Jun</p>
      </div>
      <Group13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame22 />
      <Frame23 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-[222px]">
      <div
        className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[#000000] text-[18px] text-left"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[36px]">{`Sales & User Growth `}</p>
      </div>
      <Group3 />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-[#1ea852] h-[5px] ml-0 mt-0 rounded-[100px] w-[110.396px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <Group14 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-0 mt-0 p-0 relative">
      <Frame28 />
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block font-['Poppins:Medium',_sans-serif] mb-0 text-[10px]">$42,000</p>
        <p className="block text-[8px]">1200 users</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-[#1ea852] h-[5px] ml-0 mt-0 rounded-[100px] w-[86px]" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <Group15 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-0 mt-9 p-0 relative">
      <Frame88 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block mb-0 text-[10px]">{`$38,000 `}</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[8px]">1350 users</p>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-[#1ea852] h-[5px] ml-0 mt-0 rounded-[100px] w-[110.396px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <Group16 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-0 mt-[72px] p-0 relative">
      <Frame89 />
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block font-['Poppins:Medium',_sans-serif] mb-0 text-[10px]">$42,000</p>
        <p className="block text-[8px]">1200 users</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-[#1ea852] h-[5px] ml-0 mt-0 rounded-[100px] w-[110.396px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <Group17 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-0 mt-[108px] p-0 relative">
      <Frame90 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block mb-0 text-[10px]">{`$45,000 `}</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[8px]">1480 users</p>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-[#1ea852] h-[5px] ml-0 mt-0 rounded-[100px] w-[110.396px]" />
    </div>
  );
}

function Frame91() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <Group18 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-0 mt-36 p-0 relative">
      <Frame91 />
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block font-['Poppins:Medium',_sans-serif] mb-0 text-[10px]">$42,000</p>
        <p className="block text-[8px]">1200 users</p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-gray-300 h-[5px] ml-0 mt-0 rounded-[100px] w-[193px]" />
      <div className="[grid-area:1_/_1] bg-[#1ea852] h-[5px] ml-0 mt-0 rounded-[100px] w-[178px]" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <Group19 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-0 mt-[180px] p-0 relative">
      <Frame92 />
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-nowrap text-right whitespace-pre">
        <p className="block font-['Poppins:Medium',_sans-serif] mb-0 text-[10px]">$42,000</p>
        <p className="block text-[8px]">1200 users</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-end justify-start leading-[0] px-[3px] py-0 relative w-full">
          <Frame62 />
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <div className="relative shrink-0 size-2.5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #2563EB)" id="Ellipse 1" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[25.613px] whitespace-pre">Sales</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-center justify-start p-0 relative shrink-0">
      <div className="relative shrink-0 size-2.5">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #1EA852)" id="Ellipse 1" r="5" />
        </svg>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-500 text-left text-nowrap">
        <p className="block leading-[25.613px] whitespace-pre">Users</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 494 1">
            <line
              id="Line 1"
              stroke="var(--stroke-0, #D9D9D9)"
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
      <Frame37 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#ffffff] relative rounded-[10px] shrink-0 w-[551px]" data-name="Frame">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start overflow-clip pb-[19px] pl-[22px] pr-[35px] pt-[17px] relative w-[551px]">
        <Frame63 />
        <Frame60 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="h-3 relative shrink-0 w-[11px]">
        <div className="absolute inset-[5.22%_6.7%_13.19%_6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p1297f200} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">4.9 • 45 products</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left w-full">
        <p className="block leading-[normal]">EcoCraft Artisans</p>
      </div>
      <Frame38 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Frame41 />
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-nowrap text-right">
        <p className="block leading-[normal] whitespace-pre">$12,450</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="h-3 relative shrink-0 w-[11px]">
        <div className="absolute inset-[5.22%_6.7%_13.19%_6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p1297f200} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">4.7 • 23 products</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">TechInnovate Solutions</p>
      </div>
      <Frame95 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0">
      <Frame94 />
      <Frame96 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Frame97 />
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-nowrap text-right">
        <p className="block leading-[normal] whitespace-pre">$8,920</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="h-3 relative shrink-0 w-[11px]">
        <div className="absolute inset-[5.22%_6.7%_13.19%_6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p1297f200} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">4.8 • 67 products</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`Organic Harvest Co `}</p>
      </div>
      <Frame99 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0">
      <Frame98 />
      <Frame100 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Frame101 />
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-nowrap text-right">
        <p className="block leading-[normal] whitespace-pre">$15,670</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="h-3 relative shrink-0 w-[11px]">
        <div className="absolute inset-[5.22%_6.7%_13.19%_6.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p1297f200} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">4.6 • 34 products</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`Urban Fashion Hub `}</p>
      </div>
      <Frame103 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[5px] items-start justify-start p-0 relative shrink-0">
      <Frame102 />
      <Frame104 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
      <Frame105 />
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[12px] text-nowrap text-right">
        <p className="block leading-[normal] whitespace-pre">$9,340</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start p-0 relative shrink-0 w-[474px]">
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-[18px] h-[339px] items-start justify-start pl-[35px] pr-[33px] py-[17px] relative rounded-[10px] shrink-0 w-[551px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">{`Top Performing Vendors `}</p>
      </div>
      <Frame64 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[294px] p-0 top-[547px]">
      <Frame93 />
      <Frame65 />
    </div>
  );
}

function CiUserAdd3() {
  return (
    <div className="relative shrink-0 size-[32.533px]" data-name="ci:user-add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="ci:user-add">
          <path
            d={svgPaths.p7cdf700}
            id="Vector"
            stroke="var(--stroke-0, #1EA852)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.71111"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[rgba(220,252,231,0.5)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[14px] relative rounded-[30.5px] shrink-0 size-[61px]">
      <CiUserAdd3 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[90px]">
      <Frame50 />
      <div
        className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] min-w-full not-italic relative shrink-0 text-[#000000] text-[0px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block font-['Poppins:SemiBold',_sans-serif] mb-0 text-[24px]">1,247</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[12px] text-gray-600">Active Vendors</p>
      </div>
    </div>
  );
}

function MynauiDangerTriangle() {
  return (
    <div className="relative shrink-0 size-6" data-name="mynaui:danger-triangle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mynaui:danger-triangle">
          <path
            d={svgPaths.p2b1b7f00}
            id="Vector"
            stroke="var(--stroke-0, #FF951C)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-[rgba(246,229,210,0.73)] box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[14px] relative rounded-[30.5px] shrink-0 size-[61px]">
      <MynauiDangerTriangle />
    </div>
  );
}

function Frame52() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[109px]">
      <Frame106 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap whitespace-pre">
        <p className="block font-['Poppins:SemiBold',_sans-serif] mb-0 text-[24px]">23</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[12px] text-gray-600">{`Pending Approval `}</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="relative shrink-0 size-[61px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
        <g id="Frame 50">
          <rect fill="var(--fill-0, #FFD9D9)" fillOpacity="0.5" height="61" rx="30.5" width="61" />
          <path
            d={svgPaths.p3cc09f00}
            id="Vector"
            stroke="var(--stroke-0, #EF4444)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[109px]">
      <Frame107 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap whitespace-pre">
        <p className="block font-['Poppins:SemiBold',_sans-serif] mb-0 text-[24px]">8</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[12px] text-gray-600">{`Suspended `}</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="relative shrink-0 size-[61px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
        <g id="Frame 50">
          <rect fill="var(--fill-0, #DBEAFE)" fillOpacity="0.5" height="61" rx="30.5" width="61" />
          <path d={svgPaths.p235c780} id="Star 1" stroke="var(--stroke-0, #2563EB)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[109px]">
      <Frame108 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-center text-nowrap whitespace-pre">
        <p className="block font-['Poppins:SemiBold',_sans-serif] mb-0 text-[24px]">4.7</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[12px] text-gray-600">Avg Rating</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[191px] items-center justify-center p-0 relative shrink-0">
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[15px] h-[212px] items-start justify-center left-[294px] px-[41px] py-[17px] rounded-[10px] top-[1294px] w-[1112px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">{`Vendor Performance Overview `}</p>
      </div>
      <Frame55 />
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Admin Dashboard">
      <div className="absolute bg-[#fdfdfd] h-[1533px] left-0 top-0 w-[1440px]" />
      <div className="absolute bg-[#ffffff] h-[1533px] left-0 top-0 w-[272px]">
        <div
          aria-hidden="true"
          className="absolute border-[0px_1px_0px_0px] border-neutral-100 border-solid inset-0 pointer-events-none"
        />
      </div>
      <div
        className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic text-[20px] text-blue-600 text-left text-nowrap top-[50px] translate-y-[-50%]"
        style={{ left: "calc(50% - 681px)" }}
      >
        <p className="block leading-[36px] whitespace-pre">Gldcart Vendor</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[294px] not-italic text-[27px] text-blue-600 text-left text-nowrap top-[147px] translate-y-[-50%]">
        <p className="block leading-[36px] whitespace-pre">{`Admin Dashboard `}</p>
      </div>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame68 />
      <Frame5 />
      <Frame6 />
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans:Regular',_sans-serif] font-medium justify-center leading-[0] left-[294px] not-italic text-[16px] text-gray-700 text-left text-nowrap top-[178px] translate-y-[-50%]">
        <p className="block leading-[25.613px] whitespace-pre">{`Monitor platform activity and manage support operations `}</p>
      </div>
      <Frame57 />
      <Frame />
      <Frame66 />
      <Frame24 />
      <Frame67 />
      <Frame56 />
    </div>
  );
}