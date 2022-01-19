import Column from "../../components/Column/Column";
import { HomeContainer } from "./Home.styles";

const mockTasks = [
	{ title: "Task 1", description: "A lot to do here", estimation: 3 },
	{ title: "Task 2", description: "A lot to do here too" },
	{ title: "Task 3", description: "A lot to do here", estimation: 3 },
];

const Home = () => {
	return (
		<HomeContainer>
			<Column title="To do" tasks={mockTasks} />
			<Column title="Doing" tasks={mockTasks} />
			<Column title="Done" tasks={mockTasks} />
		</HomeContainer>
	);
};

export default Home;
