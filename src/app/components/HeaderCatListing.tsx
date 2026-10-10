"use client";
import { ICategoryType } from "@/dataTypes/allDataType";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderCatListingProps {
  catData: ICategoryType[];
}

const HeaderCatListing = ({ catData }: HeaderCatListingProps) => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex gap-7 py-5 items-center">
      {catData.map((category) => (
        <Link
          className={`${path === `/category/${category.slug}` ? "p-1.5 border border-red-400 shadow-sm rounded-md" : ""}`}
          key={category.id}
          href={`/category/${category.id}`}
        >
          <p>
            {category.icon} {category.nameBn}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default HeaderCatListing;
