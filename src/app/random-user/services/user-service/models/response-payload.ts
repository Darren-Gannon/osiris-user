import { User } from "./user";

export interface ResponsePayload {
    results: User[]
    info: {
        seed: string,
        results: number,
        page: number,
        version: string
    }
}