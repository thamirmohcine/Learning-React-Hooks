import React, { useEffect, useState } from 'react'

const PrintTable = (props) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(calculateTable())
    }, [calculateTable])

  return (
    rows.map((rows, index) => {
        return <p key={index}>{rows}</p>;
    })
    )
}

export default PrintTable