# E-Commerce Admin Dashboard

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive admin dashboard for e-commerce management built with React, TypeScript, and Vite. Features real-time analytics, product management, order tracking, and beautiful data visualizations.

**Author:** Rodrigo Nunes

## ✨ Features

### Dashboard & Analytics
- ✅ **Real-time Metrics** - Sales, revenue, orders, customers
- ✅ **Interactive Charts** - Line charts, bar charts, pie charts
- ✅ **Sales Analytics** - Revenue trends, top products, performance metrics
- ✅ **Customer Insights** - User behavior, demographics, retention
- ✅ **Responsive Design** - Mobile-first, works on all devices

### Product Management
- ✅ **Product CRUD** - Create, read, update, delete products
- ✅ **Image Upload** - Drag & drop image uploads
- ✅ **Inventory Management** - Stock tracking and alerts
- ✅ **Category Management** - Organize products by categories
- ✅ **Bulk Operations** - Import/export, bulk updates
- ✅ **Search & Filter** - Advanced product search

### Order Management
- ✅ **Order List** - Comprehensive order overview
- ✅ **Order Details** - Complete order information
- ✅ **Status Updates** - Track order lifecycle
- ✅ **Order Timeline** - Visual order history
- ✅ **Shipping Integration** - Track shipments
- ✅ **Refund Management** - Process returns and refunds

### User Interface
- ✅ **Modern Design** - Clean, professional interface
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Responsive Layout** - Optimized for all screen sizes
- ✅ **Data Tables** - Sortable, filterable, paginated tables
- ✅ **Form Validation** - Real-time input validation
- ✅ **Toast Notifications** - User-friendly feedback
- ✅ **Loading States** - Skeleton screens and spinners

### Technical Features
- ✅ **TypeScript** - Type-safe code
- ✅ **React Router v6** - Client-side routing
- ✅ **State Management** - Zustand for global state
- ✅ **API Integration** - Axios for HTTP requests
- ✅ **Form Handling** - React Hook Form + Zod validation
- ✅ **Charts** - Recharts for data visualization
- ✅ **UI Components** - Material-UI / Ant Design
- ✅ **Authentication** - JWT-based auth flow
- ✅ **Protected Routes** - Role-based access control
- ✅ **Code Splitting** - Lazy loading for performance
- ✅ **PWA Ready** - Progressive Web App capabilities

## 🛠️ Technology Stack

- **React 18.3** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 7.3** - Build tool and dev server
- **React Router v6** - Routing
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Axios** - HTTP client
- **Recharts** - Charts and graphs
- **Material-UI / Ant Design** - UI components
- **TailwindCSS** - Utility-first CSS (optional)
- **Vitest** - Unit testing
- **React Testing Library** - Component testing

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Modern web browser

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-admin-dashboard.git
cd ecommerce-admin-dashboard
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=E-Commerce Admin
VITE_APP_VERSION=1.0.0
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at http://localhost:5173

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 📚 Project Structure

```
ecommerce-admin-dashboard/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Table.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Layout.tsx
│   │   ├── charts/
│   │   │   ├── LineChart.tsx
│   │   │   ├── BarChart.tsx
│   │   │   └── PieChart.tsx
│   │   └── forms/
│   │       ├── ProductForm.tsx
│   │       └── OrderForm.tsx
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   └── Dashboard.tsx
│   │   ├── Products/
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ProductForm.tsx
│   │   ├── Orders/
│   │   │   ├── OrderList.tsx
│   │   │   └── OrderDetail.tsx
│   │   ├── Analytics/
│   │   │   └── Analytics.tsx
│   │   └── Auth/
│   │       ├── Login.tsx
│   │       └── Register.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   ├── products.service.ts
│   │   └── orders.service.ts
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── productsStore.ts
│   │   └── ordersStore.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useProducts.ts
│   │   └── useOrders.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── validators.ts
│   ├── types/
│   │   ├── product.ts
│   │   ├── order.ts
│   │   └── user.ts
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/
│   ├── components/
│   └── pages/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Features in Detail

### Dashboard

The main dashboard provides an overview of key metrics:
- Total sales and revenue
- Active orders
- Customer count
- Sales trends (daily, weekly, monthly)
- Top selling products
- Recent orders
- Revenue by category

### Product Management

Comprehensive product management interface:
- Add new products with images
- Edit existing products
- Delete products (soft delete)
- Manage inventory levels
- Set pricing and discounts
- Categorize products
- Import/export product data

### Order Management

Complete order lifecycle management:
- View all orders with filters
- Update order status
- Process refunds
- Print invoices
- Track shipments
- Customer communication

### Analytics

Advanced analytics and reporting:
- Sales performance over time
- Product performance metrics
- Customer behavior analysis
- Revenue forecasting
- Export reports (PDF, Excel)

## 🔧 Configuration

### API Integration

Configure the API endpoint in `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Update `src/services/api.ts` to match your backend API structure.

### Authentication

The dashboard uses JWT authentication. Configure in `src/services/auth.service.ts`:

```typescript
const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data;
};
```

### Theming

Customize the theme in `src/styles/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: '#1976d2',
    secondary: '#dc004e',
    success: '#4caf50',
    warning: '#ff9800',
    error: '#f44336',
  },
  // ... more theme configuration
};
```

## 🧪 Testing

### Run Tests

```bash
npm run test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy with Docker

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📈 Performance Optimization

- **Code Splitting** - Lazy load routes and components
- **Image Optimization** - Compress and lazy load images
- **Bundle Analysis** - Use `vite-bundle-visualizer`
- **Caching** - Implement service worker for PWA
- **Memoization** - Use React.memo and useMemo
- **Virtual Scrolling** - For large lists

## 🔐 Security

- **XSS Protection** - Sanitize user inputs
- **CSRF Protection** - CSRF tokens for forms
- **Secure Storage** - Encrypted local storage
- **HTTPS Only** - Force HTTPS in production
- **Content Security Policy** - Restrict resource loading

## 🚧 Roadmap

- [ ] Add multi-language support (i18n)
- [ ] Implement real-time notifications with WebSocket
- [ ] Add advanced filtering and search
- [ ] Implement drag-and-drop for product ordering
- [ ] Add export to PDF/Excel functionality
- [ ] Implement role-based permissions
- [ ] Add email template editor
- [ ] Implement A/B testing dashboard
- [ ] Add customer segmentation
- [ ] Implement automated reports

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Rodrigo Nunes**

- GitHub: [@rodrigonunes792](https://github.com/rodrigonunes792)
- LinkedIn: [Rodrigo Nunes](https://www.linkedin.com/in/rodrigonunes79/)

## 🙏 Acknowledgments

- React team for the amazing library
- Vite team for the blazing fast build tool
- Material-UI / Ant Design teams for beautiful components
- Open source community

---

⭐ If you find this project useful, please consider giving it a star!
