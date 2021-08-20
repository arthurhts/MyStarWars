//ACTIONS TYPES
export enum ActionTypesPeople {
  LOAD_REQUEST = '@people/LOAD_REQUEST',
  LOAD_SUCCESS = '@people/LOAD_SUCCESS',
  LOAD_FAILURE = '@people/LOAD_FAILURE',
}

//DATA TYPES
export interface IPeople {
  name: string;
  gender: string;
  birth_year: string;
  eye_color: string;
}

export interface IPagination {
  count: number;
  next: string;
  previous: string;
}

//STATE TYPE
export interface IPeopleState {
  readonly pagination: IPagination | null;
  readonly data: IPeople[] | null;
  readonly loading: boolean;
  readonly error: boolean;
}
