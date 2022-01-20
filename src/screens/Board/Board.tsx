import Column from "../../components/Column/Column";
import TaskModal from "../../components/TaskModal/TaskModal";
import { IBoardState } from "../../types/types";
import { useBoardState } from "../../utils/hooks";
import { BoardContainer } from "./Board.styles";
import { initialState } from "../../utils/constants";

const Board = () => {
	const {
		boardState,
		taskModal,
		onDragStart,
		onDragOver,
		onDrop,
		onAddTask,
		onDeleteTask,
		onEmptyColumn,
		onCloseModal,
		setTaskModal,
	} = useBoardState();

	if (!boardState) {
		return <p>Loading</p>;
	}

	return (
		<>
			{taskModal && (
				<TaskModal
					column={taskModal as string}
					onCreateTask={(task) => onAddTask(task, taskModal)}
					onCloseModal={onCloseModal}
				/>
			)}
			<BoardContainer>
				{Object.keys(initialState).map((column) => (
					<Column
						key={column}
						title={column}
						tasks={boardState[column as keyof IBoardState]}
						onDragStart={(e) => onDragStart(e, column)}
						onDrop={(e) => onDrop(e, column)}
						onDragOver={onDragOver}
						onEmptyColumn={() => onEmptyColumn(column)}
						onOpenModal={() => setTaskModal(column as keyof IBoardState)}
						onDeleteTask={(taskId) => onDeleteTask(taskId, column)}
					/>
				))}
			</BoardContainer>
		</>
	);
};

export default Board;
