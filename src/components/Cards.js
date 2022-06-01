import Card from './Card'
import pic1 from "../assets/images/fig_limit-cycle.png"
import pic2 from "../assets/images/fig_learning.png"
import pic3 from "../assets/images/fig_oscillations.png"

const Cards = () => {
  return (
    <div className='text-center'>
      <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Web apps and research projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Development of software for modeling biological neural networks, where I have implemented Python/C++ modules that were successfully deployed in a university cluster. 
          </p>
        </div>

      <div className="lg:flex md:cal-span-3">
          <Card href='/neural-response' description='FastAPI backend of Python/C++ module' src={pic1}/>
          <Card href='/graphs' description='Machine learning on biological graphs' src={pic2}/>
          <Card href='/learning' description='Data science of dynamical networks' src={pic3}/>
      </div>
    </div>
  )
}

export default Cards