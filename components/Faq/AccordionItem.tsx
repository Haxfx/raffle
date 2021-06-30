import { useRef, useState } from 'react';
import { VscChevronUp } from 'react-icons/vsc';

interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, ...restProps }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [transform, setTransform] = useState('transform duration-700 ease text-blue-primary');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(active === false);
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setTransform(
      active
        ? 'transform duration-700 ease text-blue-primary'
        : 'transform duration-700 ease rotate-180 text-orange-primary'
    );
  }

  return (
    <div {...restProps}>
      <button
        type="button"
        className="w-full flex justify-between box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="flex py-4 cursor-pointer justify-between">
          <span className="ml-5 text-sm">{title}</span>
        </p>
        <VscChevronUp className={`${transform} inline-block h-6 w-6 mr-5`} />
      </button>
      <div
        ref={contentSpace}
        style={{ maxHeight: `${height}` }}
        className="overflow-auto transition-max-height duration-700 ease-in-out"
      >
        <div className="p-4 text-sm font-thin">{content}</div>
      </div>
    </div>
  );
};
