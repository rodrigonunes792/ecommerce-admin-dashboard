import { DollarSign, ShoppingCart, Package, TrendingUp } from 'lucide-react';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    // Mock data
    const stats = [
        {
            title: 'Total Revenue',
            value: '$45,231.89',
            change: '+20.1%',
            icon: DollarSign,
            color: '#10b981',
        },
        {
            title: 'Orders',
            value: '2,350',
            change: '+15.3%',
            icon: ShoppingCart,
            color: '#3b82f6',
        },
        {
            title: 'Products',
            value: '1,234',
            change: '+5.2%',
            icon: Package,
            color: '#8b5cf6',
        },
        {
            title: 'Growth',
            value: '+12.5%',
            change: '+2.4%',
            icon: TrendingUp,
            color: '#f59e0b',
        },
    ];

    const salesData = [
        { month: 'Jan', sales: 4000, orders: 240 },
        { month: 'Feb', sales: 3000, orders: 198 },
        { month: 'Mar', sales: 5000, orders: 320 },
        { month: 'Apr', sales: 4500, orders: 280 },
        { month: 'May', sales: 6000, orders: 390 },
        { month: 'Jun', sales: 5500, orders: 350 },
    ];

    const categoryData = [
        { name: 'Electronics', value: 400 },
        { name: 'Clothing', value: 300 },
        { name: 'Books', value: 200 },
        { name: 'Home', value: 100 },
    ];

    const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

    const recentOrders = [
        { id: '1', customer: 'John Doe', product: 'Laptop Pro', amount: '$1,299', status: 'Completed' },
        { id: '2', customer: 'Jane Smith', product: 'Wireless Mouse', amount: '$29', status: 'Processing' },
        { id: '3', customer: 'Bob Johnson', product: 'USB-C Cable', amount: '$15', status: 'Shipped' },
        { id: '4', customer: 'Alice Brown', product: 'Keyboard', amount: '$89', status: 'Completed' },
    ];

    return (
        <div className="dashboard">
            <h1 className="page-title">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 mb-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.title} className="card stat-card">
                            <div className="stat-header">
                                <div>
                                    <p className="stat-title">{stat.title}</p>
                                    <h3 className="stat-value">{stat.value}</h3>
                                </div>
                                <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                                    <Icon size={24} />
                                </div>
                            </div>
                            <p className="stat-change" style={{ color: stat.color }}>
                                {stat.change} from last month
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-2 mb-6">
                <div className="card">
                    <h3 className="chart-title">Sales Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
                            <Line type="monotone" dataKey="orders" stroke="#8b5cf6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="card">
                    <h3 className="chart-title">Sales by Category</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="card">
                <h3 className="chart-title mb-4">Recent Orders</h3>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id}>
                                    <td>#{order.id}</td>
                                    <td>{order.customer}</td>
                                    <td>{order.product}</td>
                                    <td className="font-semibold">{order.amount}</td>
                                    <td>
                                        <span className={`status-badge status-${order.status.toLowerCase()}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
