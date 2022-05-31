import Card from './Card'
import pic1 from "../assets/images/fig_limit-cycle.png"
import pic2 from "../assets/images/fig_learning.png"
import pic3 from "../assets/images/fig_oscillations.png"

const Cards = (props) => {
  return (
    <div className='text-center'>
      <h1>{props.title}</h1>
      <div className="lg:flex md:cal-span-3">
          <Card href='/neural-response' description='FastAPI backend of Python/C++ module' src={pic1}/>
          <Card href='/graphs' description='Machine learning on biological graphs' src={pic2}/>
          <Card href='/learning' description='Data science of dynamical networks' src={pic3}/>
      </div>
    </div>
  )
}

export default Cards