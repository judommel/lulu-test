import { useState, useEffect } from "react";
import { IBoardState, ITask } from "../types/types";
import { initialState } from "./constants";
import { getFromLocalStorage } from "./utils";

export const useBoardState = () => {
	const [taskModal, setTaskModal] = useState<keyof IBoardState | null>(null);
	const [boardState, setBoardState] = useState<IBoardState | null>(null);

	useEffect(() => {
		if (localStorage.getItem("board")) {
			const storedBoard = getFromLocalStorage("board");
			setBoardState(storedBoard);
		} else {
			localStorage.setItem("board", JSON.stringify(initialState));
			setBoardState(initialState);
		}
	}, []);

	const saveBoard = (newBoard: IBoardState) => {
		setBoardState(newBoard);
		localStorage.setItem("board", JSON.stringify(newBoard));
	};

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
		const droppedTask = getFromLocalStorage("currentDrag");
		const storedBoard = getFromLocalStorage("board");

		if (!droppedTask || !storedBoard) {
			return;
		}

		const originColumnArray = storedBoard[droppedTask.originColumn];
		const draggedCard = originColumnArray.find(
			(task: ITask) => task.id === droppedTask.taskId
		);
		const taskIndex = originColumnArray.findIndex(
			(task: ITask) => task.id === droppedTask.taskId
		);
		const newBoard = { ...storedBoard };

		newBoard[droppedTask.originColumn].splice(taskIndex, 1);
		newBoard[dropColumn].push({
			...draggedCard,
		});

		saveBoard(newBoard);
	};

	const onAddTask = (task: ITask, column: string) => {
		const storedBoard = getFromLocalStorage("board");
		if (!storedBoard) {
			return;
		}

		const newBoard = { ...storedBoard };
		newBoard[column] = [...newBoard[column], task];
		saveBoard(newBoard);
		onCloseModal();
	};

	const onDeleteTask = (taskId: string, column: string) => {
		const storedBoard = getFromLocalStorage("board");
		if (!storedBoard) {
			return null;
		}
		const newBoard = { ...storedBoard };
		const taskIndex = newBoard[column].findIndex(
			(task: ITask) => task.id === taskId
		);
		newBoard[column].splice(taskIndex, 1);

		saveBoard(newBoard);
	};

	const onEmptyColumn = (column: string) => {
		const storedBoard = getFromLocalStorage("board");
		if (!storedBoard) {
			return null;
		}
		const newBoard = { ...storedBoard };
		newBoard[column] = [];

		saveBoard(newBoard);
	};

	return {
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
	};
};
