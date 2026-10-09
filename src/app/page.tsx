import { IProductType } from "@/dataTypes/allDataType";
import Banner from "./components/home/Banner";
import PriceUpProducts from "./components/home/PriceUpProducts";
import PriceDownProducts from "./components/home/PriceDownProducts";
import AllProducts from "./components/home/AllProducts";


export default async function Home() {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products')
  const data : IProductType[] = await res.json()
  const filteredPriceUpData = data.filter(item => item.change.dir === 'up').sort((a,b) => b.change.pct - a.change.pct).slice(0,6)
  const filteredPriceDownData = data.filter(item => item.change.dir === 'down').sort((a,b) => a.change.pct - b.change.pct).slice(0,6)

  
  return (
    <>
    <Banner />
    <PriceUpProducts filteredPriceUpData = {filteredPriceUpData}/>
    <PriceDownProducts filteredPriceDownData = {filteredPriceDownData}/>
    <AllProducts allProducts = {data}  />
    </>
  );
}
