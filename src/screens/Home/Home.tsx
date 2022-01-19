import { useEffect, useState } from "react";
import Column from "../../components/Column/Column";
import { TaskProps } from "../../components/Task/Task";
import { HomeContainer } from "./Home.styles";

const mockTasks = [
	{ title: "Task 1", description: "A lot to do here", estimation: 3 },
	{ title: "Task 2", description: "A lot to do here too" },
	{ title: "Task 3", description: "A lot to do here", estimation: 3 },
];

const mockState: IBoardState = {
	todo: [],
	doing: [{ title: "Task 1", description: "A lot to do here", estimation: 3 }],
	done: [],
};

const initialState: IBoardState = {
	todo: [],
	doing: [],
	done: [],
};

interface IBoardState {
	todo: TaskProps[];
	doing: TaskProps[];
	done: TaskProps[];
}

const Home = () => {
	const [boardState, setBoardState] = useState<IBoardState | null>(null);

	useEffect(() => {
		if (localStorage.getItem("lists")) {
			const initialList = localStorage.getItem("lists");
			const parsedList = JSON.parse(initialList!);

			setBoardState(parsedList);
		} else {
			localStorage.setItem("lists", JSON.stringify(mockState));
			setBoardState(mockState);
		}
	}, []);

	if (!boardState) {
		return <p>Loading</p>;
	}

	return (
		<HomeContainer>
			<Column title="To do" tasks={boardState.todo} />
			<Column title="Doing" tasks={boardState.doing} />
			<Column title="Done" tasks={boardState.done} />
		</HomeContainer>
	);
};

export default Home;
