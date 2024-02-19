import React from "react";
import './CardLayout.scss';
import { Phone } from "../../types/Phone";
import { ProductCard } from "../ProductCard";

type Props = {
  phones: Phone[];
};

export const CardLayout: React.FC<Props> = ({ phones }) => {

  return (
    <div className="card-layout">
      {phones.map(phone => (
        <ProductCard phone={phone} key={phone.id}/>
      ))}
    </div>
  );
};
