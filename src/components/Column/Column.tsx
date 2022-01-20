import Task from "../Task/Task";
import { ITask } from "../../types";
import {
	Add,
	ColumnContainer,
	ColumnHeader,
	ColumnTaskContainer,
	ColumnWarning,
	EmptyIcon,
	EmptyPlaceholder,
	EmptySection,
	EmptyText,
	TaskCount,
} from "./Column.styles";
import { labels, WARNING_TASK_NUMBER } from "../../constants";

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
}: ColumProps) => (
	<ColumnContainer onDrop={onDrop} onDragOver={onDragOver}>
		<ColumnHeader>
			{labels.titles[title]} <TaskCount>{tasks.length}</TaskCount>
		</ColumnHeader>
		<ColumnTaskContainer>
			{tasks.length >= WARNING_TASK_NUMBER && (
				<ColumnWarning>{labels.column.warning}</ColumnWarning>
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
				/>
			))}
		</ColumnTaskContainer>
		{Boolean(tasks.length) ? (
			<EmptySection onClick={onEmptyColumn}>
				<EmptyIcon className="fas fa-trash" />
				<EmptyText>Empty column</EmptyText>
			</EmptySection>
		) : (
			<EmptyPlaceholder>{labels.column.empty}</EmptyPlaceholder>
		)}
		<Add onClick={onOpenModal}>+</Add>
	</ColumnContainer>
);

export default Column;
