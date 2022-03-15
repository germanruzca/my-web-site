import styles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div><a href='/'>Inicio</a></div>
      <div><a href='/blog'>Blog</a></div>
      <div><a href='/resume'>Resumé</a></div>
      <div><a href='/proyectos'>Proyectos</a></div>
    </div>
  )
}