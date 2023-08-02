import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const Dashboard = () => {
  // Dummy orders data for demonstration
  const orders = [
    { id: 1, customer: "John Doe", items: ["Burger", "Fries"], total: 20.99, status: "Pending" },
    { id: 2, customer: "Jane Smith", items: ["Pizza", "Coke"], total: 15.49, status: "Delivered" },
    { id: 3, customer: "Michael Johnson", items: ["Steak", "Salad"], total: 32.25, status: "Processing" },
    // Add more orders as needed
  ];

  return (
    <div className="bg-gray-100 pt-[30vh] min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Restaurant Dashboard</h1>
        {/* Orders section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Orders</h2>
          {orders.map((order) => (
            <div key={order.id} className="border-b border-gray-300 py-2">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-semibold">Order ID:</span> {order.id}
                </div>
                <div>
                  <span className="text-lg font-semibold">Status:</span> {order.status}
                </div>
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">Customer:</span> {order.customer}
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">Items:</span> {order.items.join(", ")}
              </div>
              <div className="mt-2">
                <span className="text-lg font-semibold">Total:</span> ${order.total.toFixed(2)}
              </div>
            </div>
          ))}
          {/* Show a message when there are no orders */}
          {orders.length === 0 && <p className="text-lg font-semibold mt-4">No orders found.</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
