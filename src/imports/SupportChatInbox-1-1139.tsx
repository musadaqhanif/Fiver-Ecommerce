import svgPaths from "./svg-plzfm5vcj8";
import imgFrame39 from "figma:asset/0c26d887ed060b47018885c4c6847048f8a83758.png";
import imgFrame40 from "figma:asset/1d05d59e2312732dd6546e4a1b3357770704b778.png";

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
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 rounded-[10px] top-[226px]">
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

function Frame4() {
  return (
    <div className="absolute bg-blue-100 box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 rounded-[10px] top-[300px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <MajesticonsChatLine />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-blue-600 text-left text-nowrap">
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

function Frame11() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-[760px]"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% - 162px)" }}
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
        <p className="block leading-[27.281px] whitespace-pre">Search chat by user name....</p>
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
      className="absolute box-border content-stretch flex flex-row gap-10 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-36"
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

function Img2() {
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

function Frame69() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[38px] h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-36"
      style={{ top: "calc(50% + 0.5px)", left: "calc(50% + 304px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">All Chat</p>
      </div>
      <Img2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#ffffff] h-20 left-[294px] rounded-[10px] top-[212px] w-[1112px]" data-name="Frame">
      <div className="h-20 overflow-clip relative w-[1112px]">
        <Frame11 />
        <Frame68 />
        <Frame69 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute bg-[rgba(255,217,217,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[1200px] p-[10px] rounded-[50px] top-[137px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-nowrap text-red-500">
        <p className="block leading-[27.281px] whitespace-pre">2 Unread</p>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[33px] items-center justify-center left-[1300px] p-[10px] rounded-[20px] top-[137px] w-[90px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[15px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">4 Open</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[rgba(219,234,254,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[79px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-blue-600 text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Customer</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-[55px]"
      style={{ backgroundImage: `url('${imgFrame39}')` }}
    />
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[420px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[20px]">John Doe</p>
        <p className="block font-['Poppins:Regular',_sans-serif] mb-0 text-[13px] text-gray-600">john.doe@email.com</p>
        <p className="block mb-0 text-[14px]">&nbsp;</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[14px] text-gray-700">{`Hi, I haven't received my order yet. Can you help me track it?`}</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[13px] items-start justify-start ml-0 mt-0 p-0 relative w-[506px]">
      <Frame72 />
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path
              d={svgPaths.p3f6d5800}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
            <path
              d={svgPaths.p4246c80}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon-park-outline:time">
      <Group2 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-[160.675px] mt-[88.5px] p-0 relative w-[80.169px]">
      <IconParkOutlineTime />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(75,85,99,0.62)] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame41 />
      <Frame76 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[rgba(255,217,217,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-red-500">
        <p className="block leading-[27.281px] whitespace-pre">High</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame74 />
      <Frame73 />
    </div>
  );
}

function Frame78() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[405px] items-center justify-start left-[26px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% - 0.25px)" }}
    >
      <Group5 />
      <Frame77 />
    </div>
  );
}

function Frame17() {
  return (
    <div
      className="absolute bg-[rgba(219,234,254,0.5)] h-[141px] left-[305px] top-[312px] w-[1112px]"
      data-name="Frame"
    >
      <div className="h-[141px] overflow-clip relative w-[1112px]">
        <Frame78 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1px_1px_0px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[rgba(219,234,254,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[79px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-blue-600 text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Customer</p>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-[55px]"
      style={{ backgroundImage: `url('${imgFrame39}')` }}
    />
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[420px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[20px]">{`Emma Smith `}</p>
        <p className="block font-['Poppins:Regular',_sans-serif] mb-0 text-[13px] text-gray-600">{`emma.smith@email.com `}</p>
        <p className="block mb-0 text-[13px]">&nbsp;</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[14px] text-gray-700">{`Thank you for resolving my refund request so quickly! `}</p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[13px] items-start justify-start ml-0 mt-0 p-0 relative w-[506px]">
      <Frame75 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path
              d={svgPaths.p3f6d5800}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
            <path
              d={svgPaths.p4246c80}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon-park-outline:time">
      <Group3 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-[158.675px] mt-[89px] p-0 relative w-[80.169px]">
      <IconParkOutlineTime1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(75,85,99,0.62)] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame44 />
      <Frame79 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="bg-[rgba(255,217,217,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-red-500">
        <p className="block leading-[27.281px] whitespace-pre">High</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Frame83() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[405px] items-center justify-start left-[26px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Group6 />
      <Frame82 />
    </div>
  );
}

function Frame18() {
  return (
    <div
      className="absolute bg-[rgba(217,217,217,0.04)] h-[141px] left-[305px] top-[594px] w-[1112px]"
      data-name="Frame"
    >
      <div className="h-[141px] overflow-clip relative w-[1112px]">
        <Frame83 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[rgba(219,234,254,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[79px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-blue-600 text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Customer</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-[55px]"
      style={{ backgroundImage: `url('${imgFrame39}')` }}
    />
  );
}

function Frame46() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[420px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[20px]">{`Emma Smith `}</p>
        <p className="block font-['Poppins:Regular',_sans-serif] mb-0 text-[13px] text-gray-600">{`emma.smith@email.com `}</p>
        <p className="block mb-0 text-[13px]">&nbsp;</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[14px] text-gray-700">{`Thank you for resolving my refund request so quickly! `}</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[13px] items-start justify-start ml-0 mt-0 p-0 relative w-[506px]">
      <Frame84 />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path
              d={svgPaths.p3f6d5800}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
            <path
              d={svgPaths.p4246c80}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon-park-outline:time">
      <Group4 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-[158.675px] mt-[89px] p-0 relative w-[80.169px]">
      <IconParkOutlineTime2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(75,85,99,0.62)] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame47 />
      <Frame85 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="bg-[rgba(255,217,217,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-red-500">
        <p className="block leading-[27.281px] whitespace-pre">High</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame89() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[405px] items-center justify-start left-[26px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Group7 />
      <Frame88 />
    </div>
  );
}

function Frame19() {
  return (
    <div
      className="absolute bg-[rgba(217,217,217,0.04)] h-[141px] left-[305px] top-[876px] w-[1112px]"
      data-name="Frame"
    >
      <div className="h-[141px] overflow-clip relative w-[1112px]">
        <Frame89 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-[rgba(219,234,254,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[79px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-blue-600 text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Customer</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-[55px]"
      style={{ backgroundImage: `url('${imgFrame39}')` }}
    />
  );
}

function Frame49() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[420px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[normal] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[20px]">{`Emma Smith `}</p>
        <p className="block font-['Poppins:Regular',_sans-serif] mb-0 text-[13px] text-gray-600">{`emma.smith@email.com `}</p>
        <p className="block mb-0 text-[13px]">&nbsp;</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[14px] text-gray-700">{`Thank you for resolving my refund request so quickly! `}</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[13px] items-start justify-start ml-0 mt-0 p-0 relative w-[506px]">
      <Frame90 />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path
              d={svgPaths.p3f6d5800}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
            <path
              d={svgPaths.p4246c80}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon-park-outline:time">
      <Group8 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-[158.675px] mt-[89px] p-0 relative w-[80.169px]">
      <IconParkOutlineTime3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(75,85,99,0.62)] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame50 />
      <Frame91 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="bg-[rgba(255,217,217,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-red-500">
        <p className="block leading-[27.281px] whitespace-pre">High</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-green-100 box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Frame95() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[405px] items-center justify-start left-[26px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% + 0.5px)" }}
    >
      <Group9 />
      <Frame94 />
    </div>
  );
}

function Frame20() {
  return (
    <div
      className="absolute bg-[rgba(217,217,217,0.04)] h-[141px] left-[305px] top-[1017px] w-[1112px]"
      data-name="Frame"
    >
      <div className="h-[141px] overflow-clip relative w-[1112px]">
        <Frame95 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-purple-100 box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[79px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-purple-800">
        <p className="block leading-[27.281px] whitespace-pre">Vendor</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-[55px]"
      style={{ backgroundImage: `url('${imgFrame40}')` }}
    />
  );
}

function Frame52() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[420px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[100.97%] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[20px]">EcoCraft Artisans</p>
        <p className="block font-['Poppins:Regular',_sans-serif] mb-0 text-[13px] text-gray-600">maria@ecocraft.com</p>
        <p className="block mb-0 text-[14px]">&nbsp;</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[14px] text-gray-700">{`I need help updating my product listings. The new inventory isn't showing up.`}</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[13px] items-start justify-start ml-0 mt-0 p-0 relative w-[506px]">
      <Frame96 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path
              d={svgPaths.p3f6d5800}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
            <path
              d={svgPaths.p4246c80}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon-park-outline:time">
      <Group10 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-[159.675px] mt-[88.5px] p-0 relative w-[80.169px]">
      <IconParkOutlineTime4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(75,85,99,0.62)] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">4 hours ago</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame53 />
      <Frame97 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[rgba(255,236,175,0.21)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ff951c] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Medium</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[rgba(220,252,231,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Frame101() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[405px] items-center justify-start left-[26px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% - 0.25px)" }}
    >
      <Group11 />
      <Frame100 />
    </div>
  );
}

function Frame21() {
  return (
    <div
      className="absolute bg-[rgba(219,234,254,0.5)] h-[141px] left-[305px] top-[453px] w-[1112px]"
      data-name="Frame"
    >
      <div className="h-[141px] overflow-clip relative w-[1112px]">
        <Frame101 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame102() {
  return (
    <div className="bg-purple-100 box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[79px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-purple-800">
        <p className="block leading-[27.281px] whitespace-pre">Vendor</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div
      className="bg-center bg-cover bg-no-repeat rounded-[100px] shrink-0 size-[55px]"
      style={{ backgroundImage: `url('${imgFrame40}')` }}
    />
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3.5 items-start justify-start p-0 relative shrink-0 w-[420px]">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[100.97%] not-italic relative shrink-0 text-[#000000] text-[0px] text-left text-nowrap whitespace-pre">
        <p className="block mb-0 text-[20px]">{`TechInnovate Solutions `}</p>
        <p className="block font-['Poppins:Regular',_sans-serif] mb-0 text-[13px] text-gray-600">
          david@techinnovate.com
        </p>
        <p className="block mb-0 text-[14px]">&nbsp;</p>
        <p className="block font-['Poppins:Regular',_sans-serif] text-[14px] text-gray-700">{`My vendor application is still pending. When can I expect approval? `}</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[13px] items-start justify-start ml-0 mt-0 p-0 relative w-[506px]">
      <Frame102 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-4%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path
              d={svgPaths.p3f6d5800}
              id="Vector"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
            <path
              d={svgPaths.p4246c80}
              id="Vector_2"
              stroke="var(--stroke-0, #4B5563)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.62"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15px]" data-name="icon-park-outline:time">
      <Group12 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-[5px] items-center justify-start ml-[159.675px] mt-[88.5px] p-0 relative w-[80.169px]">
      <IconParkOutlineTime5 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(75,85,99,0.62)] text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">4 hours ago</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame56 />
      <Frame103 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-[rgba(255,236,175,0.21)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ff951c] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Medium</p>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-[rgba(220,252,231,0.5)] box-border content-stretch flex flex-row gap-2.5 h-[31px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[68px]">
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1ea852] text-[12px] text-center text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Open</p>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Frame107() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[405px] items-center justify-start left-[26px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% - 0.25px)" }}
    >
      <Group13 />
      <Frame106 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#fcfcfc] h-[141px] left-[305px] top-[735px] w-[1112px]" data-name="Frame">
      <div className="h-[141px] overflow-clip relative w-[1112px]">
        <Frame107 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_1px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-gray-500 w-full">
        <p className="block leading-[25.613px]">{`Vendor Chats `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-purple-800 w-full">
        <p className="block leading-[25.613px]">2</p>
      </div>
    </div>
  );
}

function OcticonPeople16() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="octicon:people-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="octicon:people-16">
          <path d={svgPaths.p3e45c180} fill="var(--fill-0, #6B21A8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
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

function Frame23() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-gray-500 text-nowrap">
        <p className="block leading-[25.613px] whitespace-pre">{`Unread Messages `}</p>
      </div>
      <div
        className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[24px] text-red-500"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[25.613px]">3</p>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute inset-[8.333%]" data-name="Group">
      <div className="absolute inset-[-6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <g id="Group">
            <path
              d={svgPaths.p1b1e5b70}
              id="Vector"
              stroke="var(--stroke-0, #EF4444)"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              d={svgPaths.p13d691c0}
              id="Vector_2"
              stroke="var(--stroke-0, #EF4444)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineTime6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="icon-park-outline:time">
      <Group14 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
      <IconParkOutlineTime6 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] h-[85px] items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-gray-500 w-full">
        <p className="block leading-[25.613px]">Open Order</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[#1ea852] text-[24px] w-full">
        <p className="block leading-[25.613px]">23</p>
      </div>
    </div>
  );
}

function LineMdFilter() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="line-md:filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="line-md:filter">
          <path
            d={svgPaths.p1b360600}
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

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
      <LineMdFilter />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] h-[85px] items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left w-[101px]">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[12px] text-gray-500 w-full">
        <p className="block leading-[25.613px]">{`Total Chats `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-blue-600 w-full">
        <p className="block leading-[25.613px]">6</p>
      </div>
    </div>
  );
}

function MajesticonsChatLine1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="majesticons:chat-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="majesticons:chat-line">
          <path
            d={svgPaths.p21e4b0f0}
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

function Frame28() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[7px] relative rounded-[5px] shrink-0 size-10">
      <MajesticonsChatLine1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[75px] h-[85px] items-center justify-start px-[27px] py-4 relative rounded-[10px] shrink-0 w-[272px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_4px_4px_0px_rgba(217,217,217,0.04)]"
      />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2 items-center justify-start left-[310px] p-0 top-[1183px]">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
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

function Frame108() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[39px] px-4 py-2 top-[1224px]">
      <UilSetting />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap">
        <p className="block leading-[27.281px] whitespace-pre">Setting</p>
      </div>
    </div>
  );
}

export default function SupportChatInbox() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Support Chat Inbox">
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
        <p className="block leading-[36px] whitespace-pre">{`Support Chat Inbox `}</p>
      </div>
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <div className="absolute flex flex-col font-['Inter:Medium',_'Noto_Sans:Regular',_sans-serif] font-medium justify-center leading-[0] left-[294px] not-italic text-[16px] text-gray-700 text-left text-nowrap top-[178px] translate-y-[-50%]">
        <p className="block leading-[25.613px] whitespace-pre">{`Manage customer and vendor support conversations `}</p>
      </div>
      <Frame />
      <Frame71 />
      <Frame70 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame57 />
      <Frame108 />
    </div>
  );
}