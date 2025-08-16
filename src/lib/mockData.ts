// Mock data for admin dashboard components

export interface StatCard {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
  iconBg: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  variant: "danger" | "info" | "success";
}

export interface ActivityItem {
  id: string;
  type: "warning" | "error" | "info" | "success";
  message: string;
  time: string;
  icon: string;
}

export interface PerformanceMetric {
  id: string;
  label: string;
  value: string;
  icon: string;
  bgColor: string;
}

export interface Vendor {
  id: string;
  rank: number;
  name: string;
  email: string;
  joinDate: string;
  rating: string;
  products: string;
  revenue: string;
  status: "active" | "pending" | "suspended";
  vendorId: string;
  totalProducts: number;
  totalOrders: number;
  lastActive: string;
  phone: string;
  address: string;
  category: string;
  description: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  vendorName: string;
  vendorId: string;
  productName: string;
  quantity: number;
  totalAmount: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
  deliveryDate?: string;
  paymentMethod: string;
  shippingAddress: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "vendor" | "admin";
  status: "active" | "inactive" | "suspended";
  joinDate: string;
  lastActive: string;
  totalOrders: number;
  totalSpent: string;
  phone: string;
  address: string;
}

export interface SearchResult {
  type: "vendor" | "order" | "user" | "product";
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  status?: string;
}

export const getStatsData = (): StatCard[] => [
  {
    id: "total-users",
    title: "Total Users",
    value: "18,249",
    change: "+8%",
    trend: "up",
    icon: "users",
    iconBg: "bg-blue-600"
  },
  {
    id: "active-vendors",
    title: "Active Vendors",
    value: "1,247",
    change: "+15%",
    trend: "up",
    icon: "user-plus",
    iconBg: "bg-green-600"
  },
  {
    id: "active-orders",
    title: "Active Orders",
    value: "2,847",
    change: "12%",
    trend: "up",
    icon: "package",
    iconBg: ""
  },
  {
    id: "support-chats",
    title: "Support Chats",
    value: "156",
    change: "+5%",
    trend: "up",
    icon: "message-square",
    iconBg: "bg-blue-600"
  }
];

export const getQuickActionsData = (): QuickAction[] => [
  {
    id: "suspend-vendor",
    title: "Suspend Vendor",
    description: "Temporarily suspend a vendor account",
    icon: "alert-triangle",
    variant: "danger"
  },
  {
    id: "respond-chat",
    title: "Respond to Chat",
    description: "Reply to urgent support message",
    icon: "message-square",
    variant: "info"
  },
  {
    id: "add-team-member",
    title: "Add Team member",
    description: "Invite new support team",
    icon: "user-plus",
    variant: "success"
  }
];

export const getRecentActivityData = (): ActivityItem[] => [
  {
    id: "1",
    type: "warning",
    message: 'New vendor "EcoCraft Artisans" registered',
    time: "2 hours ago",
    icon: "users"
  },
  {
    id: "2",
    type: "error",
    message: "Support chat escalated by John Doe",
    time: "3 hours ago",
    icon: "message-square"
  },
  {
    id: "3",
    type: "info",
    message: 'Vendor "TechInnovate" suspended for policy violation',
    time: "2 hours ago",
    icon: "users"
  },
  {
    id: "4",
    type: "success",
    message: "50 new users registered today",
    time: "2 hours ago",
    icon: "user-plus"
  }
];

export const getVendorPerformanceData = (): PerformanceMetric[] => [
  {
    id: "active-vendors",
    label: "Active Vendors",
    value: "1,247",
    icon: "user-plus",
    bgColor: "bg-[rgba(220,252,231,0.5)]"
  },
  {
    id: "pending-approval",
    label: "Pending Approval",
    value: "23",
    icon: "alert-triangle",
    bgColor: "bg-[rgba(246,229,210,0.73)]"
  },
  {
    id: "suspended",
    label: "Suspended",
    value: "8",
    icon: "ban",
    bgColor: "bg-[rgba(255,217,217,0.5)]"
  },
  {
    id: "avg-rating",
    label: "Avg Rating",
    value: "4.7",
    icon: "star",
    bgColor: "bg-[rgba(219,234,254,0.5)]"
  }
];

