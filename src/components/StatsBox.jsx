const StatsBox = ({ label, value }) => {
  return (
    <div className='flex-1 bg-[rgba(255,255,255,0.03)] p-4 rounded-2xl min-w-[140px] card-shadow'>
      <div className='text-sm text-gray-400 mb-1'>{label}</div>
      <div className='mt-2 text-lg font-semibold text-white'>{value}</div>
    </div>
  );
};

export default StatsBox;