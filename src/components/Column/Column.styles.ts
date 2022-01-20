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

export const EmptySection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 16px;
	padding: 0px 8px;
`;

export const EmptyIcon = styled.i`
	color: red;
	font-size: 14px;
`;

export const EmptyText = styled.div`
	font-size: 14px;
	color: grey;
	margin-left: 8px;
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
