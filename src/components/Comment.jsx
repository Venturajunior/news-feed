import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/66809449" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Ventura Junior</strong>
              <time title='06 de Julho, 2017, às 14h' dateTime='2022-07-06 14:00:00'>Publicado há 1h</time>
            </div>

            <button title='Apagar comentário'>
              <Trash size={20} />
            </button>

          </header>

          <p>Muito bem, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}