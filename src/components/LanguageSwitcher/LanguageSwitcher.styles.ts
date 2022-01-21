import styled from "styled-components";
import { colors } from "../../theme";
import { AvailableLanguages } from "../../types/types";

export const LanguageSwitcherContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100px;
	border-radius: 16px;
	border: 1px solid ${colors.primary};
	margin: 16px;
`;

export const LanguageSwitcherButton = styled.div`
	background-color: ${(props) => (props.title ? colors.primary : colors.white)};
	font-weight: 500;
	color: ${(props) => (props.title ? colors.white : colors.primary)};
	cursor: pointer;
	flex: 1;
	text-align: center;
	padding: 8px;
	border-radius: ${(props) =>
		props.id === AvailableLanguages.fr
			? "16px 0px 0px 16px"
			: "0px 16px 16px 0px"};
`;
