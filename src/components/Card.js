import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className='text-center m-4 lg:w-1/3'>
      <Link to={props.href}>
        <figure className="relative cursor-pointer">
          <img className='inline rounded-lg shadow-xl hover:shadow-2xl' src={props.src} />
        </figure>
      </Link>
      <div>
          <h5>
            {props.description}
          </h5>
        </div>
    </div>
  )
}

export default Card