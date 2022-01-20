import { useEffect, useState } from "react";
import Column from "../../components/Column/Column";
import TaskModal from "../../components/TaskModal/TaskModal";
import { ITask } from "../../types";
import { BoardContainer } from "./Board.styles";

const initialState: IBoardState = {
	todo: [],
	doing: [],
	done: [],
};

interface IBoardState {
	todo: ITask[];
	doing: ITask[];
	done: ITask[];
}

const Board = () => {
	const [boardState, setBoardState] = useState<IBoardState | null>(null);
	const [taskModal, setTaskModal] = useState<keyof IBoardState | null>(null);

	useEffect(() => {
		if (localStorage.getItem("board")) {
			const storedBoard = localStorage.getItem("board");
			const parsedBoard = JSON.parse(storedBoard!);

			setBoardState(parsedBoard);
		} else {
			localStorage.setItem("board", JSON.stringify(initialState));
			setBoardState(initialState);
		}
	}, []);

	if (!boardState) {
		return <p>Loading</p>;
	}

	const onCloseModal = () => setTaskModal(null);

	const onDragStart = (
		e: React.DragEvent<HTMLDivElement>,
		originColumn: string
	) => {
		const currentDrag = {
			taskId: e.currentTarget.id,
			originColumn,
		};

		localStorage.setItem("currentDrag", JSON.stringify(currentDrag));
	};

	const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const onDrop = (_e: React.DragEvent<HTMLDivElement>, dropColumn: string) => {
		const droppedTask = localStorage.getItem("currentDrag");
		const storedBoard = localStorage.getItem("board");

		if (!droppedTask || !storedBoard) {
			return;
		}

		const parsedBoard = JSON.parse(storedBoard);
		const parsedDroppedTask = JSON.parse(droppedTask);

		const originColumnArray = parsedBoard[parsedDroppedTask.originColumn];
		const draggedCard = originColumnArray.find(
			(card: ITask) =>
				`${card.title}${card.description}` === parsedDroppedTask.taskId
		);
		const cardIndex = originColumnArray.findIndex(
			(card: ITask) =>
				`${card.title}${card.description}` === parsedDroppedTask.taskId
		);
		const newBoard = { ...parsedBoard };

		newBoard[parsedDroppedTask.originColumn].splice(cardIndex, 1);
		newBoard[dropColumn].push({
			...draggedCard,
		});

		setBoardState(newBoard);
		localStorage.setItem("board", JSON.stringify(newBoard));
	};

	const onAddTask = (task: ITask, column: string) => {
		const storedBoard = localStorage.getItem("board");
		if (!storedBoard) {
			return null;
		}

		const parsedBoard = JSON.parse(storedBoard);
		const newBoard = { ...parsedBoard };
		newBoard[column] = [...newBoard[column], task];
		setBoardState(newBoard);
		localStorage.setItem("board", JSON.stringify(newBoard));
		onCloseModal();
	};

	const onEmptyColumn = (column: string) => {
		const storedBoard = localStorage.getItem("board");
		if (!storedBoard) {
			return null;
		}

		const parsedBoard = JSON.parse(storedBoard);
		const newBoard = { ...parsedBoard };
		newBoard[column] = [];

		setBoardState(newBoard);
		localStorage.setItem("board", JSON.stringify(newBoard));
	};

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
					/>
				))}
			</BoardContainer>
		</>
	);
};

export default Board;
