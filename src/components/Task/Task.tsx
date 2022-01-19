interface TaskProps {
	title: string;
	description: string;
	estimation?: number;
}

const Task = ({ title, description, estimation }: TaskProps) => {
	return (
		<div>
			{title}
			{description}
			{estimation}
		</div>
	);
};

export default Task;
