import React, { useEffect, useRef, useState } from 'react';
import styles from './login.module.scss';

const IMAGES = [
  new URL('../../assets/login_animation/book1.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book2.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book3.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book4.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book5.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book6.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book7.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book8.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book9.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book10.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book11.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book12.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book13.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book14.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book15.png', import.meta.url).href,
  new URL('../../assets/login_animation/book16.png', import.meta.url).href,
  new URL('../../assets/login_animation/book17.png', import.meta.url).href,
  new URL('../../assets/login_animation/book18.jpg', import.meta.url).href,
  new URL('../../assets/login_animation/book19.png', import.meta.url).href,
  new URL('../../assets/login_animation/book20.png', import.meta.url).href,
];

const LoginBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<number>(5);
  const [columns, setColumns] = useState<number>(10);

  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      if (width <= 1024) {
        setColumns(5);
        setRows(3);
      } else {
        setColumns(10);
        setRows(5);
      }
    };
    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  const totalImages = rows * columns;
  const loopedImages = [...Array(totalImages)].map((_, idx) => IMAGES[idx % IMAGES.length]);
  console.log(loopedImages);

  return (
    <div className={styles.auth_bg} ref={containerRef}>
      {Array.from({ length: rows }).map((_, rowIdx) => (
        <div key={rowIdx} className={styles.bg_row} style={{ animationDelay: `${rowIdx * 2}s` }}>
          {loopedImages.slice(rowIdx * columns, (rowIdx + 1) * columns).map((src, idx) => (
            <img key={idx} src={src} className={styles.bg_img} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LoginBackground;