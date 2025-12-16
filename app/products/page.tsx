import Pagination from "@/components/common/Pagination";
import CategoryFilter from "@/components/product/CategoryFilter";
import ProductGrid from "@/components/product/ProductGrid";


export default function ProductsPage() {
  return (
    <section className="container mx-auto px-6 py-6">
   
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar */}
        <CategoryFilter />

        {/* Products */}
        <ProductGrid />
      
      </div>
     
    </section>
  );
}