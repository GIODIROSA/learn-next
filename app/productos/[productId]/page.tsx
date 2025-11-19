import { ProductIdParams } from "@/types/route-params"


export default async function ProductDetails({ params, }: ProductIdParams) {

    const productParams = await params;

    return (
        <div className="p-8 text-center bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-extrabold text-green-700 mt-20">
                Detalles del Producto id: <span className="text-red-500">{productParams.productId}</span>
            </h1>
        </div>
    )
}
