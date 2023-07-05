import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Ventura Junior"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio possimus, enim asperiores quia similique reprehenderit, ratione ullam ipsum nemo sed repellendus, modi itaque cumque magni. Quasi eum omnis doloremque officiis."
      />
    </>
  )
}
