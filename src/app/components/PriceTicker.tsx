import { IProductType } from "@/dataTypes/allDataType"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { arrowSign, unitString } from "./home/ProductCard"
import Link from "next/link"


export default async function PriceTicker() {
      const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
      const data : IProductType[] = await res.json()
  return (
    <div className="py-2 border-t border-b border-[#eee] font-medium text-[14px]">
        <MarqueeText direction = 'right' duration = {15}>
            {
                data.map(item => {
                    return (
                        <Link href={`/singleProduct/${item.id}`}  key={item.id}><p className="flex px-4">{item.image} {item.nameBn} {item.today} টাকা/{unitString(item)} {arrowSign(item)}{item.change.pct}%</p></Link>
                    )
                })
            }
        </MarqueeText>
    </div>
  )
}
