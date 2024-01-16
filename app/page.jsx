'use client'
import styles from './page.module.css'
import BurgerMenu from '@/components/burgerMenu'

export default function Home() {

  const colors = ['red', 'green', 'yellow', 'blue']

  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <BurgerMenu/>
      </nav>
    </main>
  )
}
