import ProductCard from "@/components/ui/product-card";
import { Category, Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import CategoryCard from "./ui/category-card";

interface CategoryListProps {
  title: string;
  items: Category[]
}

const CategoryList: React.FC<CategoryListProps> = ({
  title,
  items
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <CategoryCard key={item.id} data={item}/>
        ))}
      </div>
    </div>
   );
}
 
export default CategoryList;
