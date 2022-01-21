import { ITask } from "../../types/types";
import {
	TaskContainer,
	TaskDeleteButton,
	TaskDescription,
	TaskEstimation,
	TaskTitle,
} from "./Task.styles";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();

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
					{t("task.delete")}
				</TaskDeleteButton>
			)}
			<TaskEstimation>
				{t("task.estimation")} : {estimation || "?"}
			</TaskEstimation>
		</TaskContainer>
	);
};

export default Task;
