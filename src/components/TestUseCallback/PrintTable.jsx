import React, { useEffect, useState } from 'react'

const PrintTable = (props) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(props.calculateTable())
    }, [props.calculateTable])

  return (
    rows.map((rows, index) => {
        return <p key={index}>{rows}</p>;
    })
    )
}

export default React.memo(PrintTable)