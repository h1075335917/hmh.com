import React, { useState, useEffect } from 'react'
import { useRunner } from 'react-runner'

const ReactRunner = ({ initialCode = '<><div>hello</div><div>react-runner</div></>', scope }) => {
  const [code, setCode] = useState(initialCode)
  const { element, error } = useRunner({ code, scope })

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  return (
    <>
      <textarea
        value={code}
        onChange={event => setCode(event.target.value)}
        style={{ width: '100%', height: '200px' }}
      />
      <div>{element}</div>
      {error && element && <pre>{error}</pre>}
    </>
  )
}

export default ReactRunner;
