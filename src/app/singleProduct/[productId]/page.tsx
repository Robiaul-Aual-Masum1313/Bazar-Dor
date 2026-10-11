import { arrowSign, unitString } from "@/app/components/home/ProductCard";
import { IProductType } from "@/dataTypes/allDataType";
import Link from "next/link";
import { notFound } from "next/navigation";

export interface SingleProductPageProps {
  params: {
    productId: string;
  };
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {
  const { productId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );
  const data: IProductType = await res.json();
    console.log(data);
  if(data.error){
    notFound()
  }
  const lowesrPrice = {...data}.markets?.sort((a,b) => a.min - b.min)
  const lowestValue = lowesrPrice[0].min
  const highestPrice = {...data}.markets?.sort((a,b) => b.max - a.max)
  const heightValue = highestPrice[0].max
  const averagePrice = (lowestValue + heightValue) / 2
  console.log(data);

  return (
    <div className="bg-[#F0F5F0] pt-7 pb-10">
      <div className="container mx-auto space-y-4">
        <div>
          <Link href={"/"}>হোম</Link> {">"}{" "}
          <Link href={`/category/${data.category}`}>{data.categoryNameBn}</Link>{" "}
          {">"} <span>{data.nameBn}</span>
        </div>
        <div>
          <div className=" bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl flex justify-between flex-col md:flex-row gap-3">
            <div className="flex gap-1.5 items-center">
              <div className="text-6xl">{data.image}</div>
              <div>
                <h4 className="text-[24px] font-bold text-[#1D271F]">
                  {data.nameBn}
                </h4>
                <p className="text-[#1D271F] text-[14px] font-medium">
                  {unitString(data)} {data.categoryNameBn}
                </p>
                <p>{`গতকালের তুলনায় আজ দাম ${data.today > data.yesterday ? "বেড়েছে" : "কমেছে"}  ${data.today - data.yesterday} টাকা`}</p>
              </div>
            </div>
            <div className="bg-[#F0F5F0] p-8 rounded-2xl text-center">
              <p>আজকের দাম</p>
              <h3 className="text-4xl">{data.today}</h3>
              <p>টাকা / {unitString(data)}</p>
              <p className="flex justify-center">
                {arrowSign(data)} {data.change.pct}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
          <div>
            <h4 className="text-3xl font-semibold py-2.5">দামের সারসংক্ষেপ</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
                <p>সর্বনিম্ন দাম</p>
                <h2><span className="text-3xl text-red-700">{lowestValue}</span> টাকা</h2>
                <p>সবচেয়ে কম দামের বাজার</p>
              </div>
              <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
                <p>সর্বাধিক দাম</p>
                <h2><span className="text-3xl text-red-700">{heightValue}</span> টাকা</h2>
                <p>সবচেয়ে বেশি দামের বাজার</p>
              </div>
              <div className="bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
                <p>গড় দাম</p>
                <h2><span className="text-3xl text-red-700">{averagePrice}</span> টাকা</h2>
                <p>{unitString(data)}-এর হিসাবে</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-[20px] font-semibold py-1.5">বাজারভিত্তিক আজকের দাম</h4>
            <div  className="bg-[#FAFCFA] py-3 border border-[#E1E8E1] rounded-2xl">
              <div className="grid grid-cols-5 border-b border-[#eee]">
                <p className="p-3.5 font-bold">বাজার</p>
                <p className="text-center p-3.5  font-bold">বিভাগ</p>
                <p className="text-center p-3.5  font-bold">সর্বনিম্ন</p>
                <p className="text-center p-3.5  font-bold">সর্বাধিক</p>
                <p className="text-right p-3.5  font-bold">গড়</p>
              </div>

              {data.markets.map((item,index) => {
                return (
                  <div key={index} className={`grid grid-cols-5 border-b border-black ${index % 2 !== 0 ? 'bg-[#F0F5F0]' : ''}`}>
                    <p className="p-3.5">{item.market}</p>
                    <p className="text-center p-3.5">{item.division}</p>
                    <p className="text-center p-3.5">{item.min}</p>
                    <p className="text-center p-3.5">{item.max}</p>
                    <p className="text-right p-3.5">{(item.max + item.min) / 2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SingleProductPage;
