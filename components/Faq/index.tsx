import {
  ReactElement,
  useState,
  useContext,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

interface FaqContextInterface {
  toggleShow: boolean;
  setToggleShow: Dispatch<SetStateAction<boolean>>;
}

const ToggleContext = createContext<FaqContextInterface | null>(null);

interface IAccordion {
  className?: string;
  children: ReactNode;
}

export default function Accordion({ children, ...restProps }: IAccordion): ReactElement {
  return <div {...restProps}>{children}</div>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }: IAccordion): ReactElement {
  return <div {...restProps}>{children}</div>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }: IAccordion): ReactElement {
  return <div {...restProps}>{children}</div>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }: IAccordion): ReactElement {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <div {...restProps}>{children}</div>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }: IAccordion): ReactElement {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <a
      aria-hidden
      onKeyDown={() => setToggleShow(!toggleShow)}
      onClick={() => setToggleShow(!toggleShow)}
      {...restProps}
    >
      {children}
      {toggleShow ? (
        <VscChevronUp className="text-orange-primary h-6 w-6 mr-5" />
      ) : (
        <VscChevronDown className="text-blue-primary h-6 w-6 mr-5" />
      )}
    </a>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }: IAccordion): ReactElement {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <div {...restProps}>{children}</div> : null;
};
