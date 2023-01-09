import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import Button from '../Button';

import './Drawer.css';
import { DrawerProps, sizes } from './Drawer.types';

const Drawer = (props: DrawerProps) => {
	const { title, renderFooter, children, close, isOpen, size, containerClassName } = props;
	return (
		<Dialog
			unmount={false}
			onClose={close}
			open={isOpen}
			className={clsx(['dialog-container', containerClassName])}
		>
			<div className="dialog-inner-container">
				<Dialog.Overlay className="dialog-overlay" />
				<div className={clsx(['dialog-content', sizes[size]])}>
					<div className="close-button-container">
						<button onClick={close}>
							<span className="sr-only">Close sidebar</span>
							<IoMdCloseCircleOutline className="close-button" aria-hidden="true" />
						</button>
					</div>
					<div className={clsx(['flex grow', 'text-content '])}>
						<Dialog.Title className="dialog-title">{title}</Dialog.Title>
						{children}
					</div>
					<div className="self-center mt-10">{renderFooter()}</div>
				</div>
			</div>
		</Dialog>
	);
};

export default Drawer;
