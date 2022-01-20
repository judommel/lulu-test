import { useState } from "react";
import { ITask } from "../../types";
import { TaskModalCard, TaskModalContainer } from "./TaskModal.styles";

interface TaskModalProps {
	column: string;
	onCreateTask: (task: ITask) => void;
	onCloseModal: () => void;
}

const TaskModal = ({ column, onCreateTask, onCloseModal }: TaskModalProps) => {
	const [title, setTitle] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [estimation, setEstimation] = useState<number>();

	const onCreate = () => {
		if (!title || !description) {
			return;
		}
		onCreateTask({ title, description, estimation });
	};

	return (
		<TaskModalContainer>
			<TaskModalCard>
				<div onClick={onCloseModal}>Close</div>
				<div>Modal {column}</div>
				<input onChange={(e) => setTitle(e.target.value)} />
				<input onChange={(e) => setDescription(e.target.value)} />
				<input onChange={(e) => setEstimation(Number(e.target.value))} />
				<div onClick={onCreate}>Create</div>
			</TaskModalCard>
		</TaskModalContainer>
	);
};

export default TaskModal;
