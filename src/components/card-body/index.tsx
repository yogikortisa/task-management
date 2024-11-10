interface CardBodyProps {
    price: number
    discount: number
    caption: string
}

export default function CardBody({ price, discount, caption }: CardBodyProps) {
  return (
    <>
    <p>Harga: {price}</p>
    <p>Diskon: {discount}</p>
    <p>Keterangan: {caption}</p>
    </>
  )
}
