import React from 'react';
import './ProductTable.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';

interface Props {
  products: Partial<Product>[],
};

export const ProductTable: React.FC<Props> = ({ products }) => (
  <div className="product-table">
    {products.map((product, index) => (
      <ProductCard product={product as Product} key={product?.id || index} />
    ))}
  </div>
);
