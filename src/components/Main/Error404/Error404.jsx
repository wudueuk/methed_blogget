import style from './Error404.module.css';
import {Text} from '../../../UI/Text';

export const Error404 = () => (
  <>
    <Text As='h2' className={style.title}>
      Ошибка 404
    </Text>
  </>
);
