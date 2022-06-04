import styles from '../../styles/ProjectCard.module.css';
import {IconGithub, IconNewTab} from '../icons';

const Component = ({data}) => {
  return (
    <div className={styles.card}>
      <div>
        <h1 className={styles.card__title}>{data.name}</h1>
      </div>
      <div className={styles.card__project__info}>
        <div className={styles.image__container}>
          <img className={styles.card__image} src={data.image} alt={data.name}/>
        </div>
        <div className={styles.description__container}>
          <p className={styles.card__description}>{data.description}</p>
          <p className={styles.card__description__used_tech}>Tecnologias usadas:</p>
          <p className={styles.card__technologies}>
              {
                data.technologies.map(technology => (
                  technology == data.technologies[data.technologies.length - 1] ? ` ${technology}.` : ` ${technology},`

                ))
              }
          </p>
        </div>
      </div>
      <div className={styles.card__links}>
        <div className={styles.card__links__each}>
          <h3>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <IconGithub/> Repositorio
            </a>
          </h3>
          <h3>
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              <IconNewTab/> Demo
            </a>
          </h3>
        </div>
      </div>
    </div>
  )
}

export { Component as ProjectCard};
export default Component;