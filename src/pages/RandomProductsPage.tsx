import { useEffect, useState } from "react"

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string;
}

const RandomProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = new URL("products?limit=10", import.meta.env.VITE_PRODUCTS_API_URL)
                const response = await fetch(url)
                
                if (!response.ok) throw new Error("Could not load products")

                const data: { products: Product[] } = await response.json()
                setProducts(data.products)
            } catch {
                setError("Could not load products. Please reload the page.")
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts()
    }, [])

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error...</h1>

    return (
        <>
            <h1>Random products</h1>

            <div className="random_products_container">
                {products.map(product => (
                    <div key={product.id} className="random_product">
                        <h3>{product.title}</h3>
                        <img src={product.images} alt={product.title} />
                        <p>{product.description}</p>
                        <p className="price">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div >
        </>
    )
}

export default RandomProductsPage
