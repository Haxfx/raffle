import { FC } from 'react';

interface DynamicComponentProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  tagName?: keyof JSX.IntrinsicElements;
  className?: string;
}

const DynamicComponent: FC<DynamicComponentProps> = ({ tagName, ...otherProps }) => {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  return <Tag {...otherProps} />;
};

DynamicComponent.defaultProps = {
  tagName: 'div',
};

export default DynamicComponent;
