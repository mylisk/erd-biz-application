export interface IRegion {
  id?: number;
  regionCode?: string;
  regionName?: string;
}

export class Region implements IRegion {
  constructor(public id?: number, public regionCode?: string, public regionName?: string) {}
}
