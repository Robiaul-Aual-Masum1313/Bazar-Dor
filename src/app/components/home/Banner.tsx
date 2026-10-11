'use client'
import Image from "next/image";
import BannerImg from "@/assets/bazar-hero.png";


export default function Banner() {
    const date= new Date().toLocaleDateString('bn-BD',{
        dateStyle: 'full'
    })

//     const [date, setDate] = useState('')
//     useEffect(() => {
//           const date= new Date().toLocaleDateString('bn-BD',{
//         dateStyle: 'full'
//     })
//     setDate(date)
// }, [])
  return (
    <div className="bg-[#F0F5F0] pt-8">
      <div className="bg-[#FAFCFA] rounded-2xl container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-5.5">
          <div className="space-y-1.5">
            <button className="bg-[#E1F1E7] p-2.5 rounded-2xl">{date}</button>
            <h2 className="text-3xl md:text-[46px] font-black text-[#1D271F]">আজকের বাজারের দাম এক নজরে</h2>
            <p className="text-[#ABB0AC] tect-[24px] font-medium pt-3.5 pb-5.5">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
            <a href={'#allProducts'}><button className="bg-[#05893E] px-7 py-2.5 text-[#F3FBF4] font-semibold text-[14px] rounded-lg">সব পণ্য দেখুন</button></a>
          </div>
          <div className=" flex justify-end">
            <Image src={BannerImg} alt="" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
}
