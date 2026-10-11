import { ICategoryType } from "@/dataTypes/allDataType"
import Image from "next/image"
import Link from "next/link"
import SignInSignOutBtn from "./SignInSignOutBtn"
import HeaderCatListing from "./HeaderCatListing"


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
              <div  className="flex items-center gap-1.5 md:gap-3">
                <div>
                  <Image className="w-9.5 md:w-13" src={'/Logo.png'} alt="Bazar Dor" width={50} height={50} />
                </div>
                <div>
                  <Link href={'/'}>
                  
                  <h2 className="text-2xl md:text-3xl font-bold">বাজার দর</h2>
                  </Link>
                  <p className="text-[10px]  md:text-[12px] font-medium">{todayDate}</p>
                </div>
              </div>
              <div>
                <SignInSignOutBtn />
              </div>
            </div>
            <HeaderCatListing catData = {data} />
        </div>
    </div>
  )
}
