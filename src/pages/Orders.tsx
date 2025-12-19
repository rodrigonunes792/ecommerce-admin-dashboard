import { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import './Orders.css';

interface Order {
    id: string;
    customer: string;
    email: string;
    product: string;
    amount: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    date: string;
}

const Orders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    // Mock data
    const orders: Order[] = [
        {
            id: '1001',
            customer: 'John Doe',
            email: 'john@example.com',
            product: 'Laptop Pro 15"',
            amount: 1299.99,
            status: 'delivered',
            date: '2024-12-15',
        },
        {
            id: '1002',
            customer: 'Jane Smith',
            email: 'jane@example.com',
            product: 'Wireless Mouse',
            amount: 29.99,
            status: 'processing',
            date: '2024-12-18',
        },
        {
            id: '1003',
            customer: 'Bob Johnson',
            email: 'bob@example.com',
            product: 'USB-C Cable',
            amount: 14.99,
            status: 'shipped',
            date: '2024-12-17',
        },
        {
            id: '1004',
            customer: 'Alice Brown',
            email: 'alice@example.com',
            product: 'Mechanical Keyboard',
            amount: 89.99,
            status: 'delivered',
            date: '2024-12-14',
        },
        {
            id: '1005',
            customer: 'Charlie Wilson',
            email: 'charlie@example.com',
            product: 'Monitor 27"',
            amount: 349.99,
            status: 'pending',
            date: '2024-12-19',
        },
    ];

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.id.includes(searchTerm) ||
            order.product.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = statusFilter === 'all' || order.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            pending: 'warning',
            processing: 'primary',
            shipped: 'info',
            delivered: 'success',
            cancelled: 'danger',
        };
        return colors[status] || 'secondary';
    };

    return (
        <div className="orders-page">
            <h1 className="page-title">Orders</h1>

            {/* Search and Filters */}
            <div className="card mb-6">
                <div className="filters-container">
                    <div className="search-box">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            </div>

            {/* Orders Table */}
            <div className="card">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td className="font-semibold">#{order.id}</td>
                                    <td>
                                        <div>
                                            <div className="font-semibold">{order.customer}</div>
                                            <div className="text-sm text-gray-500">{order.email}</div>
                                        </div>
                                    </td>
                                    <td>{order.product}</td>
                                    <td className="font-semibold">${order.amount.toFixed(2)}</td>
                                    <td>{new Date(order.date).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`status-badge status-${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-icon" title="View Details">
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 mt-6">
                <div className="card">
                    <p className="stat-title">Total Orders</p>
                    <h3 className="stat-value">{orders.length}</h3>
                </div>
                <div className="card">
                    <p className="stat-title">Pending</p>
                    <h3 className="stat-value text-warning">
                        {orders.filter((o) => o.status === 'pending').length}
                    </h3>
                </div>
                <div className="card">
                    <p className="stat-title">Processing</p>
                    <h3 className="stat-value text-primary">
                        {orders.filter((o) => o.status === 'processing').length}
                    </h3>
                </div>
                <div className="card">
                    <p className="stat-title">Delivered</p>
                    <h3 className="stat-value text-success">
                        {orders.filter((o) => o.status === 'delivered').length}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Orders;
