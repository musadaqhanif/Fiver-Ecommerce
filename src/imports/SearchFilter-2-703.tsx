import svgPaths from "./svg-mvszl9ip1a";
import imgImage111 from "figma:asset/45f1c5e6635e370a935a687436b2e053e0c8d893.png";

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
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-center left-[1237px] p-0 translate-y-[-50%]"
      style={{ top: "calc(50% - 4px)" }}
    >
      <Frame8 />
      <Img />
    </div>
  );
}

function TdesignNotification() {
  return (
    <div className="absolute left-[1197px] size-6 top-[43px]" data-name="tdesign:notification">
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
    <div className="absolute contents left-[1197px] top-[39px]">
      <TdesignNotification />
      <Background />
    </div>
  );
}

function Frame6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-[400px]"
      style={{ top: "calc(50% + 3.5px)", left: "calc(50% + 237px)" }}
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

function Frame1() {
  return (
    <div className="absolute bg-[#ffffff] h-[100px] overflow-clip right-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)] top-0 w-[1440px]">
      <MageSearch />
      <Frame9 />
      <Group1 />
      <Frame6 />
      <div className="absolute flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-9 justify-center leading-[0] left-[54px] not-italic text-[27px] text-blue-600 text-left top-[45px] translate-y-[-50%] w-[201.354px]">
        <p className="block leading-[36px]">Gldcart Vendor</p>
      </div>
    </div>
  );
}

function Frame679() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[5px] items-start justify-start leading-[0] left-[107px] not-italic p-0 text-left text-nowrap top-[156px] w-[324px]">
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-center relative shrink-0 text-[27px] text-blue-600">
        <p className="block leading-[36px] text-nowrap whitespace-pre">{`Search & Filter`}</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#000000] text-[14px]">
        <p className="block leading-[25.613px] text-nowrap whitespace-pre">
          Find products and vendors by their earned badges
        </p>
      </div>
    </div>
  );
}

function CiFilter() {
  return (
    <div className="relative shrink-0 size-6" data-name="ci:filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ci:filter">
          <path
            d={svgPaths.p3d90dc00}
            id="Vector"
            stroke="var(--stroke-0, #6B7280)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame685() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-start left-[91px] p-0 top-[338px]">
      <CiFilter />
      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
        <p className="block leading-[36px] whitespace-pre">Filter by Badges</p>
      </div>
    </div>
  );
}

function SolarMoonLinear() {
  return (
    <div className="relative shrink-0 size-[20.671px]" data-name="solar:moon-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="solar:moon-linear">
          <path d={svgPaths.p21ea3e00} fill="var(--fill-0, #1EA852)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame657() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[4.306px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[13.78px] text-left text-nowrap">
        <p className="block leading-[23.496px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame689() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-end justify-start left-[95px] p-0 top-[381px]">
      <div className="relative rounded-[1px] shrink-0 size-[25px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[1px]"
        />
      </div>
      <Frame657 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline() {
  return (
    <div className="relative shrink-0 size-[20.671px]" data-name="material-symbols:handshake-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="material-symbols:handshake-outline">
          <path d={svgPaths.p695cb00} fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame696() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[4.306px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[13.78px] text-left text-nowrap">
        <p className="block leading-[23.496px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame690() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-end justify-start left-[95px] p-0 top-[416px]">
      <div className="relative rounded-[1px] shrink-0 size-[25px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[1px]"
        />
      </div>
      <Frame696 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path d={svgPaths.p13043900} fill="var(--fill-0, #2563EB)" id="Vector" />
          <path
            d={svgPaths.p2b893f00}
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeWidth="2.57143"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.34%_16.67%_8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <g id="Group">
            <path
              d={svgPaths.p338b1f00}
              id="Vector"
              stroke="var(--stroke-0, #FACC15)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.72254"
            />
            <path
              d={svgPaths.p3ffdc700}
              id="Vector_2"
              stroke="var(--stroke-0, #FACC15)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.72254"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.671px]" data-name="akar-icons:location">
      <Group2 />
    </div>
  );
}

function Frame686() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[4.306px] items-center justify-start p-0 relative shrink-0">
      <AkarIconsLocation />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[13.78px] text-left text-nowrap">
        <p className="block leading-[23.496px] whitespace-pre">Local Seller</p>
      </div>
    </div>
  );
}

function Frame692() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-end justify-start left-[95px] p-0 top-[486px]">
      <Group />
      <Frame686 />
    </div>
  );
}

function MaterialSymbolsVerifiedOutline() {
  return (
    <div className="relative shrink-0 size-[20.671px]" data-name="material-symbols:verified-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="material-symbols:verified-outline">
          <path d={svgPaths.p16c9b800} fill="var(--fill-0, #F44336)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame687() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[4.306px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsVerifiedOutline />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[13.78px] text-left text-nowrap">
        <p className="block leading-[23.496px] whitespace-pre">Verified Vendor</p>
      </div>
    </div>
  );
}

function Frame691() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[5px] items-end justify-start left-[95px] p-0 top-[451px]">
      <div className="relative rounded-[1px] shrink-0 size-[25px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[1px]"
        />
      </div>
      <Frame687 />
    </div>
  );
}

function SolarBookOutline() {
  return (
    <div className="relative shrink-0 size-[20.671px]" data-name="solar:book-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="solar:book-outline">
          <path d={svgPaths.p13075180} fill="var(--fill-0, #9333EA)" id="Vector" />
          <path
            clipRule="evenodd"
            d={svgPaths.p3aa40800}
            fill="var(--fill-0, #9333EA)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame688() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[4.306px] items-center justify-start p-0 relative shrink-0">
      <SolarBookOutline />
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[13.78px] text-left text-nowrap">
        <p className="block leading-[23.496px] whitespace-pre">{`Faith-Based Seller `}</p>
      </div>
    </div>
  );
}

