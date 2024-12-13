"use client";

import styles from '@/styles/home.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  const NavCreate = () => {
    router.push('/create');
  };

  const NavServices = () => {
    router.push('/services');
  };

  return (
    <main className={styles.HomeMain}>
      <section className={styles.HeroSection}>
        <div className={styles.PresText}>
          <h3>Генератор идей</h3>
          <p>Для подарков</p>
          <h3>Пройдите мини-тест и генератор сделает все за вас!</h3>
          <div className={styles.languageSwitcher}>
            <button onClick={NavCreate}>Вперед!</button> {}
          </div>
        </div>

        {}
        <div className={styles.SearchContainer}>
          <input 
            type="text" 
            className={styles.SearchInput} 
            placeholder="Поиск..." 
          />
          <button className={styles.SearchButton}>
            🔍
          </button>
        </div>
      </section>
    </main>
  );
}
