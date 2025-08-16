import svgPaths from "./svg-zxqbzyimw4";
import imgImage110 from "figma:asset/ff4492426870dd7f0bc57524cbd0f240d4fb3674.png";
import imgImage112 from "figma:asset/6321cb756e6cd3c80a3eb0fc612716e12970f8ee.png";
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
     
<Image
  src="/products/p1.png"
  alt="Product"
  className="block size-full"
  width={300}
  height={300}
/>
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
        <p className="block leading-[normal] whitespace-pre">View Vendor Profile</p>
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
    <div className="relative shrink-0 size-[15.233px]" data-name="solar:moon-linear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="solar:moon-linear">
          <path d={svgPaths.p184a6100} fill="var(--fill-0, #1EA852)" id="Vector" />
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
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
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
    <div className="relative shrink-0 size-[15.233px]" data-name="material-symbols:handshake-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:handshake-outline">
          <path d={svgPaths.p26076a30} fill="var(--fill-0, #2563EB)" id="Vector" />
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
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
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
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`       124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function Group2085669076() {
  return (
    <div className="absolute contents left-[324px] top-[260px]">
      <div className="absolute bg-[#ffffff] h-[489px] left-[324px] rounded-[10px] top-[260px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] left-[324px] rounded-tl-[10px] rounded-tr-[10px] top-[260px] w-[345px]"
        data-name="image 110"
        style={{ backgroundImage: `url('${imgImage110}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[345px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[541px]">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame658 />
      <Frame659 />
      <Frame681 />
      <Frame682 />
      <Group2085669070 />
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

function Frame661() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame662() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[348px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[1083px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame661 />
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

function Frame663() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame664() {
  return (
    <div className="absolute bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[460px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[1083px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame663 />
    </div>
  );
}

function Frame685() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[348px] p-[10px] rounded-[10px] top-[1175px] w-[199px]">
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

function Frame686() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[554px] p-[10px] rounded-[10px] top-[1176px] w-[93px]">
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

function Group2085669077() {
  return (
    <div className="absolute contents left-[348px] top-[1140px]">
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[348px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[1140px]">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{`$8.29                         `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`        124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function Group2085669073() {
  return (
    <div className="absolute contents left-[327px] top-[771px]">
      <div className="absolute bg-[#ffffff] h-[489px] left-[327px] rounded-[10px] top-[771px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] left-[327px] rounded-[10px] top-[771px] w-[346px]"
        data-name="image 112"
        style={{ backgroundImage: `url('${imgImage112}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[348px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[1052px]">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame662 />
      <Frame664 />
      <Frame685 />
      <Frame686 />
      <Group2085669077 />
    </div>
  );
}

function SolarMoonLinear2() {
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

function Frame665() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame666() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[718px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[571px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame665 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline2() {
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

function Frame667() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline2 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame668() {
  return (
    <div className="absolute bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[829px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[571px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame667 />
    </div>
  );
}

function Frame687() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[718px] p-[10px] rounded-[10px] top-[663px] w-[199px]">
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

function Frame688() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[924px] p-[10px] rounded-[10px] top-[664px] w-[93px]">
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

function Group2085669071() {
  return (
    <div className="absolute contents left-[718px] top-[628px]">
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[718px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[628px]">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{`$29.99                         `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`       124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function Group2085669078() {
  return (
    <div className="absolute contents left-[697px] top-[259px]">
      <div className="absolute bg-[#ffffff] h-[489px] left-[697px] rounded-[10px] top-[259px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] left-[697px] rounded-tl-[10px] rounded-tr-[10px] top-[259px] w-[345px]"
        data-name="image 110"
        style={{ backgroundImage: `url('${imgImage110}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[718px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[540px]">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame666 />
      <Frame668 />
      <Frame687 />
      <Frame688 />
      <Group2085669071 />
    </div>
  );
}

function SolarMoonLinear3() {
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

function Frame669() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame670() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[721px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[1082px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame669 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline3() {
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

function Frame671() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame672() {
  return (
    <div className="absolute bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[832px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[1082px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame671 />
    </div>
  );
}

function Frame689() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[721px] p-[10px] rounded-[10px] top-[1174px] w-[199px]">
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

function Frame690() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[927px] p-[10px] rounded-[10px] top-[1175px] w-[93px]">
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

function Group2085669079() {
  return (
    <div className="absolute contents left-[721px] top-[1139px]">
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[721px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[1139px]">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{`$29.99                         `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`       124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function Group2085669074() {
  return (
    <div className="absolute contents left-[700px] top-[770px]">
      <div className="absolute bg-[#ffffff] h-[489px] left-[700px] rounded-[10px] top-[770px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] left-[700px] rounded-tl-[10px] rounded-tr-[10px] top-[770px] w-[345px]"
        data-name="image 110"
        style={{ backgroundImage: `url('${imgImage110}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[721px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[1051px]">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame670 />
      <Frame672 />
      <Frame689 />
      <Frame690 />
      <Group2085669079 />
    </div>
  );
}

function SolarMoonLinear4() {
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

function Frame673() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame674() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[1084px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[571px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame673 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline4() {
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

function Frame675() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame677() {
  return (
    <div className="absolute bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[1195px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[571px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame675 />
    </div>
  );
}

function Group() {
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

function AkarIconsLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[15.3px]" data-name="akar-icons:location">
      <Group />
    </div>
  );
}

function Frame678() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.188px] items-center justify-start p-0 relative shrink-0">
      <AkarIconsLocation />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.2px] text-left text-nowrap">
        <p className="block leading-[17.391px] whitespace-pre">Local Seller</p>
      </div>
    </div>
  );
}

function Frame684() {
  return (
    <div className="absolute bg-[rgba(255,236,175,0.37)] box-border content-stretch flex flex-col gap-[6.375px] h-[24.225px] items-center justify-center left-[1084px] px-[9.563px] py-[3.188px] rounded-[63.75px] top-[604px] w-[102px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.637px] border-solid border-yellow-400 inset-0 pointer-events-none rounded-[63.75px]"
      />
      <Frame678 />
    </div>
  );
}

function Frame691() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[1084px] p-[10px] rounded-[10px] top-[663px] w-[199px]">
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

function Frame692() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[1290px] p-[10px] rounded-[10px] top-[664px] w-[93px]">
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

function Group2085669080() {
  return (
    <div className="absolute contents left-[1086px] top-[635px]">
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[1086px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[635px]">
        <p className="leading-[25.613px] whitespace-pre">
          <span className="text-[20px]">{`$29.99                         `}</span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal not-italic text-[14px]">{`       124 reviews`}</span>
        </p>
      </div>
    </div>
  );
}

function Group2085669072() {
  return (
    <div className="absolute contents left-[1063px] top-[259px]">
      <div className="absolute bg-[#ffffff] h-[489px] left-[1063px] rounded-[10px] top-[259px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] left-[1063px] rounded-[10px] top-[259px] w-[346px]"
        data-name="image 111"
        style={{ backgroundImage: `url('${imgImage111}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[1084px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[540px]">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame674 />
      <Frame677 />
      <Frame684 />
      <Frame691 />
      <Frame692 />
      <Group2085669080 />
    </div>
  );
}

function SolarMoonLinear5() {
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

function Frame693() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <SolarMoonLinear5 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Halal Verified</p>
      </div>
    </div>
  );
}

function Frame694() {
  return (
    <div className="absolute bg-green-100 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[1087px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[1082px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[#1ea852] border-[0.635px] border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame693 />
    </div>
  );
}

function MaterialSymbolsHandshakeOutline5() {
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

function Frame695() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.174px] items-center justify-start p-0 relative shrink-0">
      <MaterialSymbolsHandshakeOutline5 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.156px] text-left text-nowrap">
        <p className="block leading-[17.316px] whitespace-pre">Ethical Seller</p>
      </div>
    </div>
  );
}

function Frame696() {
  return (
    <div className="absolute bg-blue-200 box-border content-stretch flex flex-col gap-[6.347px] h-[24.119px] items-center justify-center left-[1198px] px-[9.521px] py-[3.174px] rounded-[63.472px] top-[1082px] w-[101.556px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.635px] border-blue-600 border-solid inset-0 pointer-events-none rounded-[63.472px]"
      />
      <Frame695 />
    </div>
  );
}

function Group2() {
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
      <Group2 />
    </div>
  );
}

function Frame697() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[3.188px] items-center justify-start p-0 relative shrink-0">
      <AkarIconsLocation1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[10.2px] text-left text-nowrap">
        <p className="block leading-[17.391px] whitespace-pre">Local Seller</p>
      </div>
    </div>
  );
}

function Frame698() {
  return (
    <div className="absolute bg-[rgba(255,236,175,0.37)] box-border content-stretch flex flex-col gap-[6.375px] h-[24.225px] items-center justify-center left-[1087px] px-[9.563px] py-[3.188px] rounded-[63.75px] top-[1115px] w-[102px]">
      <div
        aria-hidden="true"
        className="absolute border-[0.637px] border-solid border-yellow-400 inset-0 pointer-events-none rounded-[63.75px]"
      />
      <Frame697 />
    </div>
  );
}

function Frame699() {
  return (
    <div className="absolute bg-blue-600 box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[1087px] p-[10px] rounded-[10px] top-[1174px] w-[199px]">
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

function Frame700() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-2.5 h-[58px] items-center justify-center left-[1293px] p-[10px] rounded-[10px] top-[1175px] w-[93px]">
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

function Group2085669081() {
  return (
    <div className="absolute contents left-[1089px] top-[1146px]">
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[1089px] not-italic text-[#000000] text-[0px] text-left text-nowrap top-[1146px]">
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
    <div className="absolute contents left-[1066px] top-[770px]">
      <div className="absolute bg-[#ffffff] h-[489px] left-[1066px] rounded-[10px] top-[770px] w-[346px]">
        <div
          aria-hidden="true"
          className="absolute border border-gray-100 border-solid inset-0 pointer-events-none rounded-[10px]"
        />
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[267px] left-[1066px] rounded-[10px] top-[770px] w-[346px]"
        data-name="image 111"
        style={{ backgroundImage: `url('${imgImage111}')` }}
      />
      <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[1087px] not-italic text-[#000000] text-[20px] text-left text-nowrap top-[1051px]">
        <p className="block leading-[25.613px] whitespace-pre">Ribeye Steak</p>
      </div>
      <Frame694 />
      <Frame696 />
      <Frame698 />
      <Frame699 />
      <Frame700 />
      <Group2085669081 />
    </div>
  );
}

function Frame701() {
  return (
    <div
      className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#2762ea] gap-2.5 h-[58px] items-center justify-center p-[10px] rounded-[10px] to-[#9234ea] top-[1281px] translate-x-[-50%] w-[188px]"
      style={{ left: "calc(50% + 90px)" }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]"
      />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">+Add New Product</p>
      </div>
    </div>
  );
}

function Img1() {
  return <div className="absolute left-[13.49px] size-[15.75px] top-[11.87px]" data-name="Img" />;
}

function Background1() {
  return (
    <div
      className="[grid-area:1_/_1] bg-blue-100 h-[53px] ml-0 mt-0 relative rounded-[6.75px] w-[241px]"
      data-name="Background"
    >
      <Img1 />
    </div>
  );
}

function Img2() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[1.469px] relative w-[21.473px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Img">
          <path d={svgPaths.p1e3e6c00} fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-5 mt-[15px] place-items-start relative"
      data-name="Menu Item"
    >
      <Img2 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-[22.904px] justify-center ml-[32.367px] mt-[11.452px] not-italic relative text-[19.157px] text-blue-600 text-left translate-y-[-50%] w-[99.977px]">
        <p className="block leading-[27.281px]">Dashboard</p>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Background1 />
      <MenuItem />
    </div>
  );
}

function MenuItem2() {
  return (
    <div
      className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative"
      data-name="Menu Item"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-[4.23px] relative size-[18.662px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p1b375c00} fill="var(--fill-0, #4B5563)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[30.961px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">My Products</p>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <MenuItem2 />
    </div>
  );
}

function Img3() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <div className="absolute bottom-[-6.29%] left-0 right-0 top-[-6.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
          <g id="Img">
            <path d={svgPaths.p15825fe0} fill="var(--fill-0, #4B5563)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img3 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Orders</p>
      </div>
    </div>
  );
}

function Img4() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Img">
          <path d={svgPaths.p2b1c5780} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem5() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img4 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Analytics</p>
      </div>
    </div>
  );
}

function MenuItem6() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <div className="[grid-area:1_/_1] ml-0 mt-[4.012px] relative size-[20.51px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path d={svgPaths.p27a90700} fill="var(--fill-0, #4B5563)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Reviews</p>
      </div>
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="absolute inset-[-0.01%_2.22%_-0.03%_2.27%]" data-name="Menu Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
        <g id="Menu Item">
          <path d={svgPaths.p3811f080} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p6788e00} fill="var(--fill-0, #4B5563)" id="Vector_2" />
          <path d={svgPaths.p14c50c00} fill="var(--fill-0, #4B5563)" id="Vector_3" />
          <path d={svgPaths.p1f52c400} fill="var(--fill-0, #4B5563)" id="Vector_4" />
          <path d={svgPaths.p2aa2b000} fill="var(--fill-0, #4B5563)" id="Vector_5" />
          <path d={svgPaths.p3fb24c00} fill="var(--fill-0, #4B5563)" id="Vector_6" />
          <path d={svgPaths.pc52e180} fill="var(--fill-0, #4B5563)" id="Vector_7" />
          <path d={svgPaths.p41e2e00} fill="var(--fill-0, #4B5563)" id="Vector_8" />
          <path d={svgPaths.pf7b5d00} fill="var(--fill-0, #4B5563)" id="Vector_9" />
          <path d={svgPaths.p177f9f00} fill="var(--fill-0, #4B5563)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Img5() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <MenuItem7 />
    </div>
  );
}

function MenuItem8() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img5 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Payouts</p>
      </div>
    </div>
  );
}

function Img6() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <div className="absolute bottom-[-3.72%] left-0 right-0 top-[-3.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
          <g id="Img">
            <path
              clipRule="evenodd"
              d={svgPaths.p12816400}
              fill="var(--fill-0, #4B5563)"
              fillRule="evenodd"
              id="Vector"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuItem9() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img6 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.16px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{` Messages`}</p>
      </div>
    </div>
  );
}

function SimpleLineIconsBadge() {
  return (
    <div className="absolute inset-[-15.46%_-8.24%_-15.47%_-8.19%]" data-name="simple-line-icons:badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip0_1_262)" id="simple-line-icons:badge">
          <path d={svgPaths.pc048d00} fill="var(--fill-0, #2563EB)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_262">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Img7() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <SimpleLineIconsBadge />
    </div>
  );
}

function MenuItem10() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img7 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.16px] text-blue-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Badges</p>
      </div>
    </div>
  );
}

