const phonesSpecs = {
  Screen: 'screen',
  Resolution: 'resolution',
  Processor: 'processor',
  RAM: 'ram',
  'Built in memory': 'capacity',
  Camera: 'camera',
  Zoom: 'zoom',
  Cell: 'cell'
};

const tabletsSpecs = {
  Screen: 'screen',
  Resolution: 'resolution',
  Processor: 'processor',
  RAM: 'ram',
  'Built in memory': 'capacity',
  Camera: 'camera',
  Zoom: 'zoom',
  Cell: 'cell'
};

const accessoriesSpecs = {
  Screen: 'screen',
  Resolution: 'resolution',
  Processor: 'processor',
  RAM: 'ram',
  Size: 'capacity',
};

export const TechSpecs = {
  'phones': phonesSpecs,
  'tablets': tabletsSpecs,
  'accessories': accessoriesSpecs,
};

export type AccessoriesSpecs = typeof accessoriesSpecs;
export type TabletsSpecs = typeof tabletsSpecs;
export type PhonesSpecs = typeof phonesSpecs;

export type TechSpecType = PhonesSpecs | TabletsSpecs | AccessoriesSpecs;



