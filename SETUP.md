# E-Commerce Admin Dashboard - Setup Instructions

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The application will be available at http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with sidebar
│   └── Layout.css
├── pages/
│   ├── Dashboard.tsx       # Dashboard with charts
│   ├── Dashboard.css
│   ├── Products.tsx        # Products management
│   ├── Products.css
│   ├── Orders.tsx          # Orders management
│   └── Orders.css
├── App.tsx                 # Main app with routing
├── App.css                 # Global styles
└── main.tsx               # Entry point
```

## Features Implemented

✅ Responsive sidebar navigation
✅ Dashboard with statistics and charts
✅ Products page with search
✅ Orders page with filters
✅ Mobile-responsive design
✅ Modern UI with Lucide icons
✅ Charts with Recharts library

## Technologies Used

- React 18.3
- TypeScript
- Vite
- React Router v6
- Recharts (charts)
- Lucide React (icons)

---

**Author:** Rodrigo Nunes
