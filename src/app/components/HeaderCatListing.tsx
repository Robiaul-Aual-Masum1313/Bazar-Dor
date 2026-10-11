

"use client";

import { useState } from "react";
import { ICategoryType } from "@/dataTypes/allDataType";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export interface HeaderCatListingProps {
  catData: ICategoryType[];
}

const HeaderCatListing = ({ catData }: HeaderCatListingProps) => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative py-5">
      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-md border p-2 md:hidden"
        aria-label={isOpen ? "Close category menu" : "Open category menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        <span>ক্যাটাগরি</span>
      </button>

      {/* Desktop category navigation */}
      <div className="hidden items-center gap-7 md:flex">
        {catData.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            aria-current={
              path === `/category/${category.slug}` ? "page" : undefined
            }
            className={`rounded-md p-1.5 ${
              path === `/category/${category.slug}`
                ? "border border-red-400 shadow-sm"
                : ""
            }`}
          >
            <p>
              {category.icon} {category.nameBn}
            </p>
          </Link>
        ))}
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 flex flex-col gap-2 rounded-md border border-gray-200 bg-white p-3 shadow-lg md:hidden">
          {catData.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              onClick={() => setIsOpen(false)}
              aria-current={
                path === `/category/${category.slug}` ? "page" : undefined
              }
              className={`rounded-md p-2 ${
                path === `/category/${category.slug}`
                  ? "border border-red-400 shadow-sm"
                  : "hover:bg-gray-100"
              }`}
            >
              {category.icon} {category.nameBn}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default HeaderCatListing;

// "use client";
// import { ICategoryType } from "@/dataTypes/allDataType";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export interface HeaderCatListingProps {
//   catData: ICategoryType[];
// }

// const HeaderCatListing = ({ catData }: HeaderCatListingProps) => {
//   const path = usePathname();
//   console.log(path);

//   return (
//     <div className="flex gap-7 py-5 items-center">
//       {catData.map((category) => (
//         <Link
//           className={`${path === `/category/${category.slug}` ? "p-1.5 border border-red-400 shadow-sm rounded-md" : ""}`}
//           key={category.id}
//           href={`/category/${category.id}`}
//         >
//           <p>
//             {category.icon} {category.nameBn}
//           </p>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default HeaderCatListing;
