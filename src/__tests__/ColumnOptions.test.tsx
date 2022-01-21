import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ColumnOptions from "../components/ColumnOptions/ColumnOptions";
import theme from "../theme";

describe("Test ColumnOption Component", () => {
	test("Should display correct icon", async () => {
		const onEmptyColumn = jest.fn();
		const toggleLock = jest.fn();

		const { findByTestId } = render(
			<ThemeProvider theme={theme}>
				<ColumnOptions
					onEmptyColumn={onEmptyColumn}
					toggleLock={toggleLock}
					isLocked={true}
				/>
			</ThemeProvider>
		);

		const icon = await findByTestId("lock icon");

		expect(icon.className).toBe("sc-gsDKAQ kcQiqs fa fa-unlock");
	});
});
