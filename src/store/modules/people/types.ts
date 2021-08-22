//ACTIONS TYPES
export enum ActionTypesPeople {
  LOAD_REQUEST = '@people/LOAD_REQUEST',
  LOAD_SUCCESS = '@people/LOAD_SUCCESS',
  LOAD_FAILURE = '@people/LOAD_FAILURE',
  RESET = '@people/RESET',
}

//DATA TYPES
export interface IPeople {
  name: string;
  gender: string;
  birth_year: string;
  eye_color: string;
  mass: string;
  films: string[];
}

export interface IPagination {
  count: number;
  next: string;
  previous: string;
}

export interface IPeopleResponse {
  count: number;
  next: string;
  previous: string;
  result: IPeople[];
}

//STATE TYPE
export interface IPeopleState {
  readonly pagination: IPagination | null;
  readonly data: IPeople[];
  readonly loading: boolean;
  readonly error: boolean;
}
