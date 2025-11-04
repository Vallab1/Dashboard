import React, { useState } from "react";
import StatsBox from "./StatsBox";
import PerformanceChart from "./PerformanceChart";

const CompanyComparisonCard = () => {
  const [mode, setMode] = useState<"sector" | "company">("sector");

  const stats =
    mode === "sector"
      ? [
          { label: "Toplam Fon Sayısı", value: "75" },
          { label: "Toplam Yönetilen Varlık", value: "75.7B TL" },
          { label: "Ortalama Yönetim Ücreti", value: "2.03%" },
          { label: "Ortalama Yıllık Getiri", value: "23.61%" },
        ]
      : [
          { label: "Toplam Fon Sayısı", value: "95" },
          { label: "Toplam Yönetilen Varlık", value: "110.4B TL" },
          { label: "Ortalama Yönetim Ücreti", value: "1.78%" },
          { label: "Ortalama Yıllık Getiri", value: "27.45%" },
        ];

  const tableRows = Array.from({ length: 7 }).map(() => ({
    name: "YAPI KREDİ PORTFÖY YÖNETİM A.Ş.",
    size: "23.33",
    ret: "23.24",
    averageFee: "33.44",
    totalSize: "55",
    vol: "21.34",
  }));

  const chartItems =
    mode === "sector"
      ? [
          { label: "Teknoloji Fonu", value: 14.6 },
          { label: "Global Hisse Senedi", value: 10.4 },
          { label: "Varlık Yönetimi Fonu", value: 12.6 },
          { label: "Sürdürülebilir Fon", value: 23.4 },
          { label: "Büyüme Fon", value: 16.4 },
        ]
      : [
          { label: "Karma Fon", value: 19.3 },
          { label: "Büyüme Fon", value: 22.5 },
          { label: "Değer Fon", value: 25.1 },
          { label: "Temettü Fon", value: 20.8 },
          { label: "Yabancı Fon", value: 17.2 },
        ];

  return (
    <div className="min-h-screen w-full bg-[#0B1221] text-white flex p-6 md:p-10 lg:p-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 via-[#60A5FA]/10 to-transparent blur-3xl opacity-80"></div>

      <div className="relative w-full max-w-[1150px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Şirket İçi Karşılaştırma
          </h2>

          {/* Toggle Buttons */}
          <div className="flex flex-wrap gap-3 pb-8 mt-4">
            <button
              onClick={() => setMode("sector")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === "sector"
                  ? "bg-[#2563EB] text-white scale-105"
                  : "bg-[#1E2B48] text-gray-300 hover:bg-[#2563EB]/70 hover:text-white"
              }`}
            >
              Sektör ile Karşılaştırma
            </button>

            <button
              onClick={() => setMode("company")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                mode === "company"
                  ? "bg-[#2563EB] text-white scale-105"
                  : "bg-[#1E2B48] text-gray-300 hover:bg-[#2563EB]/70 hover:text-white"
              }`}
            >
              Şirketin Fonları Kendi İçinde Karşılaştırma
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-[#1E2B48] rounded-xl px-6 py-4 mt-4 shadow-sm">
          <p className="text-base md:text-lg font-medium">
            Bu bölümde şirketin performansı{" "}
            {mode === "sector" ? "sektör" : "kendi fonları"} ile
            karşılaştırılmaktadır.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-[#1E2B48] rounded-xl px-6 py-4 mt-4 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
            <p className="text-lg md:text-xl font-semibold mb-3">
              Analiz Şirket
            </p>
            <p className="text-sm text-gray-400 mb-3">
              {mode === "sector" ? "Sektörle Karşılaştırma" : "İç Karşılaştırma"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <StatsBox key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1E2B48] rounded-xl px-6 py-4 mt-4 shadow-sm">
          <div className="text-sm font-medium mb-3">
            Şirket Bazlı Karşılaştırma
          </div>
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs text-gray-400 border-b border-gray-600">
                <th className="py-3 px-2">Kurucu</th>
                <th className="py-3 px-2">Fon Sayısı</th>
                <th className="py-3 px-2">Toplam Büyüklük(TL)</th>
                <th className="py-3 px-2">Ortalama Getiri(%)</th>
                <th className="py-3 px-2">Ortalama Ücreti(%)</th>
                <th className="py-3 px-2">Ortalama Volatilite(%)</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((r, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-700 hover:bg-[#2563EB]/10"
                >
                  <td className="py-3 px-2">{r.name}</td>
                  <td className="py-3 px-2">{r.size}</td>
                  <td className="py-3 px-2">{r.totalSize}</td>
                  <td className="py-3 px-2">{r.ret}%</td>
                  <td className="py-3 px-2">{r.averageFee}%</td>
                  <td className="py-3 px-2">{r.vol}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <PerformanceChart items={chartItems} />
      </div>
    </div>
  );
};

export default CompanyComparisonCard;
