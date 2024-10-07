import { forwardRef } from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

import './index.less';

export type ButtonProps = AntdButtonProps;
export type Test = string;
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { ...rest } = props;
    return <AntdButton ref={ref} {...rest}></AntdButton>;
  },
);

export default Button;
