import { useState } from "react";
import { useTranslation } from "react-i18next";

import Task from "../Task/Task";
import { ITask } from "../../types/types";
import {
	Add,
	ColumnContainer,
	ColumnHeader,
	ColumnTaskContainer,
	ColumnWarning,
	EmptyPlaceholder,
	TaskCount,
} from "./Column.styles";
import { WARNING_TASK_NUMBER } from "../../utils/constants";
import ColumnOptions from "../ColumnOptions/ColumnOptions";

interface ColumProps {
	title: string;
	tasks: ITask[];
	onDragStart: React.DragEventHandler<HTMLDivElement>;
	onDrop: React.DragEventHandler<HTMLDivElement>;
	onDragOver: React.DragEventHandler<HTMLDivElement>;
	onEmptyColumn: () => void;
	onOpenModal: () => void;
	onDeleteTask: (taskId: string) => void;
}

const Column = ({
	title,
	tasks,
	onDragStart,
	onDrop,
	onDragOver,
	onEmptyColumn,
	onOpenModal,
	onDeleteTask,
}: ColumProps) => {
	const [isLocked, setLocked] = useState(false);

	const { t } = useTranslation();

	const toggleLock = () => setLocked((prevState) => !prevState);

	return (
		<ColumnContainer onDrop={onDrop} onDragOver={onDragOver}>
			<ColumnHeader>
				{t(`titles.${title}`)} <TaskCount>{tasks.length}</TaskCount>
			</ColumnHeader>
			<ColumnTaskContainer>
				{tasks.length >= WARNING_TASK_NUMBER && (
					<ColumnWarning>{t("column.warning")}</ColumnWarning>
				)}
				{tasks.map((task) => (
					<Task
						id={task.id}
						key={task.id}
						title={task.title}
						description={task.description}
						onDragStart={onDragStart}
						onDelete={() => onDeleteTask(task.id)}
						estimation={task.estimation}
						isLocked={isLocked}
					/>
				))}
			</ColumnTaskContainer>
			{Boolean(tasks.length) ? (
				<ColumnOptions
					isLocked={isLocked}
					onEmptyColumn={onEmptyColumn}
					toggleLock={toggleLock}
				/>
			) : (
				<EmptyPlaceholder>{t("column.empty")}</EmptyPlaceholder>
			)}

			<Add onClick={onOpenModal}>+</Add>
		</ColumnContainer>
	);
};

export default Column;
