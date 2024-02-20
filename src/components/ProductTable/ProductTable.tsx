import React from 'react';
import './ProductTable.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';

type Props = {
  products: Product[];
};

export const ProductTable: React.FC<Props> = ({ products }) => {
  return (
    <div className="card-layout">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
