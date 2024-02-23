/* eslint-disable max-len */
import colorNames from 'color-name-list';

interface ColorObject {
  name: string,
  hex: string,
}

export const getColorByName = (name: string) => {
  return (colorNames['colorNameList' as keyof typeof colorNames] as unknown as ColorObject[])
    .find(color => color.name.
      toLowerCase()
      .split(' ')
      .join('') === name.replace('gray', 'grey'))?.hex || '';
};
