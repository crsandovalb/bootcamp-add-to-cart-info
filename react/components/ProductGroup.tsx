import React from "react"

type Props = {
    products: []
}

const ProductGroup = ({products}:Props) => {
    console.log("Mis productos en product group", products)
    return (
        <div>
            Mi listado de productos
        </div>
    )
}

export default ProductGroup