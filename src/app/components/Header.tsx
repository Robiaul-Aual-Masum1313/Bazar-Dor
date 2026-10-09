import { ICategoryType } from "@/dataTypes/allDataType"
import Link from "next/link"


export default async function Header() {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories')
    const data : ICategoryType[] = await res.json()
    // console.log(data);
    
  return (
    <div className="bg-[#FAFCFA]">
        <div className="container mx-auto">
            <div></div>
            <div className="flex gap-7">
                {
                  data.map(category => <Link key={category.id} href={`/category/${category.id}`}><p>{category.icon} {category.nameBn}</p></Link>)
                }
            </div>
        </div>
    </div>
  )
}
