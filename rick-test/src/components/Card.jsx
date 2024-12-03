import Image from "next/image";

export default function Card({ name, image, species, gender }) {
  return (
    <div>
      <Image src={image} alt={name} width={100} height={100} />
      <h2>{name}</h2>
      <h3>{species}</h3>
      <h4>{gender}</h4>
    </div>
  )
}