function MenuItem11() {
  return (
    <div className="absolute inset-[-3.7%_2.22%_-3.71%_2.27%]" data-name="Menu Item">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Menu Item">
          <path d={svgPaths.p38ecb600} fill="var(--fill-0, #4B5563)" id="Vector" />
          <path d={svgPaths.p1e1ccd00} fill="var(--fill-0, #4B5563)" id="Vector_2" />
          <path d={svgPaths.p96b1e00} fill="var(--fill-0, #4B5563)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Img8() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <MenuItem11 />
    </div>
  );
}

function MenuItem12() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img8 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">{`Policies & Shipping`}</p>
      </div>
    </div>
  );
}

function Img9() {
  return (
    <div className="[grid-area:1_/_1] h-[19.094px] ml-0 mt-[4.012px] relative w-[21.473px]" data-name="Img">
      <div className="absolute bottom-[-6.99%] left-0 right-0 top-[-6.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
          <g id="Img">
            <path d={svgPaths.p35e5b600} fill="var(--fill-0, #4B5563)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuItem13() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Menu Item"
    >
      <Img9 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center ml-[32.367px] mt-3.5 not-italic relative text-[19.157px] text-gray-600 text-left text-nowrap translate-y-[-50%]">
        <p className="block leading-[27.281px] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Frame683() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[42px] h-[1448px] items-start justify-start left-0 pb-0 pt-[27px] px-6 top-0 w-[291px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold h-9 justify-center leading-[0] not-italic relative shrink-0 text-[27px] text-blue-600 text-left w-[201.354px]">
        <p className="block leading-[36px]">Gldcart Vendor</p>
      </div>
      <MenuItem1 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
      <MenuItem8 />
      <MenuItem9 />
      <MenuItem10 />
      <MenuItem12 />
      <MenuItem13 />
    </div>
  );
}

export default function ProductCatalog() {
  return (
    <div className="bg-gray-50 relative size-full" data-name="Product Catalog">
      <Frame1 />
      <Frame676 />
      <Frame680 />
      <Frame679 />
      <Group2085669076 />
      <Group2085669073 />
      <Group2085669078 />
      <Group2085669074 />
      <Group2085669072 />
      <Group2085669075 />
      <div className="absolute flex h-0 items-center justify-center left-[332px] top-[164px] w-[26px]">
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
      <Frame701 />
      <Frame683 />
    </div>
  );
}