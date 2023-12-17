import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import CategoryList from "@/components/gategory-list";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  const billboard = await getBillboard("fe0df041-dc63-4a71-b534-8c382afd1276");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <CategoryList title="Notre Categories" items={categories} />
          <ProductList title="Produits populaires" items={products} />
        </div>
      </div>
    </Container>
  )
};

export default HomePage;
