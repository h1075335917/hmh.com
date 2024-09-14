import React from 'react'

type CopyrightItem = {
  behavior: string;
  description: React.ReactElement;
  url: string;
};

export default function Copyright ({ behavior, description, url }: CopyrightItem): React.ReactElement {
  return (
    <p>
      © ${new Date().getFullYear()} mhuahe. {behavior} with&nbsp;
      <a href={url} target="_blank" rel="noopener noreferrer">
        {description}.
      </a>
    </p>
  )
}
