export interface IProductType {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: "kg" | "litre" | "dozen" | "piece";
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: IchangeType;
  markets: IMarketType[];
}

interface IchangeType {
  dir: "up" | "down" | "flat";
  pct: number;
}

interface IMarketType {
  market: string;
  division: string;
  min: number;
  max: number;
}
export interface ICategoryType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
