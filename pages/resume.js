import Head from 'next/head';
import { Header } from '../components/Header'
import styles from '../styles/Resume.module.css'

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>Resumé - germanruzca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={styles.container}>
        <h1 className={styles.title}>Acerca de mi</h1>
        <p className={styles.about_me}>
          Hola! soy German Ruiz, y actualmente estoy estudiando Ingeniería en Telemática en Colima, México.
        </p>
        <p className={styles.about_me}>
        Me gusta aprender nuevas cosas todos los días usando tecnologías que me gustan. Actualmente estoy interesado en tecnologías web o el desarrollo de software en general. Siempre estoy buscando que hacer, y así mejorar mis <em>skills</em> ya sean técnicos o personales. También me gusta leer, leer artículos o libros y ser alguien activo físicamente.
        </p>
        <p className={styles.about_me}>
         Estoy listo para nuevos desafíos y aprender de ellos, para poder crecer.
        </p>

        <p>
          <strong>Leyendo</strong>: <a href="https://www.amazon.com.mx/Atomic-Habits-Proven-Build-Break/dp/0735211299/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1852F2LCIUYLA&keywords=Atomic+Habits&qid=1650819374&sprefix=atomic+habits%2Caps%2C115&sr=8-1" target="_blank" rel="noreferrer">Atomic Habits</a>
        </p>

        <p>
          <strong>Aprendiendo</strong>: Testing.
        </p>

        <p>
          <strong>Haciendo</strong>: Rails, JavaScript, PostgreSQL.
        </p>

        <div className={styles.image}>
          <img src="https://avatars.githubusercontent.com/u/43076503?v=4" alt="me"/>
        </div>
      </div>
    </div>
  );
}