import React, { useState } from 'react';
import { User, Package, MapPin, Settings, Heart, Truck, CheckCircle2, ChevronRight, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

export const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const { wishlistItems } = useWishlist();

  const sampleOrders = [
    {
      id: 'VRT-892401',
      date: 'Aug 04, 2026',
      status: 'Delivered',
      total: 490,
      tracking: '1Z9999999999999999',
      items: [
        { name: 'Architectural Wool Overcoat', color: 'Charcoal Black', size: 'L', price: 490, qty: 1, img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=300' }
      ]
    },
    {
      id: 'VRT-781920',
      date: 'Jul 19, 2026',
      status: 'Delivered',
      total: 620,
      tracking: '1Z8888888888888888',
      items: [
        { name: 'Merino Cashmere High-Neck Knit', color: 'Ivory White', size: 'M', price: 240, qty: 1, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=300' },
        { name: 'Minimalist Calfskin Crossbody Bag', color: 'Noir', size: 'One Size', price: 380, qty: 1, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300' }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Account Hero Bar */}
      <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-brand-accent text-white flex items-center justify-center font-serif text-2xl font-bold">
            JV
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Julian Vance</h1>
            <p className="text-xs text-neutral-400">VÉRITÉ Atelier VIP Member • Client ID #VRT-Client-9042</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white/10 text-brand-accent text-xs font-semibold rounded-full border border-white/20">
            Gold Tier
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 space-y-1">
          {[
            { id: 'orders', label: 'Order History', icon: Package },
            { id: 'profile', label: 'Personal Profile', icon: User },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
            { id: 'settings', label: 'Account Preferences', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </button>
            );
          })}
        </aside>

        {/* Tab Content Display */}
        <main className="lg:col-span-9 bg-white border border-neutral-200 rounded p-6 sm:p-8 shadow-sm">
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                Order History & Deliveries
              </h2>

              <div className="space-y-6 divide-y divide-neutral-200">
                {sampleOrders.map((order) => (
                  <div key={order.id} className="pt-6 first:pt-0 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs bg-neutral-50 p-4 rounded border border-neutral-200/80">
                      <div>
                        <span className="font-bold text-neutral-900 mr-3">Order #{order.id}</span>
                        <span className="text-neutral-500">{order.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {order.status}
                        </span>
                        <span className="font-serif font-bold text-sm text-neutral-900">${order.total}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                            <img src={item.img} alt={item.name} className="w-12 h-14 object-cover rounded bg-neutral-100" />
                            <div>
                              <h4 className="font-bold text-neutral-900">{item.name}</h4>
                              <p className="text-neutral-500">{item.color} / {item.size} x {item.qty}</p>
                            </div>
                          </div>
                          <span className="font-bold text-neutral-900">${item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-500">
                      <span>Carrier: DHL Express (Tracking: {order.tracking})</span>
                      <button className="text-brand-accent font-bold hover:underline">Reorder Items</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6 max-w-xl">
              <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                Profile Details
              </h2>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="text-neutral-400 font-medium block">First Name</label>
                  <p className="font-bold text-neutral-900 mt-1">Julian</p>
                </div>
                <div>
                  <label className="text-neutral-400 font-medium block">Last Name</label>
                  <p className="font-bold text-neutral-900 mt-1">Vance</p>
                </div>
                <div>
                  <label className="text-neutral-400 font-medium block">Email Address</label>
                  <p className="font-bold text-neutral-900 mt-1">julian.vance@example.com</p>
                </div>
                <div>
                  <label className="text-neutral-400 font-medium block">Phone</label>
                  <p className="font-bold text-neutral-900 mt-1">+1 (555) 234-5678</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                Saved Delivery Addresses
              </h2>
              <div className="p-4 border border-neutral-200 rounded text-xs space-y-2 max-w-md bg-neutral-50">
                <span className="px-2 py-0.5 bg-neutral-900 text-white font-bold text-[10px] uppercase rounded">Default</span>
                <h4 className="font-bold text-neutral-900">Julian Vance</h4>
                <p className="text-neutral-600">742 Evergreen Terrace<br />New York, NY 10001<br />United States</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6 max-w-md text-xs">
              <h2 className="text-base font-bold text-neutral-900 uppercase tracking-wider pb-3 border-b border-neutral-200">
                Account Settings
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-3 border border-neutral-200 rounded">
                  <span>Receive VÉRITÉ Journal New Season Notifications</span>
                  <input type="checkbox" defaultChecked className="accent-brand-dark" />
                </label>
                <label className="flex items-center justify-between p-3 border border-neutral-200 rounded">
                  <span>SMS Shipment Tracking Notifications</span>
                  <input type="checkbox" defaultChecked className="accent-brand-dark" />
                </label>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
