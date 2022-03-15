import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter();
  console.log(router.route)
  return (
    <div className={styles.container}>
      <style jsx>{`
        .tag {
          color: red;
        }

        .no {
          color: black
        }
      `}
      </style>
      <div className={`${router.pathname == '/' ? "tag" : "no"}`}>
        <a href='/'>
            Inicio
        </a>
      </div>
      <div className={`${router.pathname == '/blog' || router.pathname == '/[slug]'? "tag" : "no"}`}>
        <a href='/blog'>
          Blog
        </a>
      </div>
      <div className={`${router.pathname == '/resume' ? "tag" : "no"}`}>
        <a href='/resume'>
          Resumé
        </a>
      </div>
      <div className={`${router.pathname == '/proyectos' ? "tag" : "no"}`}>
        <a href='/proyectos'>
          Proyectos
        </a>
      </div>
    </div>
  )
}