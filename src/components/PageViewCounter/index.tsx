import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';
import { CounterTheme } from './types';

export default function PageViewCounter() {
  const location = useLocation();

  const formatPath = (path: string) => {
    // 获取当前域名和端口
    const hostname = window.location.hostname;
    const port = window.location.port;
    // 格式化域名
    const formattedHostname = hostname === 'localhost' 
      ? '127.0.0.1.' + port
      : hostname;
    // 移除开头和结尾的斜杠
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // 如果路径为空（即首页），返回 'home'
    if (!trimmedPath) return formattedHostname + '.home';
    // 将剩余的斜杠替换为点
    let formattedPath = trimmedPath.replace(/\//g, '.');
    // 如果长度超过24，截取最后24个字符
    const maxLength = 24 - formattedHostname.length;
    if (formattedPath.length > maxLength) {
      formattedPath = formattedPath.slice(-maxLength);
    }
    return formattedHostname + '.' + formattedPath;
  };

  // 生成计数器路径
  const pageId = formatPath(location.pathname);
  const theme = CounterTheme.Moebooru;
  const path = `https://count.getloli.com/@mhuahe.${pageId}?theme=${theme}&padding=7&offset=0&scale=1&pixelated=1&darkmode=auto`;

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