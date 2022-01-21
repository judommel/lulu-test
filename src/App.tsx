import { ThemeProvider } from "styled-components";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import "./i18n/i18n";
import Board from "./screens/Board/Board";
import theme from "./theme";
import { useStoredLanguage } from "./utils/hooks";

const App = () => {
	const { languageLoaded } = useStoredLanguage();

	if (!languageLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<LanguageSwitcher />
			<Board />
		</ThemeProvider>
	);
};

export default App;
