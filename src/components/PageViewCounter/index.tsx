import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

export default function PageViewCounter() {
  const location = useLocation();

  const formatPath = (path: string) => {
    // 移除开头和结尾的斜杠
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // 如果路径为空（即首页），返回 'home'
    if (!trimmedPath) return 'home';
    // 将剩余的斜杠替换为点
    let formattedPath = trimmedPath.replace(/\//g, '.');
    // 如果长度超过25，截取最后25个字符
    if (formattedPath.length > 25) {
      formattedPath = formattedPath.slice(-25);
    }
    return formattedPath;
  };

  // 生成计数器路径
  const pageId = formatPath(location.pathname);
  const path = `https://count.getloli.com/@mhuahe.${pageId}?theme=random&padding=7&offset=0&scale=1&pixelated=1&darkmode=auto`;

  useEffect(() => {
    // 创建图片元素来触发计数器
    const img = new Image();
    // 使用当前页面路径作为计数器的名称
    img.src = path;
  }, [location.pathname]); // 当路径改变时重新触发

  return (
    <div className={styles.pageViewCounter}>
      <img
        src={path}
        alt="页面访问计数器"
      />
    </div>
  );
} 