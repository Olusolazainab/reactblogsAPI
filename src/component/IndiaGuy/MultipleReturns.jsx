import React, { useState } from 'react'

function MultipleReturns ()
{
    const [ loading, setLoading ] = useState(false);

    if (loading)
    {
        return <>
            <h2>Loading</h2>
        </>
    }
  return (
    <>
      <h2>Multiple Loading</h2>
    </>
  )
}

export default MultipleReturns
