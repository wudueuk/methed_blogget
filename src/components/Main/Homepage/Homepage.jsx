import style from './Homepage.module.css';
import {Text} from '../../../UI/Text';

export const Homepage = () => (
  <>
    <Text As='h2' className={style.title}>Стартовая страница</Text>
    <Text As='h3' className={style.subtitle}>Добро пожаловать!</Text>
    <Text As='p' className={style.text}>Выберите категорию</Text>
  </>

);
