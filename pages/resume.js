import { Header } from '../components/Header'
import styles from '../styles/Resume.module.css'

export default function AboutMe() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.about_me}>
          I’m German. I'm a 22 years old student from Colima, Mexico.
        </p>
        <p className={styles.about_me}>
          I like learning every day with the new technologies. I'm interested in Web Technologies and Data Science, I'd like to match these two areas in my carreer in the future. I'm always looking for something new to do, immerse in new challenges. I also like listen to music, read articles and been fitness.
        </p>
        <p className={styles.about_me}>
          I am ready to the new challenges and grow with them.
        </p>

        <div className={styles.image}>
          <img src="https://avatars.githubusercontent.com/u/43076503?v=4" alt="me"/>
        </div>
      </div>
    </div>
  );
}