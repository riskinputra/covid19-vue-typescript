export interface GlobalCaseState {
  globalCase: GlobalCaseTypes;
  error: boolean;
}

export interface GlobalCaseTypes {
  confirmed: ConfirmedTypes;
  recovered: RecoveredTypes;
  deaths: DeathsTypes;
  dailySummary: string;
  dailyTimeSeries: DailyTimeSeriesTypes;
  image: string;
  source: string;
  countries: string;
  countryDetail: CountryDetailType;
  lastUpdate: string;
}

export interface ConfirmedTypes {
  value: number;
  detail: string;
}

export interface RecoveredTypes {
  value: number;
  detail: string;
}

export interface DeathsTypes {
  value: number;
  detail: string;
}

export interface DailyTimeSeriesTypes {
  pattern: string;
  example: string;
}

export interface CountryDetailType {
  pattern: string;
  example: string;
}

