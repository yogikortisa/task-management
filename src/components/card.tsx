// import Button from "./button"
import CardBody from "./card-body"
import ImageList from "./image-list"

interface CardProps {
  title: string
  description: string
  image: string
  price: number
  discount: number
  caption: string
}

function Card({ title, description, image, price, discount, caption }: CardProps) {
  
  return (
    <>
      <div className="bg-pink p-4 rounded-md shadow-md h-[450px] w-[300px]">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <ImageList url={image} />
        <CardBody price={price} discount={discount} caption={caption} />
      </div>
      {/* <h1>{title}</h1>
      <p>{description}</p> 
      <img src={image} alt="image" />
      <Button text={title} /> */}
    </>
  )
}

export default Card