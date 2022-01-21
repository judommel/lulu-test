import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

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
import { MINIMUM_ESTIMATION } from "../../utils/constants";

interface TaskModalProps {
	column: string;
	onCreateTask: (task: ITask) => void;
	onCloseModal: () => void;
}

const TaskModal = ({ column, onCreateTask, onCloseModal }: TaskModalProps) => {
	const [title, setTitle] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [estimation, setEstimation] = useState<number>();

	const { t } = useTranslation();

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
					{t("modal.new")} {t(`titles.${column}`)}
				</TaskModalCardTitle>
				<TaskModalTitleInput
					onChange={(e) => setTitle(e.target.value)}
					placeholder={t("modal.title")}
				/>
				<TaskModalDescriptionTitle>
					{t("modal.description")}
				</TaskModalDescriptionTitle>
				<TaskModalDescriptionTextArea
					rows={8}
					cols={30}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<TaskModalEstimationSection>
					<div>{t("modal.estimation")}</div>
					<TaskModalEstimationInput
						type="number"
						min={MINIMUM_ESTIMATION}
						onChange={(e) => setEstimation(Number(e.target.value))}
					/>
				</TaskModalEstimationSection>
				<TaskModalAddButton onClick={onCreate}>
					{t("buttons.add")}
				</TaskModalAddButton>
			</TaskModalCard>
		</TaskModalContainer>
	);
};

export default TaskModal;
