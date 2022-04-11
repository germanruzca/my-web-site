import styles from '../../styles/Header.module.css';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Component = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={router.pathname == '/' ? styles.route_color : styles.no_route_color}>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </div>
      <div className={`${router.pathname == '/blog' || router.pathname == '/[slug]'? styles.route_color : styles.no_route_color}`}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
      <div className={`${router.pathname == '/resume' ? styles.route_color : styles.no}`}>
        <Link href="/resume">
          <a>Resumé</a>
        </Link>
      </div>
      <div className={router.pathname == '/proyectos' ? styles.route_color : styles.no_route_color}>
      <Link href="/proyectos">
          <a>Proyectos</a>
        </Link>
      </div>
    </div>
  );
}
export { Component as Header};
export default Component;