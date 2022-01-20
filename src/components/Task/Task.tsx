import { ITask } from "../../types";
import {
	TaskContainer,
	TaskDescription,
	TaskEstimation,
	TaskTitle,
} from "./Task.styles";

export interface BoardTaskProps extends ITask {
	onDragStart: React.DragEventHandler<HTMLDivElement>;
}

const Task = ({
	title,
	description,
	onDragStart,
	estimation,
}: BoardTaskProps) => {
	return (
		<TaskContainer
			draggable
			id={`${title}${description}`}
			onDragStart={onDragStart}
		>
			<TaskTitle>{title}</TaskTitle>
			<TaskDescription> {description}</TaskDescription>
			<TaskEstimation>{estimation || "?"}</TaskEstimation>
		</TaskContainer>
	);
};

export default Task;
