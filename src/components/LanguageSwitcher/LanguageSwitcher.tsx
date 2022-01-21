import { useTranslation } from "react-i18next";
import { AvailableLanguages } from "../../types/types";
import {
	LanguageSwitcherButton,
	LanguageSwitcherContainer,
} from "./LanguageSwitcher.styles";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const onChangeLanguage = (language: AvailableLanguages) => {
		i18n.changeLanguage(language);
		localStorage.setItem("language", language);
	};

	return (
		<LanguageSwitcherContainer>
			<LanguageSwitcherButton
				title={
					i18n.resolvedLanguage === AvailableLanguages.fr
						? "active language"
						: ""
				}
				id={AvailableLanguages.fr}
				onClick={() => onChangeLanguage(AvailableLanguages.fr)}
			>
				{AvailableLanguages.fr.toUpperCase()}
			</LanguageSwitcherButton>
			<LanguageSwitcherButton
				title={
					i18n.resolvedLanguage === AvailableLanguages.en
						? "active language"
						: ""
				}
				id={AvailableLanguages.en}
				onClick={() => onChangeLanguage(AvailableLanguages.en)}
			>
				{AvailableLanguages.en.toUpperCase()}
			</LanguageSwitcherButton>
		</LanguageSwitcherContainer>
	);
};

export default LanguageSwitcher;
