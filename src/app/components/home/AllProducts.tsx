import { IProductType } from "@/dataTypes/allDataType";
import ProductCard from "./ProductCard";

export interface PriceUpProductsProps {
  allProducts: IProductType[];
}

const AllProducts = ({ allProducts }: PriceUpProductsProps) => {

  return (
    <div id="allProducts" className="bg-[#F0F5F0] pt-12">
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl font-bold">সব পণ্য</h2>
        <p>মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-6">
          {allProducts.map((item) => (
            <ProductCard key={item.id} singleProduct={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
