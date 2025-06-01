import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('shein-saas-backend-production.up.railway.app')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const handleApprove = async (id) => {
    await fetch(`shein-saas-backend-production.up.railway.app`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'approved' }),
    });
    setProducts(products.map(p => p.id === id ? { ...p, status: 'approved' } : p));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product Approval Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onApprove={handleApprove} />
        ))}
      </div>
    </div>
  );
}
