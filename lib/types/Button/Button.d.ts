/// <reference types="react" />
import { ButtonProps as AntdButtonProps } from 'antd';
export type ButtonProps = AntdButtonProps;
export type Test = string;
declare const Button: import("react").ForwardRefExoticComponent<AntdButtonProps & import("react").RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default Button;
