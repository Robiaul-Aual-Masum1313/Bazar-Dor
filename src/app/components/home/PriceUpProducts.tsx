import { IProductType } from "@/dataTypes/allDataType";
import ProductCard from "./ProductCard";
import { IoMdArrowDropup } from "react-icons/io";

export interface PriceUpProductsProps {
  filteredPriceUpData: IProductType[];
}

const PriceUpProducts = ({ filteredPriceUpData }: PriceUpProductsProps) => {

  return (
    <div className="bg-[#F0F5F0] pt-12">
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl font-bold"><IoMdArrowDropup />আজ দাম বেড়েছে</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
          {filteredPriceUpData.map((item) => (
            <ProductCard key={item.id} singleProduct={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceUpProducts;
