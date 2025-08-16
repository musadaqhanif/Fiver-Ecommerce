# Admin Dashboard - Fiverr Client

A modern, responsive admin dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Features

### ✅ Dynamic & Clickable Components
- **Stats Cards**: Clickable cards showing key metrics (Total Users, Active Vendors, Active Orders, Support Chats)
- **Quick Actions**: Interactive action buttons for common admin tasks
- **Recent Activity**: Clickable activity items with hover effects
- **Vendor Performance**: Interactive performance metrics with click handlers
- **Top Vendors List**: Clickable vendor entries in the charts section
- **Search Bar**: Functional search input with real-time query logging

### 🎨 Design Preservation
- All original design elements and styling preserved
- Exact color schemes, spacing, and layout maintained
- Smooth hover animations and transitions added
- Professional visual feedback for user interactions

### 📊 Mock Data System
- Centralized mock data management in `/src/lib/mockData.ts`
- Type-safe interfaces for all data structures
- Easy to extend and modify data sources
- Consistent data structure across all components

## Components

### StatsCards
- **Clickable**: Each stat card responds to clicks with console logging
- **Dynamic**: Data sourced from mock data system
- **Hover Effects**: Enhanced shadow on hover
- **Navigation Ready**: Prepared for routing to detailed pages

### QuickActions
- **Interactive**: Each action button has click handlers
- **Variant Styling**: Different colors for danger, info, and success actions
- **Hover Effects**: Enhanced visual feedback
- **Modal Ready**: Prepared for modal/dialog implementations

### RecentActivity
- **Clickable Items**: Each activity item responds to clicks
- **Type-based Styling**: Different colors for warning, error, info, success
- **Hover Effects**: Enhanced shadow and transitions
- **Navigation Ready**: Prepared for detailed activity views

### VendorPerformance
- **Interactive Metrics**: Each metric responds to clicks
- **Scale Animation**: Subtle scale effect on hover
- **Icon Mapping**: Dynamic icon rendering based on data
- **Navigation Ready**: Prepared for detailed performance views

### ChartsSection
- **Clickable Vendors**: Each vendor in the top performers list is clickable
- **Hover Effects**: Background color change on hover
- **Dynamic Data**: Vendor list sourced from mock data
- **Navigation Ready**: Prepared for vendor profile pages

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Access Dashboard**
   - Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
   - All components are now clickable and interactive
   - Check browser console for click event logging

## File Structure

```
src/
├── components/
│   ├── AdminDashboard.tsx      # Main dashboard layout
│   ├── StatsCards.tsx          # Clickable stats cards
│   ├── QuickActions.tsx        # Interactive action buttons
│   ├── RecentActivity.tsx      # Clickable activity feed
│   ├── VendorPerformance.tsx   # Interactive performance metrics
│   └── ChartsSection.tsx       # Charts with clickable vendors
├── lib/
│   └── mockData.ts             # Centralized mock data system
└── app/
    └── dashboard/
        └── page.tsx            # Dashboard page route
```

## Customization

### Adding New Data
1. Update interfaces in `/src/lib/mockData.ts`
2. Add new data functions
3. Import and use in components

### Adding Navigation
1. Replace console.log statements with actual navigation
2. Use Next.js router or your preferred routing solution
3. Add loading states and error handling

### Styling Modifications
- All original Tailwind classes preserved
- Hover effects can be customized in component files
- Color schemes can be modified in mock data

## Browser Console Output

When interacting with the dashboard, you'll see console logs like:
- `Clicked: total-users` (Stats Cards)
- `Clicked: suspend-vendor` (Quick Actions)
- `Clicked activity: 1` (Recent Activity)
- `Clicked metric: active-vendors` (Vendor Performance)
- `Clicked vendor: ecocraft` (Top Vendors)
- `Search query: your search term` (Search Bar)

## Next Steps

1. **Implement Real Navigation**: Replace console.log with actual page routing
2. **Add Real Data**: Connect to APIs or databases
3. **Add Modals**: Implement modal dialogs for actions
4. **Add Loading States**: Show loading indicators during data fetching
5. **Add Error Handling**: Implement error boundaries and fallbacks
6. **Add Authentication**: Implement user authentication and authorization

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **React**: UI library

## License

This project is part of the Fiverr Client application.
