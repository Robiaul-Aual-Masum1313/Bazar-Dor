import { IProductType } from "@/dataTypes/allDataType";
import ProductCard from "./ProductCard";
import { MdArrowDropDown } from "react-icons/md";

export interface PriceUpProductsProps {
  filteredPriceDownData: IProductType[];
}

const PriceDownProducts = ({ filteredPriceDownData }: PriceUpProductsProps) => {

  return (
    <div className="bg-[#F0F5F0] pt-12">
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl font-bold"><MdArrowDropDown  />আজ দাম কমেছে</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
          {filteredPriceDownData.map((item) => (
            <ProductCard key={item.id} singleProduct={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceDownProducts;
