const StatsBox = ({ label, value }) => {
  return (
    <div className="flex-1 bg-[#2A3554] p-4 rounded-2xl min-w-[140px] transition-all duration-300 hover:bg-[#2563EB]/20">
      <div className="text-sm text-gray-400 mb-1">{label}</div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
};

export default StatsBox;
