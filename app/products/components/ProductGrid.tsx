import ProductCard from "./ProductCard"

export default async function ProductGrid() {

  const response = await fetch("https://fakestoreapi.com/products")
  const products = await response.json()
  console.log(products)


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  )
}
