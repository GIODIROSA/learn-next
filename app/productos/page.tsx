import Link from "next/link";

// concentracion de las card de los producto o galeria de producto

export default function Productos() {

    const products = [
        {
            id: 1,
            name: "Producto 1",
            description: "Descripcion del producto 1"
        },
        {
            id: 2,
            name: "Producto 2",
            description: "Descripcion del producto 2"
        },
        {
            id: 3,
            name: "Producto 3",
            description: "Descripcion del producto 3"
        }
    ]

    return (
        <div className="p-8 text-center bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-extrabold text-blue-700 mt-20 mb-10">
                Listado de Productos
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <Link
                            href={`/productos/${product.id}`}
                            className="inline-block bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                        >
                            Ver Detalles
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}