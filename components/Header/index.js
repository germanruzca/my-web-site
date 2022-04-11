import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router'

const Component = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={router.pathname == '/' ? styles.route_color : styles.no_route_color}>
        <a href='/'>
            Inicio
        </a>
      </div>
      <div className={`${router.pathname == '/blog' || router.pathname == '/[slug]'? styles.route_color : styles.no_route_color}`}>
        <a href='/blog'>
          Blog
        </a>
      </div>
      <div className={`${router.pathname == '/resume' ? styles.route_color : styles.no}`}>
        <a href='/resume'>
          Resumé
        </a>
      </div>
      <div className={router.pathname == '/proyectos' ? styles.route_color : styles.no_route_color}>
        <a href='/proyectos'>
          Proyectos
        </a>
      </div>
    </div>
  );
}
export { Component as Header};
export default Component;