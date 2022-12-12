
type ProductsResult = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export async function searchProducts(term: string): Promise<Product[]> {
    return await productsRequest(`https://dummyjson.com/products/search?q=${term}`);
}

export async function getAllProducts(): Promise<Product[]> {
    return await productsRequest('https://dummyjson.com/products');
}

async function productsRequest(url: string): Promise<Product[]> {
    const requestResults = await fetch(url);
    const resultJson = (await requestResults.json()) as ProductsResult;
    return resultJson.products;
}