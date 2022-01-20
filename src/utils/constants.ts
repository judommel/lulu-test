import { IBoardState } from "../types/types";

export const WARNING_TASK_NUMBER = 5;

export const initialState: IBoardState = {
	todo: [],
	doing: [],
	testKO: [],
	done: [],
};

interface LabelProps {
	[key: string]: { [key: string]: string };
}

export const labels: LabelProps = {
	titles: {
		todo: "To do",
		doing: "Doing",
		testKO: "Test KO",
		done: "Done",
	},
	buttons: {
		add: "Add",
	},
	column: {
		empty: "No task yet",
		emptyButton: "Empty column",
		warning: "Warning ! You already have a lot on your plate here !",
		lock: "Lock column",
		unlock: "Unlock column",
	},
	task: {
		estimation: "Estimation",
		delete: "Delete task",
	},
	modal: {
		new: "New task in :",
		title: "Title",
		description: "Task details :",
		estimation: "Estimation",
	},
};
