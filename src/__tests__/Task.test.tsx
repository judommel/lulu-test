import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Task from "../components/Task/Task";
import theme from "../theme";

describe("Test Task Component", () => {
	const onDelete = jest.fn();
	const onDragStart = jest.fn();
	const { getByText } = render(
		<ThemeProvider theme={theme}>
			<Task
				id="test"
				onDelete={onDelete}
				onDragStart={onDragStart}
				title="My test title"
				description="My test description"
				estimation={3}
				isLocked={false}
			/>
		</ThemeProvider>
	);

	const task = getByText("My test title");

	test("should display Title", async () => {
		expect(task).toBeDefined();
	});

	test("should be deletable if unlocked", async () => {
		const { getByRole } = render(
			<ThemeProvider theme={theme}>
				<Task
					id="test"
					onDelete={onDelete}
					onDragStart={onDragStart}
					title="My test title"
					description="My test description"
					estimation={3}
					isLocked={false}
				/>
			</ThemeProvider>
		);

		const deleteButton = getByRole("button");
		await fireEvent.click(deleteButton);

		expect(onDelete).toHaveBeenCalled();
	});

	test("should not be draggable if locked", async () => {
		const { container } = render(
			<ThemeProvider theme={theme}>
				<Task
					id="test"
					onDelete={onDelete}
					onDragStart={onDragStart}
					title="My test title"
					description="My test description"
					estimation={3}
					isLocked={true}
				/>
			</ThemeProvider>
		);

		expect(container.draggable).toBeFalsy();
	});
});
