import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const AppNavLink = React.forwardRef((props, ref) => (
    <NavLink
        ref={ref}
        to={props.to}
        className={({ isActive }) =>
            `${props.className} ${isActive ? props.activeClassName : ''}`
        }
    >
        {props.children}
    </NavLink>
));
