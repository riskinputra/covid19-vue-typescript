export interface CountriesState {
  countryCase: CountryCaseType;
  countries: CountriesList;
  error: boolean;
}

export interface CountriesList {
  [index: number]: {
    name: string;
    iso2: string;
    iso3: string;
  };
}

export interface CountryCaseType {
  confirmed: {
    value: number;
    detail: string;
  };
  recovered: {
    value: number;
    detail: string;
  };
  deaths: {
    value: number;
    detail: string;
  };
  lastUpdate: string;
}