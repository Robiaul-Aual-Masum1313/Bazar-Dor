'use client'
import { IProductType } from "@/dataTypes/allDataType";
import ProductCard from "../home/ProductCard";
import { useEffect, useState } from "react";

export interface CatProductListingProps {
    sameCatProduct: IProductType[]
}

const CatProductListing = ({ sameCatProduct }: CatProductListingProps) => {
      const [sortType , setSortType] = useState<'default' | 'lowTohigh' | 'highTolow'>('default')
      const [sortedData, setSortedData] = useState(sameCatProduct)

      useEffect(() => {
        if(sortType === 'highTolow'){
           const   copyData = [...sameCatProduct]
           copyData.sort((a,b) => b.today - a.today)
           setSortedData(copyData)
        }
        if(sortType === 'lowTohigh'){
           const   copyData = [...sameCatProduct]
           copyData.sort((a,b) => a.today - b.today)
           setSortedData(copyData)
        }
      },[sortType])
      console.log(sortType);
      
    
    return (
        <>
                <div className=" bg-[#FAFCFA] px-5 py-7 border border-[#E1E8E1] rounded-2xl">
          <div className="flex flex-col md:flex-row gap-1.5 items-center justify-end">
            সাজান :
            <select 
            value={sortType}
            onChange={(e) => setSortType(e.target.value as 'default' | 'lowTohigh' | 'highTolow')}
             className="select select-primary">
              <option value={'default'}>ডিফল্ট</option>
              <option value={'lowTohigh'}>কম থেকে বেশি</option>
              <option value={'highTolow'}>বেশি থেকে কম</option>
            </select>
          </div>
        </div>
        <div>
            <p>মোট {sameCatProduct.length}টি পণ্য দেখানো হচ্ছে</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
            {sortedData.map((item) => (
              <ProductCard key={item.id} singleProduct={item} />
            ))}
          </div>
        </div>
        </>
    )
}

export default CatProductListing;