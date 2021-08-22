//ACTIONS TYPES
export enum ActionTypesFilm {
  LOAD_REQUEST = '@films/LOAD_REQUEST',
  LOAD_SUCCESS = '@films/LOAD_SUCCESS',
  LOAD_FAILURE = '@films/LOAD_FAILURE',
  RESET = '@films/RESET',
}

//DATA TYPES
export interface IFilm {
  episode_id: string;
  title: string;
}

//STATE TYPE
export interface IFilmState {
  readonly data: IFilm[];
  readonly loading: boolean;
  readonly error: boolean;
}
