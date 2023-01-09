import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '../Button';

import Drawer from './Drawer';

import { useDisclosure } from '@/hook/useDisclosure';

const meta: Meta = {
	title: 'Components/Elements/Drawer',
	component: Drawer,
	parameters: {
		controls: { expanded: true },
	},
};

export default meta;

export const SmallDrawer: Story = () => {
	const { close, open, isOpen } = useDisclosure();

	return (
		<>
			<Button variant="primary" size="sm" onClick={open} type="button">
				Open Drawer
			</Button>
			<Drawer
				isOpen={isOpen}
				close={close}
				title="Drawer Title"
				size="sm"
				renderFooter={() => (
					<Button onClick={close} size={'sm'} variant="danger" type={'button'}>
						Close
					</Button>
				)}
			>
				This is the Drawer Content
			</Drawer>
		</>
	);
};

export const MediumDrawer: Story = () => {
	const { close, open, isOpen } = useDisclosure();

	return (
		<>
			<Button variant="primary" size="sm" onClick={open} type="button">
				Open Drawer
			</Button>
			<Drawer
				isOpen={isOpen}
				close={close}
				title="Drawer Title"
				size="md"
				renderFooter={() => (
					<Button onClick={close} size={'sm'} variant="danger" type={'button'}>
						Close
					</Button>
				)}
			>
				This is the Drawer Content
			</Drawer>
		</>
	);
};

export const LargeDrawer: Story = () => {
	const { close, open, isOpen } = useDisclosure();

	return (
		<>
			<Button variant="primary" size="sm" onClick={open} type="button">
				Open Drawer
			</Button>
			<Drawer
				isOpen={isOpen}
				close={close}
				title="Drawer Title"
				size="lg"
				renderFooter={() => (
					<Button onClick={close} size={'lg'} variant="danger" type={'button'}>
						Close
					</Button>
				)}
			>
				This is the Drawer Content
			</Drawer>
		</>
	);
};
export const XLDrawer: Story = () => {
	const { close, open, isOpen } = useDisclosure();

	return (
		<>
			<Button variant="primary" size="sm" onClick={open} type="button">
				Open Drawer
			</Button>
			<Drawer
				isOpen={isOpen}
				close={close}
				title="Drawer Title"
				size="xl"
				renderFooter={() => (
					<Button onClick={close} size={'lg'} variant="danger" type={'button'}>
						Close
					</Button>
				)}
			>
				This is the Drawer Content
			</Drawer>
		</>
	);
};

export const FullDrawer: Story = () => {
	const { close, open, isOpen } = useDisclosure();

	return (
		<>
			<Button variant="primary" size="sm" onClick={open} type="button">
				Open Drawer
			</Button>
			<Drawer
				isOpen={isOpen}
				close={close}
				title="Drawer Title"
				size="full"
				renderFooter={() => (
					<Button onClick={close} size={'lg'} variant="danger" type={'button'}>
						Close
					</Button>
				)}
			>
				This is the Drawer Content
			</Drawer>
		</>
	);
};
