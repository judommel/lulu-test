import { useState } from "react";
import { v4 as uuid } from "uuid";

import { labels } from "../../utils/constants";
import { ITask } from "../../types/types";
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
		const uniqueId = uuid();
		onCreateTask({ title, description, estimation, id: uniqueId });
	};

	return (
		<TaskModalContainer>
			<TaskModalCard>
				<TaskModalCloseIcon
					className="fa fa-times-circle"
					onClick={onCloseModal}
				/>
				<TaskModalCardTitle>
					{labels.modal.new} {labels.titles[column]}
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
					cols={30}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<TaskModalEstimationSection>
					<div>{labels.modal.estimation}</div>
					<TaskModalEstimationInput
						type="number"
						min={0}
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
