import React from 'react';
import '../../styles/utils/fonts.scss';

interface Description {
  title: string;
  text: string[];
}

interface Props {
  description: Description[],
}

export const AboutSection: React.FC<Props> = ({ description }) => {
  return (
    <article className="about">
      <h3 className="about__title h3">About</h3>
      <span className="about__line" />
      {description.map(info => (
        <div className="about__info">
          <h4 className="about__info-title">{info.title}</h4>
          <p className="about__info-describtion">{info.text}</p>
        </div>
      ))}
    </article>
  );
};
