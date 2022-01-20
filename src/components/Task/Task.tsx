import { labels } from "../../utils/constants";
import { ITask } from "../../types/types";
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
	isLocked: boolean;
}

const Task = ({
	id,
	title,
	description,
	estimation,
	onDragStart,
	onDelete,
	isLocked,
}: BoardTaskProps) => {
	return (
		<TaskContainer
			data-testid="task_card"
			draggable={!isLocked}
			id={id}
			onDragStart={onDragStart}
		>
			<TaskTitle>{title}</TaskTitle>
			<TaskDescription> {description}</TaskDescription>
			{!isLocked && (
				<TaskDeleteButton onClick={onDelete} role="button">
					{labels.task.delete}
				</TaskDeleteButton>
			)}
			<TaskEstimation>
				{labels.task.estimation} : {estimation || "?"}
			</TaskEstimation>
		</TaskContainer>
	);
};

export default Task;
