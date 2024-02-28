/* eslint-disable max-len */
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";

extend([namesPlugin]);

export const getColorByName = (name: string) => {
  return colord(name).toHex();
};
