import Task from "../Task/Task";
import { ITask } from "../../types";
import { Add, ColumnContainer, ColumnHeader, TaskCount } from "./Column.styles";
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";

const WARNING_TASK_NUMBER = 2;

interface ColumProps {
	title: string;
	tasks: ITask[];
	onDragStart: React.DragEventHandler<HTMLDivElement>;
	onDrop: React.DragEventHandler<HTMLDivElement>;
	onDragOver: React.DragEventHandler<HTMLDivElement>;
	onEmptyColumn: () => void;
	onOpenModal: () => void;
}

const Column = ({
	title,
	tasks,
	onDragStart,
	onDrop,
	onDragOver,
	onEmptyColumn,
	onOpenModal,
}: ColumProps) => (
	<ColumnContainer onDrop={onDrop} onDragOver={onDragOver}>
		<div onClick={onEmptyColumn}>Empty</div>
		<ColumnHeader>
			{title} <TaskCount>{tasks.length}</TaskCount>
		</ColumnHeader>
		{tasks.length >= WARNING_TASK_NUMBER && <p>Warning !</p>}
		{tasks.map((task) => (
			<Task
				key={`${task.title} ${task.description}`}
				title={task.title}
				description={task.description}
				onDragStart={onDragStart}
				estimation={task.estimation}
			/>
		))}
		<Add onClick={onOpenModal}>+</Add>
	</ColumnContainer>
);

export default Column;
