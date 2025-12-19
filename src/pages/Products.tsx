import { useState } from 'react';
import { Plus, Search, Edit, Trash2 } from 'lucide-react';
import './Products.css';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'active' | 'inactive';
}

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock data
    const products: Product[] = [
        { id: '1', name: 'Laptop Pro 15"', category: 'Electronics', price: 1299.99, stock: 45, status: 'active' },
        { id: '2', name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 200, status: 'active' },
        { id: '3', name: 'USB-C Cable', category: 'Accessories', price: 14.99, stock: 150, status: 'active' },
        { id: '4', name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, stock: 75, status: 'active' },
        { id: '5', name: 'Monitor 27"', category: 'Electronics', price: 349.99, stock: 30, status: 'active' },
        { id: '6', name: 'Webcam HD', category: 'Electronics', price: 79.99, stock: 0, status: 'inactive' },
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="products-page">
            <div className="page-header">
                <h1 className="page-title">Products</h1>
                <button className="btn btn-primary">
                    <Plus size={20} />
                    Add Product
                </button>
            </div>

            {/* Search and Filters */}
            <div className="card mb-6">
                <div className="search-container">
                    <div className="search-box">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="card">
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map((product) => (
                                <tr key={product.id}>
                                    <td className="font-semibold">{product.name}</td>
                                    <td>{product.category}</td>
                                    <td className="font-semibold">${product.price.toFixed(2)}</td>
                                    <td>
                                        <span className={product.stock > 0 ? 'text-success' : 'text-danger'}>
                                            {product.stock} units
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-badge status-${product.status}`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="Edit">
                                                <Edit size={18} />
                                            </button>
                                            <button className="btn-icon btn-danger" title="Delete">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-3 mt-6">
                <div className="card">
                    <p className="stat-title">Total Products</p>
                    <h3 className="stat-value">{products.length}</h3>
                </div>
                <div className="card">
                    <p className="stat-title">Active Products</p>
                    <h3 className="stat-value text-success">
                        {products.filter((p) => p.status === 'active').length}
                    </h3>
                </div>
                <div className="card">
                    <p className="stat-title">Out of Stock</p>
                    <h3 className="stat-value text-danger">
                        {products.filter((p) => p.stock === 0).length}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Products;
