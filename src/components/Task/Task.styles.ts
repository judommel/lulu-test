import styled from "styled-components";
import { colors } from "../../theme";

export const TaskContainer = styled.div`
	width: "100%";
	border: 1px solid ${colors.primary};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	margin-bottom: 16px;
	cursor: pointer;
`;

export const TaskTitle = styled.div`
	font-size: 18px;
	color: ${colors.primary};
	font-weight: 600;
	border-bottom: 1px solid ${colors.primary};
	padding: 8px;
`;

export const TaskDescription = styled.div`
	font-size: 14px;
	color: ${colors.dark}};
    padding: 8px;
`;

export const TaskEstimation = styled.div`
	font-size: 12px;
	font-weight: 600;
	color: ${colors.white};
	height: 24px;
	background-color: ${colors.primary};
	padding: 8px 4px 0px 8px;
`;

export const TaskDeleteButton = styled.div`
	margin: 8px;
	background-color: ${colors.white};
	padding: 4px;
	border: 1px solid ${colors.delete};
	border-radius: 4px;
	font-size: 14px;
	font-weight: 600;
	color: ${colors.delete};
	cursor: pointer;
	&:hover {
		background-color: ${colors.delete};
		color: ${colors.white};
	}
`;
