import React, { useState, useContext, createContext } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

let defaultValue;
const ToggleContext = createContext(defaultValue);

export default function Accordion({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <div {...restProps}>{children}</div>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <div onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <VscChevronUp className="text-orange-primary h-6 w-6 mr-5" />
      ) : (
        <VscChevronDown className="text-blue-primary h-6 w-6 mr-5" />
      )}
    </div>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <div {...restProps}>{children}</div> : null;
};
