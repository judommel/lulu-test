import { IBoardState } from "../types/types";

export const WARNING_TASK_NUMBER = 5;

export const MINIMUM_ESTIMATION = 0;

export const initialState: IBoardState = {
	todo: [],
	doing: [],
	testKO: [],
	done: [],
};
