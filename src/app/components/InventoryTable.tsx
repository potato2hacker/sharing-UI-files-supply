interface InventoryTableProps {
  isDarkMode: boolean;
  accentColor: string;
  alertColor: string;
  successColor: string;
}

export function InventoryTable({ isDarkMode, accentColor, alertColor, successColor }: InventoryTableProps) {
  const inventoryData = [
    {
      id: 1,
      itemName: 'Premium Linens',
      category: 'Housekeeping',
      supplier: 'LuxLinen Co.',
      movement: 'IN',
      expiryStatus: 'valid',
      expiryDate: '2027-05-15'
    },
    {
      id: 2,
      itemName: 'Minibar Snacks',
      category: 'F&B',
      supplier: 'DairyFresh Supplies',
      movement: 'IN',
      expiryStatus: 'expired',
      expiryDate: '2026-03-28'
    },
    {
      id: 3,
      itemName: 'Coffee Beans',
      category: 'F&B',
      supplier: 'MountainBrews Ltd',
      movement: 'OUT',
      expiryStatus: 'valid',
      expiryDate: '2027-12-01'
    },
    {
      id: 4,
      itemName: 'Cleaning Supplies',
      category: 'Housekeeping',
      supplier: 'CleanPro Industries',
      movement: 'IN',
      expiryStatus: 'valid',
      expiryDate: '2028-01-20'
    },
    {
      id: 5,
      itemName: 'Fresh Vegetables',
      category: 'F&B',
      supplier: 'GreenFarm Produce',
      movement: 'OUT',
      expiryStatus: 'expiring',
      expiryDate: '2026-04-10'
    },
    {
      id: 6,
      itemName: 'Bottled Water',
      category: 'F&B',
      supplier: 'AquaPure Corp',
      movement: 'IN',
      expiryStatus: 'valid',
      expiryDate: '2027-08-30'
    },
    {
      id: 7,
      itemName: 'Bath Amenities',
      category: 'Housekeeping',
      supplier: 'PureEssence Ltd',
      movement: 'OUT',
      expiryStatus: 'expiring',
      expiryDate: '2026-04-15'
    },
    {
      id: 8,
      itemName: 'Bread & Pastries',
      category: 'F&B',
      supplier: 'BakeryDelight Co.',
      movement: 'IN',
      expiryStatus: 'expired',
      expiryDate: '2026-04-05'
    }
  ];

  const getExpiryBadge = (status: string) => {
    switch (status) {
      case 'valid':
        return (
          <span
            className="px-4 py-1 rounded-full inline-block transition-colors duration-300"
            style={{
              backgroundColor: isDarkMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(16, 185, 129, 0.1)',
              color: successColor,
              fontWeight: 500
            }}
          >
            Valid
          </span>
        );
      case 'expiring':
        return (
          <span
            className="px-4 py-1 rounded-full inline-block transition-colors duration-300"
            style={{
              backgroundColor: 'rgba(255, 193, 7, 0.15)',
              color: '#FFC107',
              fontWeight: 500
            }}
          >
            Expiring Soon
          </span>
        );
      case 'expired':
        return (
          <span
            className="px-4 py-1 rounded-full inline-block transition-colors duration-300"
            style={{
              backgroundColor: isDarkMode ? 'rgba(255, 77, 77, 0.15)' : 'rgba(239, 68, 68, 0.1)',
              color: alertColor,
              fontWeight: 500
            }}
          >
            Expired
          </span>
        );
      default:
        return null;
    }
  };

  const bgCard = isDarkMode ? '#151A23' : '#FFFFFF';
  const textPrimary = isDarkMode ? '#FFFFFF' : '#1E293B';
  const textSecondary = isDarkMode ? '#BDC3C7' : '#64748B';
  const borderColor = isDarkMode ? 'rgba(189, 195, 199, 0.1)' : 'rgba(226, 232, 240, 1)';

  return (
    <div className="rounded-2xl p-6 transition-all duration-300" style={{ backgroundColor: bgCard, boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)', border: isDarkMode ? 'none' : '1px solid #E2E8F0' }}>
      <h2 className="mb-6 transition-colors duration-300" style={{ color: textPrimary, fontWeight: 700 }}>Recent Stock Movement & Expiry</h2>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 pb-4 mb-4 transition-colors duration-300" style={{ borderBottom: `1px solid ${borderColor}` }}>
            <div className="transition-colors duration-300" style={{ color: textSecondary, fontWeight: 500 }}>Item Name</div>
            <div className="transition-colors duration-300" style={{ color: textSecondary, fontWeight: 500 }}>Category</div>
            <div className="transition-colors duration-300" style={{ color: textSecondary, fontWeight: 500 }}>Supplier</div>
            <div className="transition-colors duration-300" style={{ color: textSecondary, fontWeight: 500 }}>Movement</div>
            <div className="transition-colors duration-300" style={{ color: textSecondary, fontWeight: 500 }}>Status</div>
            <div className="transition-colors duration-300" style={{ color: textSecondary, fontWeight: 500 }}>Action</div>
          </div>

          {/* Table Rows */}
          {inventoryData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 gap-4 py-4 transition-all duration-300"
              style={{ borderBottom: `1px solid ${borderColor}` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(0, 229, 255, 0.05)' : 'rgba(0, 188, 212, 0.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div className="transition-colors duration-300" style={{ color: textPrimary, fontWeight: 500 }}>{item.itemName}</div>
              <div>
                <span
                  className="px-3 py-1 rounded-full inline-block transition-colors duration-300"
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(189, 195, 199, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                    color: textSecondary,
                    fontWeight: 400
                  }}
                >
                  {item.category}
                </span>
              </div>
              <div className="transition-colors duration-300" style={{ color: textSecondary }}>{item.supplier}</div>
              <div>
                <span
                  className="px-4 py-1 rounded-full inline-block transition-colors duration-300"
                  style={{
                    backgroundColor: item.movement === 'IN'
                      ? (isDarkMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(0, 188, 212, 0.1)')
                      : (isDarkMode ? 'rgba(189, 195, 199, 0.15)' : 'rgba(100, 116, 139, 0.1)'),
                    color: item.movement === 'IN' ? accentColor : textSecondary,
                    fontWeight: 500
                  }}
                >
                  {item.movement}
                </span>
              </div>
              <div>{getExpiryBadge(item.expiryStatus)}</div>
              <div>
                <button
                  className="hover:opacity-80 transition-all duration-300"
                  style={{ color: accentColor, fontWeight: 500 }}
                >
                  Reorder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
