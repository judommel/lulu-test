import {
	TaskContainer,
	TaskDescription,
	TaskEstimation,
	TaskTitle,
} from "./Task.styles";

export interface TaskProps {
	title: string;
	description: string;
	estimation?: number;
}

const Task = ({ title, description, estimation }: TaskProps) => {
	return (
		<TaskContainer>
			<TaskTitle>{title}</TaskTitle>
			<TaskDescription> {description}</TaskDescription>
			<TaskEstimation>{estimation || "?"}</TaskEstimation>
		</TaskContainer>
	);
};

export default Task;
