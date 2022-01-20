export interface ITask {
	id: string;
	title: string;
	description: string;
	estimation?: number;
}

export interface IBoardState {
	todo: ITask[];
	doing: ITask[];
	testKO: ITask[];
	done: ITask[];
}
