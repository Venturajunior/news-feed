import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/66809449" />
          <div className={styles.authorInfo}>
            <strong>Ventura J</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title='06 de Julho, 2017, às 14h' dateTime='2022-07-06 14:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário!' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}