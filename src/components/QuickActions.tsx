import { AlertTriangle, MessageSquare, UserPlus } from "lucide-react";

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "danger" | "info" | "success";
}

export function QuickActions() {
  const actions: QuickAction[] = [
    {
      title: "Suspend Vendor",
      description: "Temporarily suspend a vendor account",
      icon: <AlertTriangle className="size-4 text-red-500" />,
      variant: "danger",
    },
    {
      title: "Respond to Chat",
      description: "Reply to urgent support message",
      icon: <MessageSquare className="size-[25px] text-blue-600" />,
      variant: "info",
    },
    {
      title: "Add Team member",
      description: "Invite new support team",
      icon: <UserPlus className="size-6 text-green-600" />,
      variant: "success",
    },
  ];

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "danger":
        return "bg-[rgba(255,217,217,0.5)] border-red-500 text-red-500";
      case "info":
        return "bg-[rgba(219,234,254,0.5)] border-blue-600 text-blue-600";
      case "success":
        return "bg-[rgba(220,252,231,0.5)] border-green-600 text-green-600";
      default:
        return "";
    }
  };

  return (
    <div className="absolute bg-white left-[294px] rounded-[10px] top-[349px] w-[1112px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip pb-[46px] pl-[27px] pr-3 pt-[18px] relative w-[1112px]">
        <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-center text-nowrap">
          <p className="block leading-[36px] whitespace-pre">Quick Actions</p>
        </div>
        <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0 w-full">
          {actions.map((action, index) => (
            <div
              key={index}
              className={`basis-0 grow h-[67px] min-h-px min-w-px relative rounded-[10px] shrink-0 border ${getVariantStyles(action.variant)} shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]`}
            >
              <div className="flex flex-col justify-center relative size-full">
                <div className="box-border content-stretch flex flex-col gap-2.5 h-[67px] items-start justify-center pl-4 pr-[53px] py-[7px] relative w-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0">
                    {action.icon}
                    <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic pb-3 pt-0 px-0 relative shrink-0 text-[14px] text-left w-[294px]">
                      <div className="flex flex-col font-medium justify-center mb-[-12px] relative shrink-0 w-full">
                        <p className="block leading-[36px]">{action.title}</p>
                      </div>
                      <div className="flex flex-col font-normal justify-center mb-[-12px] relative shrink-0 w-full">
                        <p className="block leading-[25.613px]">{action.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}