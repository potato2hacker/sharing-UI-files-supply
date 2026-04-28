interface SupplierGridProps {
  isDarkMode: boolean;
  accentColor: string;
}

export function SupplierGrid({ isDarkMode, accentColor }: SupplierGridProps) {
  const suppliers = [
    {
      id: 1,
      name: 'LuxLinen Co.',
      category: 'Housekeeping',
      initials: 'LL'
    },
    {
      id: 2,
      name: 'DairyFresh Supplies',
      category: 'Food & Beverage',
      initials: 'DF'
    },
    {
      id: 3,
      name: 'MountainBrews Ltd',
      category: 'Food & Beverage',
      initials: 'MB'
    },
    {
      id: 4,
      name: 'CleanPro Industries',
      category: 'Housekeeping',
      initials: 'CP'
    },
    {
      id: 5,
      name: 'GreenFarm Produce',
      category: 'Food & Beverage',
      initials: 'GF'
    },
    {
      id: 6,
      name: 'AquaPure Corp',
      category: 'Food & Beverage',
      initials: 'AP'
    },
    {
      id: 7,
      name: 'PureEssence Ltd',
      category: 'Housekeeping',
      initials: 'PE'
    },
    {
      id: 8,
      name: 'BakeryDelight Co.',
      category: 'Food & Beverage',
      initials: 'BD'
    },
    {
      id: 9,
      name: 'EliteTextiles Inc',
      category: 'Housekeeping',
      initials: 'ET'
    },
    {
      id: 10,
      name: 'SeafoodPrime',
      category: 'Food & Beverage',
      initials: 'SP'
    },
    {
      id: 11,
      name: 'WineCellar Select',
      category: 'Food & Beverage',
      initials: 'WC'
    },
    {
      id: 12,
      name: 'FreshFlora Co.',
      category: 'Decor',
      initials: 'FF'
    }
  ];

  const bgCard = isDarkMode ? '#151A23' : '#FFFFFF';
  const textPrimary = isDarkMode ? '#FFFFFF' : '#1E293B';
  const textSecondary = isDarkMode ? '#BDC3C7' : '#64748B';

  return (
    <div>
      <h2 className="mb-6 transition-colors duration-300" style={{ color: textPrimary, fontWeight: 700 }}>Key Suppliers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {suppliers.map((supplier) => (
          <div
            key={supplier.id}
            className="rounded-2xl p-6 transition-all duration-300 cursor-pointer group"
            style={{
              backgroundColor: bgCard,
              border: isDarkMode ? '2px solid transparent' : '1px solid #E2E8F0',
              boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accentColor;
              if (!isDarkMode) {
                e.currentTarget.style.borderWidth = '2px';
              }
            }}
            onMouseLeave={(e) => {
              if (isDarkMode) {
                e.currentTarget.style.borderColor = 'transparent';
              } else {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.borderWidth = '1px';
              }
            }}
          >
            <div className="flex flex-col items-center text-center gap-3">
              {/* Initials Circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(0, 229, 255, 0.15)' : 'rgba(0, 188, 212, 0.1)',
                  color: accentColor,
                  fontWeight: 700
                }}
              >
                {supplier.initials}
              </div>

              {/* Supplier Name */}
              <h3 className="transition-colors duration-300" style={{ color: textPrimary, fontWeight: 700 }}>
                {supplier.name}
              </h3>

              {/* Category */}
              <span
                className="px-3 py-1 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: isDarkMode ? 'rgba(189, 195, 199, 0.1)' : 'rgba(100, 116, 139, 0.1)',
                  color: textSecondary,
                  fontWeight: 400
                }}
              >
                {supplier.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
