import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductInfo } from '../../api/products';
import { Loader } from '../../components/Loader';
import './ItemCardPage.scss';
import { Category } from '../../enums/Category';
import { Accessory } from '../../types/Accessory';
import { Tablet } from '../../types/Tablet';
import { Phone } from '../../types/Phone';
import { TechSpecsSection } from '../../components/TechSpecsSection';
import { AboutSection } from '../../components/AboutSection';
import { TechSpecs, TechSpecsForActions } from '../../enums/TechSpecs';



export const ItemCardPage = () => {
  const { itemId, productCategory } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct]
    = useState<Phone | Tablet | Accessory | null>(null);

  useEffect(() => {
    getProductInfo(productCategory as Category, itemId as string)
      .then(setCurrentProduct)
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return (
    <section className="item-card-page" >
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <div className="actions">
            {/* <ProductButtons product={currentProduct} /> */}

            {Object.keys(TechSpecsForActions).map((specKey) => {
              const specValue = currentProduct?.[
                TechSpecs[specKey as keyof typeof TechSpecs] as keyof (
                  Phone | Tablet | Accessory
                )
              ] as string;

              if (specValue !== undefined && specValue !== null) {
                return (
                  <p className="tech-specs__info" key={specKey}>
                    <span className="tech-specs__name">
                      {specKey}
                    </span>
                    <span className="tech-specs__configuration">
                      {specValue}
                    </span>
                  </p>
                );
              }

              return null;
            })}
          </div>
          <AboutSection description={currentProduct?.description || null} />
          <TechSpecsSection product={currentProduct} />
        </>
      )}
    </section>
  );
};
