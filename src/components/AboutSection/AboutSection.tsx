import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Description } from '../../types/Description';
import '../../styles/utils/fonts.scss';
import './AboutSection.scss';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  description: Description[] | null,
}

export const AboutSection: React.FC<Props> = ({ description }) => (
  <article className="about">
    <div className="about__header">
      <h3 className="about__title h3">About</h3>

      <span className="about__line" />
    </div>
    {description
      ? (
        description.map(({ title, text }) => (
          <div className="about__info" key={title}>
            <h4 className="about__info-title h4">{title}</h4>

            <div className="about__info-describtion">
              {text.map((desc) => (
                <p
                  className="about__info-describtion-text"
                  key={desc}
                >{desc}</p>
              ))}
            </div>
          </div>
        ))
      )
      : (
        <>
          <Skeleton className='about__info-title--skeleton' />
          <Skeleton className='about__info-description-skeleton' count={5} />
        </>
      )
    }
  </article>
);
