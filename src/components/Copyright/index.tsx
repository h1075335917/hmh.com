import React from 'react'

type CopyrightItem = {
  behavior: string;
  description: string | string[];
  url: string | string[];
};

export default function Copyright({ behavior, description, url }: CopyrightItem): React.ReactElement {
  const descriptions = Array.isArray(description) ? description : [description];
  const urls = Array.isArray(url) ? url : [url];

  return (
    <p>
      © {new Date().getFullYear()} mhuahe. {behavior} with&nbsp;
      {descriptions.map((desc, index) => (
        <React.Fragment key={index}>
          {index > 0 && ' 、'}
          <a href={urls[index].trim()} target="_blank" rel="noopener noreferrer">
            {desc.trim()}
          </a>
        </React.Fragment>
      ))}
      .
    </p>
  )
}
