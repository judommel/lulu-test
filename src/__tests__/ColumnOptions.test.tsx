import { render } from "@testing-library/react";
import ColumnOptions from "../components/ColumnOptions/ColumnOptions";

// TODO TEXT

describe("Test Task Component", () => {
	test("Lock icon should", async () => {
		const onEmptyColumn = jest.fn();
		const toggleLock = jest.fn();

		const { findByTestId } = render(
			<ColumnOptions
				onEmptyColumn={onEmptyColumn}
				toggleLock={toggleLock}
				isLocked={true}
			/>
		);

		const icon = await findByTestId("lock icon");

		expect(icon.className).toBe("sc-gsDKAQ kcQiqs fa fa-unlock");
	});
});
