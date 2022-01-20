import styled from "styled-components";
import { colors } from "../../theme";

export const ColumnContainer = styled.div`
	width: 200px;
	border-radius: 8px;
	padding: 0px;
	margin: 16px;
	box-shadow: 4px 4px 19px 0px #000000;
`;

export const ColumnHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${colors.primary};
	padding: 8px;
	color: ${colors.white};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

export const ColumnTaskContainer = styled.div`
	padding: 8px;
`;

export const ColumnWarning = styled.div`
	color: ${colors.warning};
	margin-bottom: 8px;
`;

export const EmptyPlaceholder = styled.div`
	text-align: center;
	margin-top: 6px;
	color: ${colors.warning};
`;

export const Add = styled.div`
	color: ${colors.primary};
	font-size: 32px;
	text-align: center;
	border-top: 2px dashed ${colors.primary};
	margin-top: 16px;
	width: 100%;
	cursor: pointer;
	padding-bottom: 4px;
`;

export const TaskCount = styled.div`
	background-color: ${colors.white};
	border-radius: 4px;
	padding: 4px;
	color: ${colors.primary};
	margin-left: 8px;
`;
