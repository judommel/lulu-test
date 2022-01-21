import styled from "styled-components";

export const ColumnContainer = styled.div`
	align-self: start;
	width: 200px;
	border-radius: 8px;
	padding: 0px;
	margin: 16px;
	box-shadow: 4px 4px 19px 0px #000000;
	font-family: ${({ theme }) => theme.fonts.default};
`;

export const ColumnHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 8px 16px;
	color: ${({ theme }) => theme.colors.white};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

export const ColumnTaskContainer = styled.div`
	padding: 8px;
`;

export const ColumnWarning = styled.div`
	color: ${({ theme }) => theme.colors.warning};
	margin-bottom: 8px;
`;

export const EmptyPlaceholder = styled.div`
	text-align: center;
	margin-top: 6px;
	color: ${({ theme }) => theme.colors.warning};
`;

export const Add = styled.div`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 32px;
	text-align: center;
	border-top: 2px dashed ${({ theme }) => theme.colors.primary};
	margin-top: 16px;
	width: 100%;
	cursor: pointer;
	padding-bottom: 4px;
`;

export const TaskCount = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 4px;
	padding: 4px 8px;
	color: ${({ theme }) => theme.colors.primary};
	margin-left: 16px;
`;
