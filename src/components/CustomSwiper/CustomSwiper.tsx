import React from 'react';

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any;
}

export const CustomSwiper: React.FC<Props> = ({ title, items }) => {
  return (
    <>
      <h2>{title}</h2>
      {items}
    </>
  );
};
