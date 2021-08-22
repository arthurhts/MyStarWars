//ACTIONS TYPES
export enum ActionTypesPeople {
  LOAD_REQUEST = '@people/LOAD_REQUEST',
  LOAD_SUCCESS = '@people/LOAD_SUCCESS',
  LOAD_FAILURE = '@people/LOAD_FAILURE',
  SET_NEXT_PAGE = '@people/SET_NEXT_PAGE',
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

export interface IPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: IPeople[];
}

//STATE TYPE
export interface IPeopleState {
  readonly data: IPeople[];
  readonly total: number;
  readonly totalLoaded: number;
  readonly nextPage: number;
  readonly loading: boolean;
  readonly error: boolean;
}