function Frame693() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-1.5 items-end justify-start left-[95px] p-0 top-[526px]">
      <div className="relative rounded-[1px] shrink-0 size-[25px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-300 border-solid inset-0 pointer-events-none rounded-[1px]"
        />
      </div>
      <Frame688 />
    </div>
  );
}

function SolarMoonLinear1() {
  return (
    <div className="relative shrink-0 size-[15.233px]" data-name="solar:moon-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="solar:moon-linear">
          <path d={svgPaths.p184a6100} fill="var(--fill-0, #1EA852)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame660() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame658() {
  return (
    <div className="[grid-area:1_/_1] bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center ml-[21px] mt-[312px] px-[9.521px] py-[3.174px] relative rounded-[63.472px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame660 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline1() {
  return (
    <div className="relative shrink-0 size-[15.233px]" data-name="material-symbols:handshake-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:handshake-outline">
          <path d={svgPaths.p26076a30} fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame661() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame659() {
  return (
    <div className="[grid-area:1_/_1] bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center ml-[132px] mt-[312px] px-[9.521px] py-[3.174px] relative rounded-[63.472px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame661 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.33%_16.66%_8.34%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5.01%_-6.25%_-4.99%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
          <g id="Group">
            <path
              d={svgPaths.p2571b0f0}
              id="Vector"
              stroke="var(--stroke-0, #FACC15)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.275"
            />
            <path
              d={svgPaths.p802d300}
              id="Vector_2"
              stroke="var(--stroke-0, #FACC15)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.275"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsLocation1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15.3px]" data-name="akar-icons:location">
      <Group3 />
    </div>
  );
}

function Frame662() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.188px] items-center justify-start p-0 relative shrink-0">
      <AkarIconsLocation1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.2px] text-left text-nowrap">
        <p className="block leading-[17.391px] whitespace-pre">Local Seller</p>
      </div>
    </div>
  );
}

function Frame684() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,236,175,0.37)] box-border content-stretch flex flex-col gap-[6.375px] h-[24.225px] items-center justify-center ml-[21px] mt-[345px] px-[9.563px] py-[3.188px] relative rounded-[63.75px] w-[102px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.637px] border-solid border-yellow-400 inset-0 pointer-events-none rounded-[63.75px]"
      />
      <Frame662 />
    </div>
  );
}

function Frame681() {
  return (
    <div className="[grid-area:1_/_1] bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center ml-[21px] mt-[404px] p-[10px] relative rounded-[10px] w-[199px]">
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center ml-[227px] mt-[405px] p-[10px] relative rounded-[10px] w-[93px]">
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

function Group2085669073() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[23px] mt-[376px] place-items-start relative">
      <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold ml-0 mt-0 not-italic relative text-[#000000] text-[0px] text-left text-nowrap">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{`$29.99                         `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`       124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function Group2085669075() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#ffffff] h-[489px] ml-0 mt-0 relative rounded-[10px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[267px] ml-0 mt-0 rounded-[10px] w-[346px]"
        data-name="image 111"
        style={{ backgroundImage: `url('${imgImage111}')` }}
      />
      <div className="[grid-area:1_/_1] font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] ml-[21px] mt-[281px] not-italic relative text-[#000000] text-[20px] text-left text-nowrap">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame658 />
      <Frame659 />
      <Frame684 />
      <Frame681 />
      <Frame682 />
      <Group2085669073 />
    </div>
  );
}

function Frame694() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[34px] items-center justify-start leading-[0] left-[594px] p-0 top-[264px]">
      {[...Array(2).keys()].map((_, i) => (
        <Group2085669075 key={i} />
      ))}
    </div>
  );
}

function Frame680() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[1122px] p-[10px] rounded-[10px] top-[152px] w-[188px]">
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">View Vendor Profile</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-[400px]"
      style={{ top: "calc(50% - 628px)", left: "calc(50% - 425px)" }}
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

function Frame695() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-4 h-[47px] items-center justify-start px-4 py-[9px] rounded-[10px] translate-x-[-50%] translate-y-[-50%] w-[400px]"
      style={{ top: "calc(50% - 112px)", left: "calc(50% - 429px)" }}
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

export default function SearchFilter() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="Search & Filter">
      <Frame1 />
      <Frame679 />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[594px] not-italic text-[16px] text-gray-500 text-left text-nowrap top-[237px]">
        <p className="block leading-[25.613px] whitespace-pre">2 products found</p>
      </div>
      <div className="absolute flex h-0 items-center justify-center left-[65px] top-[181px] w-[26px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-0 relative w-[26px]">
            <div className="absolute bottom-[-7.36px] left-0 right-[-3.85%] top-[-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 16">
                <path d={svgPaths.p2a13ca00} fill="var(--stroke-0, #374151)" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#ffffff] h-[362px] left-[65px] rounded-[10px] top-[235px] w-[505px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] left-[91px] not-italic text-[#000000] text-[16px] text-left text-nowrap top-[263px] translate-y-[-50%]">
        <p className="block leading-[36px] whitespace-pre">Search</p>
      </div>
      <Frame685 />
      <Frame689 />
      <Frame690 />
      <Frame692 />
      <Frame691 />
      <Frame693 />
      <Frame694 />
      <Frame680 />
      <Frame10 />
      <Frame695 />
    </div>
  );
}