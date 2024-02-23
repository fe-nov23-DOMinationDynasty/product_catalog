import React from 'react';
import { Description } from '../../types/Description';
import '../../styles/utils/fonts.scss';
import './AboutSection.scss';

interface Props {
  description: Description[] | undefined,
}

export const AboutSection: React.FC<Props> = ({ description }) => {
  return (
    <article className="about">
      <div className="about__header">
        <h3 className="about__title h3">About</h3>

        <span className="about__line" />
      </div>
      {description?.map(({ title, text }) => (
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
      ))}
    </article>
  );
};
