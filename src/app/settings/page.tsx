import { SearchComponent } from "@/components/SearchComponent";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">Settings</h1>
          <p className="text-gray-600">Configure system settings and preferences</p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <SearchComponent 
            placeholder="Search settings..."
            className="w-full max-w-md"
          />
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <p className="text-gray-500 text-center py-8">
            Settings configuration coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
