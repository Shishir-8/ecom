import Pagination from "@/components/common/Pagination";
import CategoryFilter from "@/app/products/components/CategoryFilter";
import ProductGrid from "@/app/products/components/ProductGrid";


export  default async function ProductsPage() {


  return (
    <section className="container mx-auto py-6">
   
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar */}
        <CategoryFilter />

        {/* Products */}
        <ProductGrid />
      
      </div>
     
    </section>
  );
}