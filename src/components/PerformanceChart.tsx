import { useState } from "react";

type ChartItem = {
  label: string;
  value: number;
};

const PerformanceChart = ({ items }: { items: ChartItem[] }) => {
  const [active, setActive] = useState("6 ay");
  const tabs = ["1 hafta", "1 ay", "6 ay", "2025", "1 Yıl", "5 Yıl"];
  const max = Math.max(...items.map(i => i.value)) || 1;

  return (
    <div className="bg-[#1E2B48] rounded-2xl p-6 mt-6 text-white w-full">
      <h3 className="text-lg font-medium mb-5">
        Şirket İçi Performans Grafiği - En İyi 5 Fon
      </h3>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              active === tab
                ? "bg-[#2563EB] text-white"
                : "bg-[#2A3554] text-gray-400 hover:bg-[#2563EB]/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bars */}
      {items.map((item, i) => {
        const width = (item.value / max) * 100;
        return (
          <div key={i} className="flex items-center gap-4 mb-4">
            <span className="w-1/6 text-sm text-gray-300">{item.label}</span>
            <div className="relative w-2/3">
              <div className="bg-[#2A3554] rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-[#0ea5e9] to-[#2563EB] h-full rounded-full transition-all"
                  style={{ width: `${width}%` }}
                />
              </div>
              <span
                className="absolute -top-5 text-xs text-gray-300"
                style={{ right: `${100 - width}%` }}
              >
                {item.value.toFixed(2)}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PerformanceChart;
