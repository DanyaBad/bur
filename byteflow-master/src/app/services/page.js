"use client";

import styles from '@/styles/services.module.css';
import { useEffect, useState } from 'react';

export default function Services() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const query = new URLSearchParams(window.location.search);

            
            const recipient = query.get('recipient');
            const hobby = query.get('hobby');
            const type = query.get('type');
            const time = query.get('time');
            const money = query.get('money');

            try {
                
                const response = await fetch(
                    `/api/products?recipient=${recipient}&money=${money}`
                );
                const data = await response.json();
                
                
                setProducts(data.slice(0, 3)); 
            } catch (error) {
                console.error('Ошибка загрузки данных:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <main className={styles.HomeMain}>
            <h1>Рекомендуем подарки</h1>
            <section className={styles.ProductsSection}>
                {loading ? (
                    <p>Загрузка...</p>
                ) : products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.ID_Product} className={styles.ProductCard}>
                            {}
                            <img 
                                src={product.URL_Product_Photo} 
                                alt={product.Name_Product} 
                                className={styles.ProductImage}
                            />
                            <h2>{product.Name_Product}</h2>
                            <p>Цена: {product.Price_Product} ₽</p>
                            <a 
                                href={product.URL_Product} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.ProductLink}
                            >
                                Подробнее
                            </a>
                        </div>
                    ))
                ) : (
                    <p>Нет подходящих товаров</p>
                )}
            </section>
        </main>
    );
}
