import { useState } from "react";
import { labels } from "../../constants";
import { ITask } from "../../types";
import {
	TaskModalAddButton,
	TaskModalCard,
	TaskModalCardTitle,
	TaskModalCloseIcon,
	TaskModalContainer,
	TaskModalDescriptionTextArea,
	TaskModalDescriptionTitle,
	TaskModalEstimationInput,
	TaskModalEstimationSection,
	TaskModalTitleInput,
} from "./TaskModal.styles";

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
				<TaskModalCloseIcon
					className="fa fa-times-circle"
					onClick={onCloseModal}
				/>
				<TaskModalCardTitle>
					{labels.modal.new} {column}
				</TaskModalCardTitle>
				<TaskModalTitleInput
					onChange={(e) => setTitle(e.target.value)}
					placeholder={labels.modal.title}
				/>
				<TaskModalDescriptionTitle>
					{labels.modal.description}
				</TaskModalDescriptionTitle>
				<TaskModalDescriptionTextArea
					rows={8}
					cols={34}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<TaskModalEstimationSection>
					<div>{labels.modal.estimation}</div>
					<TaskModalEstimationInput
						onChange={(e) => setEstimation(Number(e.target.value))}
					/>
				</TaskModalEstimationSection>
				<TaskModalAddButton onClick={onCreate}>
					{labels.buttons.add}
				</TaskModalAddButton>
			</TaskModalCard>
		</TaskModalContainer>
	);
};

export default TaskModal;
