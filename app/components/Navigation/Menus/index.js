/**
 *
 * Menus
 *
 */

import React, { memo, useEffect, useState } from 'react';
import ButtonsNav from '../ButtonNavigation/Loadable';
import style from './style.scss';
import Brand from '../Brand/Loadable';

function Menus(prop) {
  const [scroll, isScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      isScrolling(true);
      return;
    }
    isScrolling(false);
  }
  return (
    <div className={`${scroll && style.navigation} `}>
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
    </div>
  );
}

Menus.propTypes = {};

export default memo(Menus);
