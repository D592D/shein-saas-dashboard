export default function ProductCard({ product, onApprove }) {
  return (
    <div className="border rounded p-2 shadow hover:shadow-md transition-shadow">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="font-semibold">{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => onApprove(product.id)} className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Approve
      </button>
    </div>
  );
}