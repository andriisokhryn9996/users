import {UserInterface} from "./user.interface";

export interface GetUserResponseInterface {
  info: {
    page: number
    results: number
    seed: string
    version: string
  }
  results: UserInterface[]
}
