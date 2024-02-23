import React from 'react';
import '../../styles/utils/fonts.scss';
import './TechSpecsSection.scss';
import { Phone } from '../../types/Phone';
import { Tablet } from '../../types/Tablet';
import { Accessory } from '../../types/Accessory';
import { TechSpecs } from '../../enums/TechSpecs';

interface Props {
  product: Phone | Tablet | Accessory | null,
}

export const TechSpecsSection: React.FC<Props> = ({ product }) => {
  const renderSpecValue = (specValue: string | string[]): string => {
    if (Array.isArray(specValue)) {
      return specValue.join(', ');
    }

    return specValue;
  };

  const isAccessory = (
    item: Phone | Tablet | Accessory | null
  ): item is Accessory => {
    return item !== null && 'capacity' in item;
  };

  const getSpecDisplayName = (specKey: string): string => {
    if (isAccessory(product)) {
      if (specKey === 'Built in memory'
        && product.capacity.includes('mm')
      ) {
        return 'Size';
      }
    }

    return specKey;
  };

  return (
    <article className="tech-specs">
      <div className="tech-specs__header">
        <h3 className="tech-specs__title h3">Tech specs</h3>

        <span className="tech-specs__line" />
      </div>
      {Object.keys(TechSpecs).map((specKey) => {
        const specValue = product?.[
          TechSpecs[specKey as keyof typeof TechSpecs] as keyof (
            Phone | Tablet | Accessory
          )
        ] as string;

        if (specValue !== undefined && specValue !== null) {
          return (
            <p className="tech-specs__info" key={specKey}>
              <span className="tech-specs__name">
                {getSpecDisplayName(specKey)}
              </span>
              <span className="tech-specs__configuration">
                {renderSpecValue(specValue)}
              </span>
            </p>
          );
        }

        return null;
      })}
    </article>
  );
};
