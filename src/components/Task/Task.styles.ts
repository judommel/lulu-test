import styled from "styled-components";

export const TaskContainer = styled.div`
	width: "100%";
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	margin-bottom: 16px;
	cursor: ${(props) => (props.draggable ? "pointer" : "default")};
`;

export const TaskTitle = styled.div`
	font-size: 18px;
	color: ${({ theme }) => theme.colors.primary};
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	padding: 8px;
`;

export const TaskDescription = styled.div`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.dark}};
    padding: 8px;
`;

export const TaskEstimation = styled.div`
	font-size: 12px;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	color: ${({ theme }) => theme.colors.white};
	height: 24px;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 8px 4px 0px 8px;
`;

export const TaskDeleteButton = styled.div`
	margin: 8px;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 4px;
	border: 1px solid ${({ theme }) => theme.colors.delete};
	border-radius: 4px;
	font-size: 14px;
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	color: ${({ theme }) => theme.colors.delete};
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.colors.delete};
		color: ${({ theme }) => theme.colors.white};
	}
`;
