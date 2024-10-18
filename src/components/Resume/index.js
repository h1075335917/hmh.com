import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.sidebar}>
        <img
          src="https://github.com/mhuahe.png"
          alt="头像"
          className={styles.avatar}
        />
        <h2>贺敏华</h2>
        <p>Java开发者</p>
        <div className={styles.contactInfo}>
          <p>邮箱: h1075335917@gmail.com</p>
          <p>电话: +86 17746684414</p>
          <p>生日: 1999年04月25日</p>
          <p>地址: 深圳市</p>
        </div>
        <div className={styles.socialLinks}>{/* 添加社交媒体链接 */}</div>
      </div>
      <div className={styles.mainContent}>
        <section>
          <h2>关于我</h2>
          <p>Java开发者。</p>
        </section>
        <section>
          <h2>我的技能</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>网页设计</h3>
              <p>专业水平的现代化高质量设计。</p>
            </div>
            <div className={styles.skillCard}>
              <h3>网页开发</h3>
              <p>专业水平的高质量网站开发。</p>
            </div>
            <div className={styles.skillCard}>
              <h3>移动应用</h3>
              <p>iOS和Android应用的专业开发。</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
