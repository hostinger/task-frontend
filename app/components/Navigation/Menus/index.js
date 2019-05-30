/**
 *
 * Menus
 *
 */

import React, { memo } from 'react';
import ButtonsNav from '../ButtonNavigation/Loadable';
import style from './style.scss';
import Brand from '../Brand/Loadable';

function Menus(prop) {
  return (
    <div className={`${style.NavigationMenu}  ${prop.className} container`}>
      <Brand {...prop.brand} />
      <ul className={`${style.menu}`}>
        {prop.menuList.map(item => (
          <li key={item.index} className={style.list}>
            <ButtonsNav {...item.butttonProps} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Menus.propTypes = {};

export default memo(Menus);
