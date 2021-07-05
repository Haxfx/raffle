/* eslint-disable react/destructuring-assignment */
import { FC } from 'react';
import styled from 'styled-components';

const styles = {
  error: 'border-color: #c31824; background-color: #ffe4e3;',
  info: 'border-color: #007aff; background-color: #ceedff;',
  success: 'border-color: #3ba752;',
  warning: 'border-color: #fbcb34; background-color: #fff5d3;',
};

const Styled = styled.div`
  ${(props) => styles[props.type]}

  &:last-child {
    margin-bottom: 0;
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

type Props = {
  type: string;
};

export const Alert: FC<Props> = (props) => (
  <Styled
    className="relative border-2 rounded-xl rounded-r mb-2 py-3 px-6 max-w-450px w-full bg-white"
    {...props}
  >
    {props.children}
  </Styled>
);
