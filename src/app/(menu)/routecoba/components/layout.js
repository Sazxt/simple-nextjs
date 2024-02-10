"use client"
import styles from '@/app/page.module.css'
export default function Layout({ children }) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}