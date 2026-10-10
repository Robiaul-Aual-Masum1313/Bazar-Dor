import CatProductListing from "@/app/components/category/CatProductListing";
import { ICategoryType, IProductType } from "@/dataTypes/allDataType";

interface categoryPageProps {
  params: {
    catId: string;
  };
}

export default async function CategoryPage({ params }: categoryPageProps) {
  const { catId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${catId}`,
  );
  const data: ICategoryType = await res.json();
  const res2 = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${catId}`,
  );
  const data2: IProductType[] = await res2.json();
  //   console.log(data2);


  return (
    <div className="bg-[#F0F5F0] pt-7 pb-10">
      <div className="container mx-auto space-y-4">
        <div className=" bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
          <div className="flex gap-1.5 items-center">
            <div className="text-4xl">{data.icon}</div>
            <div>
              <h4 className="text-[24px] font-bold text-[#1D271F]">
                {data.nameBn}
              </h4>
              <p className="text-[#1D271F] text-[14px] font-medium">{`${data2.length}টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
            </div>
          </div>
        </div>
          <CatProductListing sameCatProduct = {data2}/>
      </div>
    </div>
  );
}
