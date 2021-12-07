import s from './Box.module.scss';

const Box = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};
export default Box;
