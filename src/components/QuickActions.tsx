"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, MessageSquare, UserPlus, X } from "lucide-react";
import { getQuickActionsData, QuickAction as MockQuickAction } from "../lib/mockData";

interface QuickAction extends MockQuickAction {
  icon: React.ReactNode;
  variant: "danger" | "info" | "success";
}

export function QuickActions() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState<QuickAction | null>(null);
  const mockActions = getQuickActionsData();
  
  const getIconComponent = (iconName: string, variant: string) => {
    switch (iconName) {
      case "alert-triangle":
        return <AlertTriangle className="size-4 text-red-500" />;
      case "message-square":
        return <MessageSquare className="size-[25px] text-blue-600" />;
      case "user-plus":
        return <UserPlus className="size-6 text-green-600" />;
      default:
        return <AlertTriangle className="size-4 text-red-500" />;
    }
  };

  const actions: QuickAction[] = mockActions.map(action => ({
    ...action,
    icon: getIconComponent(action.icon, action.variant)
  }));

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

  const handleActionClick = (action: QuickAction) => {
    console.log(`Clicked: ${action.id}`);
    
    switch (action.id) {
      case "suspend-vendor":
        setModalAction(action);
        setShowModal(true);
        break;
      case "respond-chat":
        router.push("/support");
        break;
      case "add-team-member":
        setModalAction(action);
        setShowModal(true);
        break;
    }
  };

  const handleModalConfirm = () => {
    if (modalAction) {
      console.log(`Confirmed action: ${modalAction.id}`);
      // Here you would typically make an API call
      alert(`${modalAction.title} action confirmed!`);
    }
    setShowModal(false);
    setModalAction(null);
  };

  const handleModalCancel = () => {
    setShowModal(false);
    setModalAction(null);
  };

  return (
    <>
      <div className="absolute bg-white left-[294px] rounded-[10px] top-[349px] w-[1112px] border border-gray-200 shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)]">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center overflow-clip pb-[46px] pl-[27px] pr-3 pt-[18px] relative w-[1112px]">
          <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-center text-nowrap">
            <p className="block leading-[36px] whitespace-pre">Quick Actions</p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-5 items-center justify-start p-0 relative shrink-0 w-full">
            {actions.map((action, index) => (
              <div
                key={action.id}
                className={`basis-0 grow h-[67px] min-h-px min-w-px relative rounded-[10px] shrink-0 border ${getVariantStyles(action.variant)} shadow-[0px_4px_4px_0px_rgba(217,217,217,0.04)] cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105`}
                onClick={() => handleActionClick(action)}
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

      {/* Modal */}
      {showModal && modalAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{modalAction.title}</h3>
              <button
                onClick={handleModalCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">{modalAction.description}</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleModalCancel}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleModalConfirm}
                className={`px-4 py-2 text-white rounded-md transition-colors ${
                  modalAction.variant === "danger" 
                    ? "bg-red-600 hover:bg-red-700" 
                    : modalAction.variant === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}