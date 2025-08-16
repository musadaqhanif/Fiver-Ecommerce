import svgPaths from "./svg-m3svmxabrv";

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
          <path clipRule="evenodd" d={svgPaths.p5bf9500} fill="var(--fill-0, #4B5563)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 rounded-[5px] top-[152px]">
      <CuidaDashboardOutline />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
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
              stroke="var(--stroke-0, #2563EB)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.p254d7680}
              id="Vector_2"
              stroke="var(--stroke-0, #2563EB)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d={svgPaths.pa93ba00}
              id="Vector_3"
              stroke="var(--stroke-0, #2563EB)"
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
    <div className="absolute bg-blue-100 box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 rounded-[10px] top-[226px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <LucideUsersRound />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-blue-600 text-left text-nowrap">
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

function Frame10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-[917px]"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 83.5px)" }}
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

function Img1() {
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

function Frame68() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-5 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-36"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 462px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">All Status</p>
      </div>
      <Img1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#ffffff] h-20 left-[294px] rounded-[10px] top-[212px] w-[1112px]" data-name="Frame">
      <div className="h-20 overflow-clip relative w-[1112px]">
        <Frame10 />
        <Frame68 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame11() {
  return (
    <div
      className="absolute bg-gray-100 h-[46px] left-[294px] rounded-tl-[20px] rounded-tr-[20px] top-[313px] w-[1112px]"
      data-name="Frame"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-gray-200 border-solid inset-0 pointer-events-none rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[25px] not-italic text-[14px] text-gray-600 text-left text-nowrap top-1/2 translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{`Vendor Name	`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[293px] not-italic text-[14px] text-gray-600 text-left text-nowrap top-1/2 translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{`Email	`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[473px] not-italic text-[14px] text-gray-600 text-left text-nowrap top-1/2 translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{`Join Date	`}</p>
      </div>
      <div
        className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[643px] not-italic text-[14px] text-gray-600 text-left text-nowrap translate-y-[-50%]"
        style={{ top: "calc(50% - 5px)" }}
      >
        <p className="block leading-[27.281px] whitespace-pre">{`Status	`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[762px] not-italic text-[14px] text-gray-600 text-left text-nowrap top-1/2 translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Rating</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[864px] not-italic text-[14px] text-gray-600 text-left text-nowrap top-1/2 translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{`Total Products	`}</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-[1024px] not-italic text-[14px] text-gray-600 text-left text-nowrap top-1/2 translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{`Actions `}</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">E</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[14px]">{`EcoCraft Artisans `}</p>
        <p className="block text-[10px] text-gray-600">VND-001</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-start justify-start left-[25px] p-0 translate-y-[-50%] w-[145px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function UilCalender() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="uil:calender">
          <path d={svgPaths.p3f159180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[455px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <UilCalender />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2023-08-15</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div
      className="absolute bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[628px] p-[10px] rounded-[20px] translate-y-[-50%] w-[77px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 Active</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[3px] items-center justify-start left-[763px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <div className="h-[22px] relative shrink-0 w-5">
        <div className="absolute inset-[2.88%_4.76%_11.55%_4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3be89d00} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`4.9 `}</p>
      </div>
    </div>
  );
}

function FluentMdl2Product() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="fluent-mdl2:product">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fluent-mdl2:product">
          <path d={svgPaths.pe515d80} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[894px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <FluentMdl2Product />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p73df7f2} fill="var(--fill-0, #2563EB)" fillRule="evenodd" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1ad9a100}
            fill="var(--fill-0, #2563EB)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function SolarEyeOutline() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="solar:eye-outline">
      <Group2 />
    </div>
  );
}

function MaterialSymbolsLightDeleteOutline() {
  return (
    <div className="relative shrink-0 size-6" data-name="material-symbols-light:delete-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:delete-outline">
          <path d={svgPaths.p973fc80} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[997px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <SolarEyeOutline />
      <div className="h-5 relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
            <path
              d={svgPaths.p2e338c00}
              id="Vector"
              stroke="var(--stroke-0, #FF951C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <MaterialSymbolsLightDeleteOutline />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-[#ffffff] h-[89px] left-[294px] top-[359px] w-[1112px]" data-name="Frame">
      <div className="h-[89px] overflow-clip relative w-[1112px]">
        <Frame41 />
        <div
          className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-60 not-italic text-[14px] text-gray-600 text-left text-nowrap translate-y-[-50%]"
          style={{ top: "calc(50% + 1.5px)" }}
        >
          <p className="block leading-[27.281px] whitespace-pre">{`maria@ecocraft.com	 `}</p>
        </div>
        <Frame71 />
        <Frame72 />
        <Frame38 />
        <Frame73 />
        <Frame74 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">E</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[14px]">TechInnovate Solutions</p>
        <p className="block text-[10px] text-gray-600">{`VND-002 `}</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-start justify-start left-[25px] p-0 translate-y-[-50%] w-[145px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function UilCalender1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="uil:calender">
          <path d={svgPaths.p3f159180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[455px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <UilCalender1 />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">{`2024-01-10 `}</p>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div
      className="absolute bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[628px] p-[10px] rounded-[20px] translate-y-[-50%] w-[77px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 Active</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[3px] items-center justify-start left-[763px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <div className="h-[22px] relative shrink-0 w-5">
        <div className="absolute inset-[2.88%_4.76%_11.55%_4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3be89d00} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`4.9 `}</p>
      </div>
    </div>
  );
}

function FluentMdl2Product1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="fluent-mdl2:product">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fluent-mdl2:product">
          <path d={svgPaths.pe515d80} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame77() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[894px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <FluentMdl2Product1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p73df7f2} fill="var(--fill-0, #2563EB)" fillRule="evenodd" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1ad9a100}
            fill="var(--fill-0, #2563EB)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function SolarEyeOutline1() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="solar:eye-outline">
      <Group3 />
    </div>
  );
}

function MaterialSymbolsLightDeleteOutline1() {
  return (
    <div className="relative shrink-0 size-6" data-name="material-symbols-light:delete-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:delete-outline">
          <path d={svgPaths.p973fc80} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[997px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <SolarEyeOutline1 />
      <div className="h-5 relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
            <path
              d={svgPaths.p2e338c00}
              id="Vector"
              stroke="var(--stroke-0, #FF951C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <MaterialSymbolsLightDeleteOutline1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#ffffff] h-[89px] left-[294px] top-[448px] w-[1112px]" data-name="Frame">
      <div className="h-[89px] overflow-clip relative w-[1112px]">
        <Frame44 />
        <div
          className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-60 not-italic text-[14px] text-gray-600 text-left text-nowrap translate-y-[-50%]"
          style={{ top: "calc(50% + 1.5px)" }}
        >
          <p className="block leading-[27.281px] whitespace-pre">david@techinnovate.com</p>
        </div>
        <Frame75 />
        <Frame76 />
        <Frame45 />
        <Frame77 />
        <Frame78 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">E</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[14px]">{`Organic Harvest Co `}</p>
        <p className="block text-[10px] text-gray-600">{`VND-003 `}</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-start justify-start left-[25px] p-0 translate-y-[-50%] w-[145px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function UilCalender2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="uil:calender">
          <path d={svgPaths.p3f159180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[455px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <UilCalender2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2023-08-15</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div
      className="absolute bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[628px] p-[10px] rounded-[20px] translate-y-[-50%] w-[77px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 Active</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[3px] items-center justify-start left-[763px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <div className="h-[22px] relative shrink-0 w-5">
        <div className="absolute inset-[2.88%_4.76%_11.55%_4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3be89d00} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`4.9 `}</p>
      </div>
    </div>
  );
}

function FluentMdl2Product2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="fluent-mdl2:product">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fluent-mdl2:product">
          <path d={svgPaths.pe515d80} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[894px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <FluentMdl2Product2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p73df7f2} fill="var(--fill-0, #2563EB)" fillRule="evenodd" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1ad9a100}
            fill="var(--fill-0, #2563EB)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function SolarEyeOutline2() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="solar:eye-outline">
      <Group4 />
    </div>
  );
}

function MaterialSymbolsLightDeleteOutline2() {
  return (
    <div className="relative shrink-0 size-6" data-name="material-symbols-light:delete-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:delete-outline">
          <path d={svgPaths.p973fc80} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[997px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <SolarEyeOutline2 />
      <div className="h-5 relative shrink-0 w-[17px]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
            <path
              d={svgPaths.p2e338c00}
              id="Vector"
              stroke="var(--stroke-0, #FF951C)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <MaterialSymbolsLightDeleteOutline2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#ffffff] h-[89px] left-[294px] top-[537px] w-[1112px]" data-name="Frame">
      <div className="h-[89px] overflow-clip relative w-[1112px]">
        <Frame48 />
        <div
          className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-60 not-italic text-[14px] text-gray-600 text-left text-nowrap translate-y-[-50%]"
          style={{ top: "calc(50% + 1.5px)" }}
        >
          <p className="block leading-[27.281px] whitespace-pre">{`maria@ecocraft.com	 `}</p>
        </div>
        <Frame79 />
        <Frame80 />
        <Frame49 />
        <Frame81 />
        <Frame82 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">E</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[14px]">{`Urban Fashion Hub `}</p>
        <p className="block text-[10px] text-gray-600">{`VND-004 `}</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-start justify-start left-[25px] p-0 translate-y-[-50%] w-[145px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function UilCalender3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="uil:calender">
          <path d={svgPaths.p3f159180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[455px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <UilCalender3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2023-08-15</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div
      className="absolute bg-[#ffecaf] box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[628px] p-[10px] rounded-[20px] translate-y-[-50%] w-[77px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ff951c] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Pending</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[3px] items-center justify-start left-[763px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`No rating	 `}</p>
      </div>
    </div>
  );
}

function FluentMdl2Product3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="fluent-mdl2:product">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fluent-mdl2:product">
          <path d={svgPaths.pe515d80} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[894px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <FluentMdl2Product3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p73df7f2} fill="var(--fill-0, #2563EB)" fillRule="evenodd" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1ad9a100}
            fill="var(--fill-0, #2563EB)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function SolarEyeOutline3() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="solar:eye-outline">
      <Group5 />
    </div>
  );
}

function CiUserAdd() {
  return (
    <div className="relative shrink-0 size-5" data-name="ci:user-add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ci:user-add">
          <path
            d={svgPaths.p32113700}
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

function MaterialSymbolsLightDeleteOutline3() {
  return (
    <div className="relative shrink-0 size-6" data-name="material-symbols-light:delete-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:delete-outline">
          <path d={svgPaths.p973fc80} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[997px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <SolarEyeOutline3 />
      <CiUserAdd />
      <MaterialSymbolsLightDeleteOutline3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#f9f9f9] h-[89px] left-[294px] top-[626px] w-[1112px]" data-name="Frame">
      <div className="h-[89px] overflow-clip relative w-[1112px]">
        <Frame52 />
        <div
          className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-60 not-italic text-[14px] text-gray-600 text-left text-nowrap translate-y-[-50%]"
          style={{ top: "calc(50% + 1.5px)" }}
        >
          <p className="block leading-[27.281px] whitespace-pre">{`alex@urbanfashion.com	 `}</p>
        </div>
        <Frame83 />
        <Frame84 />
        <Frame53 />
        <Frame85 />
        <Frame86 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-blue-100 box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-2 py-0.5 relative rounded-[10px] shrink-0 size-5">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-blue-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">E</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start p-0 relative shrink-0 w-[87px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[14px]">{`GreenLiving Essentials `}</p>
        <p className="block text-[10px] text-gray-600">{`VND-005 `}</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-start justify-start left-[25px] p-0 translate-y-[-50%] w-[145px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function UilCalender4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="uil:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="uil:calender">
          <path d={svgPaths.p3f159180} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[455px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <UilCalender4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2023-08-15</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div
      className="absolute bg-[rgba(255,217,217,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[628px] p-[10px] rounded-[20px] translate-y-[-50%] w-[89px]"
      style={{ top: "calc(50% + 1px)" }}
    >
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-red-500 w-[85px]">
        <p className="block leading-[27.281px] whitespace-pre-wrap">{`Suspended	 `}</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[3px] items-center justify-start left-[763px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <div className="h-[22px] relative shrink-0 w-5">
        <div className="absolute inset-[2.88%_4.76%_11.55%_4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3be89d00} fill="var(--fill-0, #FF951C)" id="Star 1" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{` (3.1)`}</p>
      </div>
    </div>
  );
}

function FluentMdl2Product4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="fluent-mdl2:product">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fluent-mdl2:product">
          <path d={svgPaths.pe515d80} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[894px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <FluentMdl2Product4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">23</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[13.54%_5.21%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p73df7f2} fill="var(--fill-0, #2563EB)" fillRule="evenodd" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p1ad9a100}
            fill="var(--fill-0, #2563EB)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function SolarEyeOutline4() {
  return (
    <div className="overflow-clip relative shrink-0 size-5" data-name="solar:eye-outline">
      <Group6 />
    </div>
  );
}

function MaterialSymbolsLightDeleteOutline4() {
  return (
    <div className="relative shrink-0 size-6" data-name="material-symbols-light:delete-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:delete-outline">
          <path d={svgPaths.p973fc80} fill="var(--fill-0, #EF4444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame90() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-[997px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 1.5px)" }}
    >
      <SolarEyeOutline4 />
      <MaterialSymbolsLightDeleteOutline4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-[#ffffff] h-[89px] left-[294px] top-[715px] w-[1112px]" data-name="Frame">
      <div className="h-[89px] overflow-clip relative w-[1112px]">
        <Frame56 />
        <div
          className="absolute flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] left-60 not-italic text-[14px] text-gray-600 text-left text-nowrap translate-y-[-50%]"
          style={{ top: "calc(50% + 1.5px)" }}
        >
          <p className="block leading-[27.281px] whitespace-pre">{`emma@greenliving.com	 `}</p>
        </div>
        <Frame87 />
        <Frame88 />
        <Frame57 />
        <Frame89 />
        <Frame90 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute bg-[#ffecaf] box-border content-stretch flex flex-row gap-2.5 h-[38px] items-center justify-center left-[1109px] p-[10px] rounded-[50px] top-[137px] w-[178px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-gray-700 text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 Pending Approvals</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[38px] items-center justify-center left-[1300px] p-[10px] rounded-[20px] top-[137px] w-[90px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[15px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 Active</p>
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

function Frame91() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 top-[769px]">
      <UilSetting />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Setting</p>
      </div>
    </div>
  );
}

export default function VendorManagement() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Vendor Management">
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
        <p className="block leading-[36px] whitespace-pre">{`Vendor Management `}</p>
      </div>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans:Regular',_sans-serif] font-medium justify-center leading-[0] left-[294px] not-italic text-[16px] text-gray-700 text-left text-nowrap top-[178px] translate-y-[-50%]">
        <p className="block leading-[25.613px] whitespace-pre">{`Manage all vendors and their approval status `}</p>
      </div>
      <Frame />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame69 />
      <Frame70 />
      <Frame91 />
    </div>
  );
}