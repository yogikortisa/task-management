
// export default function index() {
//   return (
//     <div>index</div>
//   )
// }


// function index() {
//   return (
//     <div>index</div>
//   )
// }

// export default index


const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{text}</button>
  )
}

export default Button