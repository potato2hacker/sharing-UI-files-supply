import { useState } from 'react';
import { Truck, ArrowDown, ArrowUp, AlertTriangle, Sun, Moon } from 'lucide-react';
import { InventoryTable } from './components/InventoryTable';
import { SupplierGrid } from './components/SupplierGrid';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const bgMain = isDarkMode ? '#090D14' : '#FFFFFF';
  const bgCard = isDarkMode ? '#151A23' : '#F8FAFC';
  const textPrimary = isDarkMode ? '#FFFFFF' : '#1E293B';
  const textSecondary = isDarkMode ? '#BDC3C7' : '#64748B';
  const accentColor = isDarkMode ? '#00E5FF' : '#00BCD4';
  const alertColor = isDarkMode ? '#FF4D4D' : '#EF4444';
  const successColor = isDarkMode ? '#00E5FF' : '#10B981';

  return (
    <div className="w-full min-h-screen overflow-x-hidden transition-colors duration-300" style={{ backgroundColor: bgMain }}>
      <div className="w-full max-w-[1400px] mx-auto p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 style={{ color: textPrimary, fontWeight: 700 }}>Inventory & Suppliers</h1>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-full transition-all hover:opacity-80"
              style={{
                backgroundColor: isDarkMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(0, 188, 212, 0.1)',
                color: accentColor
              }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: accentColor, color: '#FFFFFF', fontWeight: 500 }}
            >
              + New Purchase Order
            </button>
          </div>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1: Active Suppliers */}
          <div className="rounded-2xl p-6 transition-colors duration-300" style={{ backgroundColor: bgCard, boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)', border: isDarkMode ? 'none' : '1px solid #E2E8F0' }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: isDarkMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(0, 188, 212, 0.1)' }}>
                <Truck className="w-6 h-6" style={{ color: accentColor }} />
              </div>
              <div>
                <p style={{ color: textSecondary }}>Active Suppliers</p>
                <p style={{ color: textPrimary, fontWeight: 700 }}>32</p>
              </div>
            </div>
          </div>

          {/* Card 2: Stock In */}
          <div className="rounded-2xl p-6 transition-colors duration-300" style={{ backgroundColor: bgCard, boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)', border: isDarkMode ? 'none' : '1px solid #E2E8F0' }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: isDarkMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(16, 185, 129, 0.1)' }}>
                <ArrowDown className="w-6 h-6" style={{ color: successColor }} />
              </div>
              <div>
                <p style={{ color: textSecondary }}>Stock In (Today)</p>
                <p style={{ color: textPrimary, fontWeight: 700 }}>450 Items</p>
              </div>
            </div>
          </div>

          {/* Card 3: Stock Out */}
          <div className="rounded-2xl p-6 transition-colors duration-300" style={{ backgroundColor: bgCard, boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)', border: isDarkMode ? 'none' : '1px solid #E2E8F0' }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: isDarkMode ? 'rgba(189, 195, 199, 0.15)' : 'rgba(100, 116, 139, 0.1)' }}>
                <ArrowUp className="w-6 h-6" style={{ color: textSecondary }} />
              </div>
              <div>
                <p style={{ color: textSecondary }}>Stock Out (Today)</p>
                <p style={{ color: textPrimary, fontWeight: 700 }}>120 Items</p>
              </div>
            </div>
          </div>

          {/* Card 4: Expiry Alerts */}
          <div className="rounded-2xl p-6 transition-colors duration-300" style={{ backgroundColor: bgCard, boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)', border: isDarkMode ? 'none' : '1px solid #E2E8F0' }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: isDarkMode ? 'rgba(255, 77, 77, 0.15)' : 'rgba(239, 68, 68, 0.1)' }}>
                <AlertTriangle className="w-6 h-6" style={{ color: alertColor }} />
              </div>
              <div>
                <p style={{ color: textSecondary }}>Expired/Expiring Soon</p>
                <p style={{ color: alertColor, fontWeight: 700 }}>14 Items</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory & Expiry Tracking Section */}
        <div className="mb-8">
          <InventoryTable isDarkMode={isDarkMode} accentColor={accentColor} alertColor={alertColor} successColor={successColor} />
        </div>

        {/* Suppliers Directory Section */}
        <div>
          <SupplierGrid isDarkMode={isDarkMode} accentColor={accentColor} />
        </div>
      </div>
    </div>
  );
}