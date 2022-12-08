import React, { useState, useEffect} from 'react'

function DemoPage({ title }) {
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    let timeoutId = setTimeout(() => {
        setIsLoading(false)
    }, 5000);

    return () => {
        clearTimeout(timeoutId)
        setIsLoading(false)
    }
  }, [title])

  if(isLoading) return (<div>{title} is loading</div>)
  else return (<div>{title} is ready</div>)
}

export default DemoPage