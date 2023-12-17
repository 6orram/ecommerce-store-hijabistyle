import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  name?: string;
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  seasonId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      name: query.name,
      colorId: query.colorId,
      sizeId: query.sizeId,
      seasonId: query.seasonId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
