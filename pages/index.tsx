import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Notification from "../components/notification"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Notification />
        <h2>Home Page</h2>
      </main>
    </div>
  )
}
