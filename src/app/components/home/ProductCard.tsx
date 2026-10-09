import { IProductType } from "@/dataTypes/allDataType";
import Link from "next/link";
import { GoDash } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

export interface ProductCardProps {
  singleProduct: IProductType;
}
export const unitString = (singleProduct: IProductType) => {
  if (singleProduct.unit === "kg") {
    return "প্রতি কেজি";
  } else if (singleProduct.unit === "litre") {
    return "প্রতি লিটার";
  } else if (singleProduct.unit === "dozen") {
    return "প্রতি ডজন";
  } else {
    return "প্রতি পিস";
  }
};

export const arrowSign = (singleProduct: IProductType) => {
  if (singleProduct.change.dir === "up") {
    return <IoMdArrowDropup className="text-[20px] text-[#D03739]" />;
  } else if (singleProduct.change.dir === "down") {
    return <MdArrowDropDown className="text-[20px] text-[#1A9951]" />;
  } else {
    return <GoDash className="text-[20px]" />;
  }
};
const ProductCard = ({ singleProduct }: ProductCardProps) => {
  return (
    <Link href={`/singleProduct/${singleProduct.id}`}>
      <div className=" bg-[#FAFCFA] grid grid-cols-2 px-3.5 py-5 rounded-2xl">
        <div className="">
          <div className="flex justify-start gap-2.5">
            <div className="bg-[#F0F5F0] p-3 rounded-lg">
              {singleProduct.image}
            </div>
            <div>
              <h3 className="text-[16px]">{singleProduct.nameBn}</h3>
              <h6 className="text-[12px]">{unitString(singleProduct)}</h6>
            </div>
          </div>
          <div className="pt-2.5">
            <h6 className="text-[12px] font-medium">আজকের দাম</h6>
            <p className="text-[14px] font-medium">
              <span className="text-2xl font-bold">{singleProduct.today}</span>{" "}
              টাকা
            </p>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <button className="flex p-1.5 bg-[#F0F5F0] font-semibold text-[12px] rounded-2xl">
            {arrowSign(singleProduct)}
            {singleProduct.change.pct}%
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
