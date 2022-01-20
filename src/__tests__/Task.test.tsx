import { render, fireEvent } from "@testing-library/react";
import Task from "../components/Task/Task";

describe("Test Task Component", () => {
	const onDelete = jest.fn();
	const onDragStart = jest.fn();
	const { getByText } = render(
		<Task
			id="test"
			onDelete={onDelete}
			onDragStart={onDragStart}
			title="My test title"
			description="My test description"
			estimation={3}
			isLocked={false}
		/>
	);

	const task = getByText("My test title");

	test("should display Title", async () => {
		expect(task).toBeDefined();
	});

	test("should be deletable if unlocked", async () => {
		const { getByRole } = render(
			<Task
				id="test"
				onDelete={onDelete}
				onDragStart={onDragStart}
				title="My test title"
				description="My test description"
				estimation={3}
				isLocked={false}
			/>
		);

		const deleteButton = getByRole("button");
		await fireEvent.click(deleteButton);

		expect(onDelete).toHaveBeenCalled();
	});

	test("should not be draggable if locked", async () => {
		const { container } = render(
			<Task
				id="test"
				onDelete={onDelete}
				onDragStart={onDragStart}
				title="My test title"
				description="My test description"
				estimation={3}
				isLocked={true}
			/>
		);

		expect(container.draggable).toBeFalsy();
	});
});
