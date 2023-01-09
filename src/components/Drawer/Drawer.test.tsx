import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Button from '../Button';

import Drawer from './Drawer';

import { useDisclosure } from '@/hook/useDisclosure';
import 'intersection-observer';

const openButtonText = 'Open Drawer';
const cancelButtonText = 'Cancel';
const drawerContentText = 'Hello From Drawer';
const title = 'Sample Drawer';

const Component = () => {
	const { close, open, isOpen } = useDisclosure();

	return (
		<>
			<Button variant="primary" size="sm" onClick={open} type="button">
				{openButtonText}
			</Button>
			<Drawer
				isOpen={isOpen}
				close={close}
				size="md"
				title={title}
				renderFooter={() => (
					<Button variant="primary" size="sm" onClick={open} type="button">
						{cancelButtonText}
					</Button>
				)}
			>
				{drawerContentText}
			</Drawer>
		</>
	);
};

test('should confirm drawer works', async () => {
	render(<Component />);

	expect(screen.queryByText(drawerContentText)).not.toBeVisible();
	expect(screen.queryByText(title)).not.toBeVisible();

	userEvent.click(
		screen.getByRole('button', {
			name: openButtonText,
		})
	);
	await waitFor(() => expect(screen.queryByText(drawerContentText)).toBeVisible());
	expect(screen.queryByText(drawerContentText)).toBeVisible();
	expect(screen.queryByText(title)).toBeVisible();
	userEvent.click(
		screen.getByRole('button', {
			name: cancelButtonText,
		})
	);
});
