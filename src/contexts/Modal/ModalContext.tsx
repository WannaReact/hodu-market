import React, { createContext } from 'react';

type ModalDispatchType = {
  open: (content: React.ReactNode) => void;
  close: () => void;
};

export type ModalState = {
  active: boolean;
  content: React.ReactNode;
};

export const ModalDispatchContext = createContext<ModalDispatchType>({
  open: () => {},
  close: () => {}
});

export const ModalStateContext = createContext<ModalState>({
  active: false,
  content: null
});
