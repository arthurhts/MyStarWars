//ACTIONS TYPES
export enum ActionTypesPeople {
  LOAD_REQUEST = '@films/LOAD_REQUEST',
  LOAD_SUCCESS = '@films/LOAD_SUCCESS',
  LOAD_FAILURE = '@films/LOAD_FAILURE',
}

//DATA TYPES
export interface IFilms {
  episode_id: string;
  title: string;
}

//STATE TYPE
export interface IPeopleState {
  readonly data: IFilms[] | null;
  readonly loading: boolean;
  readonly error: boolean;
}
