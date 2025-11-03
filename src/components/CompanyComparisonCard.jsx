import React from 'react'
import StatsBox from './StatsBox';
import PerformanceChart from './PerformanceChart';
const CompanyComparisonCard = () => {

    const stats = [
        { label: 'Toplam Fon Sayısı', value: '75' },
        { label: 'Toplam Yönetilen Varlık', value: '75.7B TL' },
        { label: 'Ortalama Yönetim Ücreti', value: '2.03%' },
        { label: 'Ortalama Yıllık Getiri', value: '23.61% ' },
    ];

    const tableRows = Array.from({ length: 7 }).map((_, i) => ({
        name: `YAPI KREDİ PORTFÖY YÖNETİM A.Ş.`,
        totalSize: '34.44',
        averageReturn: '24.45',
        size: '23',
        ret: '23.24',
        vol: '21.34',
    }));

    const chartItems = [
        { label: 'Teknoloji Fonu', value: 14.6 },
        { label: 'Global Hisse Senedi', value: 10.4 },
        { label: 'Varlık Yönetimi Fonu', value: 12.6 },
        { label: 'Sürdürülebilir Fon', value: 23.4 },
        { label: 'Büyüme Fon', value: 16.4 },
    ];
    return (
        <div className='min-h-screen w-full bg-[#0B1221] text-white flex p-6 md:p-10 lg:p-16 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 via-[#60A5FA]/10 to-transparent blur-3xl opacity-80'>
            </div>

            <div className='relative w-full max-w-[1150px]'>
                <div className='md:flex-row md:items-center md:justify-between gap-4' >
                    <h2 className='text-2xl md:text-3xl font-semibold tracking-wide'>
                        Şirket İçi Karşılaştırma
                    </h2>
                    <div className='flex flex-wrap gap-3 pb-8 mt-4'>
                        <button className='px-4 py-2 rounded-full text-sm font-medium bg-[#1E2B48] text-gray-300 pb-3 transition-all duration-300 ease-in-out hover:bg-[#2563EB] hover:text-white hover:shadow-[0_0_15px_#2563EB]/50 hover:scale-105'>
                            Sektör ile Karşılaştırma
                        </button>
                        <button className='px-4 py-2 rounded-full text-sm font-medium bg-[#2563EB] text-white shadow transition-all duration-300 ease-in-out hover:bg-[#1E2B48] hover:text-gray-200 hover:shadow-[0_0_15px_#60A5FA]/50 hover:scale-105'>
                            Şirketin Fonları Kendi İçinde Karşılaştırma
                        </button>
                    </div>

                </div>
                <div className='bg-[#1E2B48] rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 mt-4 text-white shadow-sm transition-all duration-300 ease-in-out w-full  mx-auto text-left'>
                    <p className='text-sm sm:text-base md:text-lg leading-relaxed font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quasi?</p>
                </div>
                <div className='bg-[#1E2B48] rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 mt-4 text-white shadow-sm    transition-all duration-300 ease-in-out w-full  mx-auto text-left'>
                    <p className='text-lg md:text-xl font-semibold mb-3 tracking-wide'>Analiz Edilecek Şirket</p>
                    <div className='bg-[#2A3554] rounded-lg px-4 sm:px-5 py-3 sm:py-4 transition-all duration-300 ease-in-out'>
                        <p className='text-sm text-gray-400 mb-1'>Portföy Yönetim Şirketi</p>
                        <p className='text-base md:text-lg font-medium text-white'>YAPI KREDİ PORTFÖY YÖNETİM A.Ş.</p>
                    </div>
                </div>


                {/* Stats Boxes */}
                <div className='bg-[#1E2B48] rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 mt-4 text-white shadow-sm    transition-all duration-300 ease-in-out w-full  mx-auto text-left'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-4'>
                        <p className='text-lg md:text-xl font-semibold mb-3 tracking-wide'>Analiz Şirket</p>
                        <p className='text-sm text-gray-400 mb-3'>Sektörle Karşılaştırma</p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className='cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg'
                            >
                                <StatsBox label={s.label} value={s.value} />
                            </div>
                        ))}
                    </div>

                </div>

                {/* ...Table... */}
                <div className='bg-[#1E2B48] rounded-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 mt-4 text-white shadow-sm    transition-all duration-300 ease-in-out w-full  mx-auto text-left overflow-x-auto'>
                    <div className='text-lg md:text-xl font-semibold mb-3 tracking-wide'>
                        Şirket Bazlı Karşılaştırma
                    </div>
                    <table className='min-w-full text-left text-sm text-gray-300 border-collapse'>
                        <thead>
                            <tr className='text-sm text-gray-400 border-b border-gray-600 '>
                                <th className='py-3 px-2'>Kutucu</th>
                                <th className='py-3 px-2'>Fon Sayısı</th>
                                <th className='py-3 px-2'>Toplam Büyüklük(TL)</th>
                                <th className='py-3 px-2'>Ortalama Getiri(%)</th>
                                <th className='py-3 px-2'>Ortalama Ücreti(%)</th>
                                <th className='py-3 px-2'>Ortalama Volatilite(%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((r, idx) => (
                                <tr
                                    key={idx}
                                    className={`border-b ${idx % 2 === 0 ? 'border-gray-700' : 'border-gray-600'
                                        } hover:bg-[#2563EB]/10 transition`}
                                >
                                    <td className="py-3 px-2 whitespace-nowrap text-white font-medium">
                                        {r.name}
                                    </td>
                                    <td className='py-3 px-2'>{r.size}</td>
                                    <td className='py-3 px2'>{r.totalSize}</td>
                                    <td className='py-3 px-2'>{r.averageReturn}</td>
                                    <td className='py-3 px-2'>{r.ret}%</td>
                                    <td className='py-3 px-2'>{r.vol}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <PerformanceChart items={chartItems} />
            </div>

        </div>


    )
}

export default CompanyComparisonCard