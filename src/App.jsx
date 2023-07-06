import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ventura Junior"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio possimus, enim asperiores quia similique reprehenderit, ratione ullam ipsum nemo sed repellendus, modi itaque cumque magni. Quasi eum omnis doloremque officiis."
          />
        </main>
      </div>
    </>
  )
}
