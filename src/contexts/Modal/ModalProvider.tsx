import React, { useCallback, useMemo, useState } from 'react';
import CustomModal from 'src/components/Modals/CustomModal';
import {
  ModalDispatchContext,
  ModalState,
  ModalStateContext
} from './ModalContext';

interface ModalProviderProps {
  children: React.ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [state, setState] = useState<ModalState>({
    active: false,
    content: null
  });

  const open = useCallback((content: React.ReactNode) => {
    setState((prev) => ({ ...prev, active: true, content }));
  }, []);

  const close = useCallback(
    () => setState((prev) => ({ ...prev, active: false })),
    []
  );

  const dispatch = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        {state.active && <CustomModal>{state.content}</CustomModal>}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

export default ModalProvider;
