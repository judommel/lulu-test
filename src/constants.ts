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
	modal: {
		new: "New task in",
		title: "Title",
		description: "Task details :",
		estimation: "Estimation",
	},
};
