import { motion } from 'framer-motion';
import { Context, createContext, useCallback, useContext, useReducer, useRef } from 'react';
import styled from 'styled-components';
import { Toaster } from '../../components/Toaster/Toaster';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const REMOVE_ALL = 'REMOVE_ALL';

interface ToasterContextProps {
  toasters: any;
  addToaster: (toasterProps: any) => number;
  removeToaster: (id: any) => void;
  removeAllToasters: () => void;
}

const ToasterContext = createContext<ToasterContextProps | null>(
  null
) as Context<ToasterContextProps>;

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  max-height: 100vh;
  overflow: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  background-color: transparent;
  padding: 0;
  margin: 0;

  li {
    flex: 0 0 50px;
    margin: 5px;
    position: relative;
    width: 300px;
  }
`;

const framerVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
};

export const useToaster = () => {
  const toasterContext = useContext(ToasterContext);
  return {
    toasters: toasterContext.toasters,
    addToaster: toasterContext.addToaster,
    removeToaster: toasterContext.removeToaster,
    removeAllToasters: toasterContext.removeAllToasters,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.toaster];
    case REMOVE: {
      const toasters = [...state];
      const filtered = toasters.filter((toaster) => toaster.id !== action.id);
      return [...filtered];
    }
    case REMOVE_ALL:
      return [];
    default:
      throw new Error();
  }
}

export const ToasterProvider = ({ children, ...props }) => {
  const toasterIndex = useRef(0);
  const [toasters, dispatch] = useReducer(reducer, []);

  const removeToaster = useCallback((id) => dispatch({ type: REMOVE, id }), [dispatch]);

  const removeAllToasters = useCallback(() => dispatch({ type: REMOVE_ALL }), [dispatch]);

  const addToaster = useCallback(
    (toasterProps) => {
      // eslint-disable-next-line no-plusplus
      const id = toasterIndex.current++;
      const toaster = {
        id,
        toaster: <Toaster onClose={() => removeToaster(id)} {...toasterProps} id={id} />,
      };

      dispatch({ type: ADD, toaster });

      return id;
    },
    [removeToaster]
  );

  return (
    <ToasterContext.Provider value={{ toasters, addToaster, removeToaster, removeAllToasters }}>
      {children}

      <Container {...props}>
        {toasters.map((toaster) => (
          // Fix class match warning for this element
          <motion.li
            key={toaster.id}
            // positionTransition
            className=""
            variants={framerVariants}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          >
            {toaster.toaster}
          </motion.li>
        ))}
      </Container>
    </ToasterContext.Provider>
  );
};
