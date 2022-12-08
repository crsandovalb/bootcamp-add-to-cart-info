import React from 'react'

const Totalizers = (totalizers: any) => {
    const {id, name, value} = totalizers.total;
    console.log("Mis totales son igual a ", id, name, value)
    return (
        <div>
            <div>
                 <p>Tenemos x Items en tu compra</p>
                 <p>Total: {totalizers[0]?.value}</p>
            </div>
        </div>
    )
}

export default Totalizers