import { labels } from "../../constants";
import { ITask } from "../../types";
import {
	TaskContainer,
	TaskDeleteButton,
	TaskDescription,
	TaskEstimation,
	TaskTitle,
} from "./Task.styles";

export interface BoardTaskProps extends ITask {
	onDragStart: React.DragEventHandler<HTMLDivElement>;
	onDelete: () => void;
}

const Task = ({
	id,
	title,
	description,
	estimation,
	onDragStart,
	onDelete,
}: BoardTaskProps) => {
	return (
		<TaskContainer draggable id={id} onDragStart={onDragStart}>
			<TaskTitle>{title}</TaskTitle>
			<TaskDescription> {description}</TaskDescription>
			<TaskDeleteButton onClick={onDelete}>
				{labels.task.delete}
			</TaskDeleteButton>
			<TaskEstimation>
				{labels.task.estimation} : {estimation || "?"}
			</TaskEstimation>
		</TaskContainer>
	);
};

export default Task;