export const getTopVendorsData = (): Vendor[] => [
  {
    id: "ecocraft",
    rank: 1,
    name: "EcoCraft Artisans",
    email: "maria@ecocraft.com",
    joinDate: "2023-08-15",
    rating: "4.9",
    products: "45 products",
    revenue: "$12,450",
    status: "active",
    vendorId: "VND-001",
    totalProducts: 45,
    totalOrders: 234,
    lastActive: "2024-01-15",
    phone: "+1-555-0123",
    address: "123 Green Street, Eco City, EC 12345",
    category: "Handmade Crafts",
    description: "Sustainable handmade crafts and eco-friendly products"
  },
  {
    id: "techinnovate",
    rank: 2,
    name: "TechInnovate Solutions",
    email: "david@techinnovate.com",
    joinDate: "2024-01-10",
    rating: "4.7",
    products: "23 products",
    revenue: "$8,920",
    status: "active",
    vendorId: "VND-002",
    totalProducts: 23,
    totalOrders: 156,
    lastActive: "2024-01-14",
    phone: "+1-555-0456",
    address: "456 Tech Avenue, Innovation City, IC 67890",
    category: "Technology",
    description: "Cutting-edge technology solutions and gadgets"
  },
  {
    id: "organicharvest",
    rank: 3,
    name: "Organic Harvest Co",
    email: "sarah@organicharvest.com",
    joinDate: "2023-06-20",
    rating: "4.8",
    products: "67 products",
    revenue: "$15,670",
    status: "active",
    vendorId: "VND-003",
    totalProducts: 67,
    totalOrders: 445,
    lastActive: "2024-01-15",
    phone: "+1-555-0789",
    address: "789 Farm Road, Organic Valley, OV 11111",
    category: "Organic Food",
    description: "Fresh organic produce and natural food products"
  },
  {
    id: "urbanfashion",
    rank: 4,
    name: "Urban Fashion Hub",
    email: "alex@urbanfashion.com",
    joinDate: "2023-11-05",
    rating: "4.6",
    products: "34 products",
    revenue: "$9,340",
    status: "pending",
    vendorId: "VND-004",
    totalProducts: 0,
    totalOrders: 0,
    lastActive: "2024-01-10",
    phone: "+1-555-0124",
    address: "321 Style Street, Fashion District, FD 22222",
    category: "Fashion",
    description: "Trendy urban fashion and accessories"
  },
  {
    id: "greenliving",
    rank: 5,
    name: "GreenLiving Essentials",
    email: "emma@greenliving.com",
    joinDate: "2023-09-12",
    rating: "3.1",
    products: "12 products",
    revenue: "$2,340",
    status: "suspended",
    vendorId: "VND-005",
    totalProducts: 12,
    totalOrders: 23,
    lastActive: "2024-01-05",
    phone: "+1-555-0567",
    address: "654 Eco Lane, Green Town, GT 33333",
    category: "Eco Products",
    description: "Sustainable living essentials and eco-friendly products"
  }
];

export const getAllVendorsData = (): Vendor[] => [
  ...getTopVendorsData(),
  {
    id: "artisancreations",
    rank: 6,
    name: "Artisan Creations",
    email: "mike@artisancreations.com",
    joinDate: "2023-12-01",
    rating: "4.5",
    products: "28 products",
    revenue: "$6,780",
    status: "active",
    vendorId: "VND-006",
    totalProducts: 28,
    totalOrders: 89,
    lastActive: "2024-01-15",
    phone: "+1-555-0901",
    address: "987 Craft Court, Artisan Village, AV 44444",
    category: "Handmade",
    description: "Unique handmade jewelry and accessories"
  },
  {
    id: "digitaldynamics",
    rank: 7,
    name: "Digital Dynamics",
    email: "lisa@digitaldynamics.com",
    joinDate: "2024-01-05",
    rating: "4.3",
    products: "15 products",
    revenue: "$4,230",
    status: "active",
    vendorId: "VND-007",
    totalProducts: 15,
    totalOrders: 67,
    lastActive: "2024-01-14",
    phone: "+1-555-0234",
    address: "147 Digital Drive, Tech Park, TP 55555",
    category: "Digital Products",
    description: "Digital downloads and online services"
  }
];

