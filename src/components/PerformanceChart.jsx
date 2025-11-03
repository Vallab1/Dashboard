import React, { useState } from "react";

const PerformanceChart = ({ items }) => {
  const [active, setActive] = useState("6 ay");

  const tabs = ["1 hafta", "1 ay", "6 ay", "2025", "1 Yıl", "5 Yıl"];
  const max = Math.max(...items.map((i) => i.value)) || 1;

  return (
    <div className="bg-[#1E2B48] rounded-2xl px-6 py-5 mt-6 text-white shadow-sm transition-all duration-300 ease-in-out w-full mx-auto text-left overflow-x-auto">
      <div className="text-base sm:text-lg font-medium mb-5">
        Şirket İçi Performans Grafiği - En İyi 5 Fon
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              active === tab
                ? "bg-[#2563EB] text-white"
                : "bg-[#2A3554] text-gray-400 hover:bg-[#2563EB]/30 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bars */}
      <div className="space-y-4">
        {items.map((item, idx) => {
          const widthPct = (item.value / max) * 100;
          return (
            <div key={idx} className="flex items-center w-full gap-4 mb-4">
              <span className="text-gray-300 text-sm w-1/6">{item.label}</span>
              <div className="relative w-2/3">
                <div className="w-full bg-[#2A3554] rounded-full h-3 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563EB] transition-all duration-700 ease-out"
                    style={{ width: `${widthPct}%` }}
                  ></div>
                </div>
                <span
                  className="absolute top-[-18px] right-0 text-xs text-gray-300"
                  style={{ right: `${100 - widthPct}%` }}
                >
                  {item.value.toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformanceChart;
