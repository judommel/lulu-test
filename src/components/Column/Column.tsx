import Task, { TaskProps } from "../Task/Task";
import { Add, ColumnContainer, TaskCount } from "./Column.styles";

const WARNING_TASK_NUMBER = 2;

interface ColumProps {
	title: string;
	tasks: TaskProps[];
}

const Column = ({ title, tasks }: ColumProps) => {
	const onAdd = () => {
		console.log("add");
	};

	return (
		<ColumnContainer>
			{title} <TaskCount>{tasks.length}</TaskCount>
			{tasks.length >= WARNING_TASK_NUMBER && <p>Warning !</p>}
			{tasks.map((task) => (
				<Task
					key={`${task.title} ${task.description}`}
					title={task.title}
					description={task.description}
					estimation={task.estimation}
				/>
			))}
			<Add onClick={onAdd}>+</Add>
		</ColumnContainer>
	);
};

export default Column;