export const getOrdersData = (): Order[] => [
  {
    id: "ord-001",
    orderNumber: "ORD-2024-001",
    customerName: "John Smith",
    customerEmail: "john.smith@email.com",
    vendorName: "EcoCraft Artisans",
    vendorId: "VND-001",
    productName: "Handmade Wooden Bowl",
    quantity: 2,
    totalAmount: "$89.99",
    status: "delivered",
    orderDate: "2024-01-10",
    deliveryDate: "2024-01-15",
    paymentMethod: "Credit Card",
    shippingAddress: "123 Main St, City, State 12345"
  },
  {
    id: "ord-002",
    orderNumber: "ORD-2024-002",
    customerName: "Sarah Johnson",
    customerEmail: "sarah.j@email.com",
    vendorName: "TechInnovate Solutions",
    vendorId: "VND-002",
    productName: "Smart Home Hub",
    quantity: 1,
    totalAmount: "$199.99",
    status: "processing",
    orderDate: "2024-01-12",
    paymentMethod: "PayPal",
    shippingAddress: "456 Oak Ave, Town, State 67890"
  },
  {
    id: "ord-003",
    orderNumber: "ORD-2024-003",
    customerName: "Mike Davis",
    customerEmail: "mike.davis@email.com",
    vendorName: "Organic Harvest Co",
    vendorId: "VND-003",
    productName: "Organic Vegetable Box",
    quantity: 1,
    totalAmount: "$45.99",
    status: "shipped",
    orderDate: "2024-01-13",
    paymentMethod: "Credit Card",
    shippingAddress: "789 Pine Rd, Village, State 11111"
  }
];

export const getUsersData = (): User[] => [
  {
    id: "user-001",
    name: "John Smith",
    email: "john.smith@email.com",
    role: "customer",
    status: "active",
    joinDate: "2023-03-15",
    lastActive: "2024-01-15",
    totalOrders: 12,
    totalSpent: "$1,234.56",
    phone: "+1-555-0001",
    address: "123 Main St, City, State 12345"
  },
  {
    id: "user-002",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "customer",
    status: "active",
    joinDate: "2023-05-20",
    lastActive: "2024-01-14",
    totalOrders: 8,
    totalSpent: "$876.43",
    phone: "+1-555-0002",
    address: "456 Oak Ave, Town, State 67890"
  },
  {
    id: "user-003",
    name: "Mike Davis",
    email: "mike.davis@email.com",
    role: "customer",
    status: "active",
    joinDate: "2023-07-10",
    lastActive: "2024-01-13",
    totalOrders: 5,
    totalSpent: "$543.21",
    phone: "+1-555-0003",
    address: "789 Pine Rd, Village, State 11111"
  }
];

// Search functionality
export const searchData = (query: string): SearchResult[] => {
  const results: SearchResult[] = [];
  const lowerQuery = query.toLowerCase();

  // Search vendors
  getAllVendorsData().forEach(vendor => {
    if (
      vendor.name.toLowerCase().includes(lowerQuery) ||
      vendor.email.toLowerCase().includes(lowerQuery) ||
      vendor.vendorId.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        type: "vendor",
        id: vendor.id,
        title: vendor.name,
        subtitle: vendor.email,
        description: `${vendor.totalProducts} products • ${vendor.status}`,
        icon: "users",
        status: vendor.status
      });
    }
  });

  // Search orders
  getOrdersData().forEach(order => {
    if (
      order.orderNumber.toLowerCase().includes(lowerQuery) ||
      order.customerName.toLowerCase().includes(lowerQuery) ||
      order.vendorName.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        type: "order",
        id: order.id,
        title: order.orderNumber,
        subtitle: order.customerName,
        description: `${order.vendorName} • ${order.totalAmount}`,
        icon: "package",
        status: order.status
      });
    }
  });

  // Search users
  getUsersData().forEach(user => {
    if (
      user.name.toLowerCase().includes(lowerQuery) ||
      user.email.toLowerCase().includes(lowerQuery)
    ) {
      results.push({
        type: "user",
        id: user.id,
        title: user.name,
        subtitle: user.email,
        description: `${user.totalOrders} orders • ${user.totalSpent}`,
        icon: "user",
        status: user.status
      });
    }
  });

  return results.slice(0, 10); // Limit to 10 results
};

// Utility function to get icon name for mapping
export const getIconName = (iconName: string): string => {
  return iconName;
};
