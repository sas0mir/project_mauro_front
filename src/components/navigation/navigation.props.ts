import { RefObject } from "react";

export interface NavigationProps {
    ref?: RefObject<HTMLDivElement>;
    children?: React.ReactNode;
    size?: 'l' | 'm' | 's' | 'xs';
}