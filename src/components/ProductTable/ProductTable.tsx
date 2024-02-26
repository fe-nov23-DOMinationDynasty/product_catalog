import React from 'react';
import './ProductTable.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';

type Props = {
  products: Partial<Product>[];
};

export const ProductTable: React.FC<Props> = ({ products }) => (
  <div className="product-table">
    {products.map((product) => (
      <ProductCard product={product as Product} key={product.id} />
    ))}
  </div>
);
