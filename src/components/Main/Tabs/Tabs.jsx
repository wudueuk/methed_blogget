import style from './Tabs.module.css';
import {useState, useEffect} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {Text} from '../../../UI/Text/Text';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {debounceRaf} from '../../../utils/debounce';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: 'rising'},
  {value: 'Топ', Icon: EyeIcon, link: 'top'},
  {value: 'Лучшие', Icon: SaveIcon, link: 'best'},
  {value: 'Горячие', Icon: PostIcon, link: 'hot'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [menuActive, setMenuActive] = useState('Главная');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {
        isDropdown && (<div className={style.wrapperBtn}>
          <Text As='button' id='menu-dropdown' className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {menuActive}
            <ArrowIcon width={15} height={15} />
          </Text>
        </div>)
      }

      {
        (isDropdownOpen || !isDropdown) && (
          <ul className={style.list}
            onClick={() => setIsDropdownOpen(false)}>
            {LIST.map(({value, link, id, Icon}) => (
              <li className={style.item} key={id}>
                <Text As='button' className={style.btn}
                  onClick={() => {
                    setMenuActive(value);
                    navigate(`/category/${link}`);
                  }}>
                  {value}
                  {Icon && <Icon width={30} height={30} />}
                </Text>
              </li>))}
          </ul>
        )
      }
    </div>
  );
};
