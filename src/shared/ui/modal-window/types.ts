import type { ReactNode } from 'react';
import type { ModalWindowContext } from './lib/context';

export type RenderPropsChildren = (props: ModalWindowContext) => ReactNode;
