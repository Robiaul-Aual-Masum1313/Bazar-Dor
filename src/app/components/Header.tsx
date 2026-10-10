import { ICategoryType } from "@/dataTypes/allDataType"
import Image from "next/image"
import Link from "next/link"
import SignInSignOutBtn from "./SignInSignOutBtn"


export default async function Header() {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data : ICategoryType[] = await res.json()
    const todayDate = new Date().toLocaleDateString('bn-BD',{
      dateStyle: 'full'
    })
    // console.log(data);
    
  return (
    <div className="bg-[#FAFCFA]">
        <div className="container mx-auto">
            <div className="flex justify-between py-3">
              <div  className="flex items-center gap-3">
                <div>
                  <Image src={'/Logo.png'} alt="Bazar Dor" width={50} height={50} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">বাজার দর</h2>
                  <p className="text-[12px] font-medium">{todayDate}</p>
                </div>
              </div>
              <div>
                <SignInSignOutBtn />
              </div>
            </div>
            <div className="flex gap-7 py-5">
                {
                  data.map(category => <Link key={category.id} href={`/category/${category.id}`}><p>{category.icon} {category.nameBn}</p></Link>)
                }
            </div>
        </div>
    </div>
  )
}
