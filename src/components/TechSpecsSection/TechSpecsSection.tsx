import React from 'react';
import '../../styles/utils/fonts.scss';
import './TechSpecsSection.scss';
import { ProductInfo } from '../../types/ProductInfo';
import { TechSpecType, TechSpecs } from '../../types/TechSpecs';

interface Props {
  product: ProductInfo,
  productCategory: keyof typeof TechSpecs,
}

export const TechSpecsSection: React.FC<Props> = ({
  product,
  productCategory,
}) => {
  const renderSpecValue = (specValue: string | string[]): string => {
    if (Array.isArray(specValue)) {
      return specValue.join(', ');
    }

    return specValue;
  };

  const techSpecObject = TechSpecs[productCategory];

  return (
    <article className="tech-specs">
      <div className="tech-specs__header">
        <h3 className="tech-specs__title h3">Tech specs</h3>

        <span className="tech-specs__line" />
      </div>
      {
        Object.keys(techSpecObject)
          .map(specKey => {
            const specValue = product[
              techSpecObject[specKey as keyof TechSpecType] as keyof ProductInfo
            ] as string;

            return (
              <p className="tech-specs__info" key={specKey}>
                <span className="tech-specs__name">
                  {specKey}
                </span>
                <span className="tech-specs__configuration">
                  {renderSpecValue(specValue)}
                </span>
              </p>
            );
          })}
    </article>
  );
};
