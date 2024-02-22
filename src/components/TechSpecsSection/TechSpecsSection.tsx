import React from 'react';
import '../../styles/utils/fonts.scss';
import './TechSpecsSection.scss';
import { Phone } from '../../types/Phone';
import { Tablet } from '../../types/Tablet';
import { Accessory } from '../../types/Accessory';
import { techSpecs } from '../../constants/constants';

interface Props {
  product: Phone | Tablet | Accessory | null,
}

export const TechSpecsSection: React.FC<Props> = ({ product }) => {
  return (
    <article className="tech-specs">
      <div className="tech-specs__header">
        <h3 className="tech-specs__title h3">Tech specs</h3>

        <span className="tech-specs__line" />
      </div>
      {techSpecs.map((spec) => {
        // eslint-disable-next-line max-len
        const specValue = product?.[spec.toLowerCase() as keyof (Phone | Tablet | Accessory)] as string;

        if (specValue !== undefined && specValue !== null) {
          return (
            <p className="tech-specs__info" key={spec}>
              <span className="tech-specs__key">{spec}</span>
              <span className="tech-specs__configaration">{specValue}</span>
            </p>
          );
        }

        return null;
      })}
    </article>
  );
};
