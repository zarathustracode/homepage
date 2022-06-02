import Plot from 'react-plotly.js'
import { useState, useEffect } from "react"
import Simulations from "../components/Simulations";
import Header from "../components/Header";
import React from 'react'
import Markdown from '../components/Markdown';

const NeuralResponse = () => {

  const [simulations, setSimulations] = useState(
    [
        {
            id: 1,
            text: "LIF simulation",
            day: "May 20th at 2:00 pm",
            done: true
        },
        {
            id:2,
            text: "PPO3 simulation",
            day: "May 20th at 5:00 pm",
            done: false
        },
        {
            id:3,
            text: "GPT simulation",
            day: "May 10th at 5:00 pm",
            done: true
        },
    
    ]
)

  const deleteTask = (id) => {
    setSimulations(simulations.filter((task)=>task.id !== id))
  }

  const [neuron_parameters, setNeurons] = useState({'mean': 0, 'variance': 1});

  const initialData = require('./../assets/response_data.json');

  const [data, setData] = useState(initialData);

  const fetchData = async () => {
    const response = await fetch("http://ec2-35-157-18-0.eu-central-1.compute.amazonaws.com:8000/neuron",{
      method: "POST",
      body: JSON.stringify(neuron_parameters),
      headers: {
        "Content-Type": 'application/json'}})
    const data = await response.json()
    if (data.ok){
      setData(data);}
  }

  useEffect(() => fetchData(), []);

  const setMean = (e) => {
    const newNeuron = {'mean': parseFloat(e.target.value), 'variance': data['variance']};
    setNeurons(newNeuron);
    fetchData();
  }

  const setVar = (e) => {
    const newNeuron = {'mean': data['mean'], 'variance': parseFloat(e.target.value)};
    setNeurons(newNeuron);
    fetchData();
  }

  return (
    <>
          <div className="relative w-4/5 m-auto mt-12 md:text-justify lg:text-justify">
        <br></br>
        <h1>
          Building FastAPI backend for Python/C++ scientific module
        </h1>
        <br></br>
        <p className="text-lg text-gray-900">
        Even the best algorithms developed by scientists have a long way to go till real world application. 
        Fortunately, today there are many tools that shorten that path.
        On this page I will demonstrate how to implement a fast algorithm to calculate the response of a biological neuron. 
        The implementation will be in <span className="font-bold text-black">Python</span> and <span className="font-bold text-black">C ++</span>. 
        We will then make an endpoint API using <span className="font-bold text-black">FastAPI</span>. Finally, we will visualize the results using the <span className="font-bold text-black">plotly.js</span> library.
        You can find the entire implementation in the following <a className="text-blue-700" href='https://github.com/zarathustracode/Linear-Response-of-LIF-neurons'>Github repository</a>.
        </p>
        <br></br>
        <figure className="relative w-4/5 m-auto">
          <Plot
            data={[
              {
                x: data["membrane potential values"],
                y: data["probability distribution"],
                type: 'scatter',
                mode: 'lines+markers',
                name: 'Potential',
                marker: {color: 'red', size: 3},
                yaxis: 'y1'
              },
              {
                type: 'scatter',
                mode: 'lines+markers',
                x: data["membrane potential values"],
                y: data["probability flux"],
                name: "Flux",
                marker: {size: 1},
                yaxis: 'y2'
              },
            ]}
            layout={ {
              autosize: true,
              title: 'Equilibrium distribution of LIF neuron',
              xaxis: {title: "Membrane Potential", showgrid: false, zeroline: false, range: [0,20]},
              yaxis: {title: "Probability", showgrid: false, zeroline: false},
              yaxis2: {title: "Flux", showgrid: false, zeroline: false, side: 'right',overlaying: 'y'},
              legend : { x:1, y:0 },
            } }
            config={ {scrollZoom: true, editable: true, displayModeBar: false, responsive: true} }
            useResizeHandler={true}
            style={{width: '100%', height: '100%'}}
          />
          {/* <form>
          <label>
            Mean:
            <input className= "text-black" type="number" value={neuron_parameters['mean']} onChange={e => setMean(e)}/>
          </label>
          <label>
            Variance:
            <input className= "text-black" type="number" value={neuron_parameters['variance']} onChange={e => setVar(e)}/>
          </label>
        </form> */}
        </figure>
        <br></br>
        <p className="text-lg text-gray-900">
        The original algorithm is described in the following article:
        </p>
        <br></br>
        <figure className="text-lg text-gray-900">
          <blockquote className='bg-gray-200'>
          Integrate-and-fire models are mainstays of the study of single-neuron response properties and emergent states of recurrent networks of spiking neurons.
          They also provide an analytical base for perturbative approaches that treat important biological details, such as synaptic filtering, synaptic conductance increase,
            and voltage-activated currents. Steady-state firing rates of both linear and nonlinear integrate-and-fire models,
            receiving fluctuating synaptic drive, can be calculated from the time-independent Fokker-Planck equation.
              The dynamic firing-rate response is less easy to extract, even at the first-order level of a weak modulation of the model parameters
              , but is an important determinant of neuronal response and network stability. For the linear integrate-and-fire model the response
              to modulations of current-based synaptic drive can be written in terms of hypergeometric functions. For the nonlinear exponential 
              and quadratic models no such analytical forms for the response are available. 
              Here it is demonstrated that a rather simple numerical method can be used to obtain the steady-state and dynamic response for both linear and nonlinear models to parameter modulation in the presence of current-based or conductance-based synaptic fluctuations. To complement the full numerical solution, generalized analytical forms for the high-frequency response are provided. 
          A special case is also identified—time-constant modulation—for which the response to an arbitrarily strong modulation can be calculated exactly.
          </blockquote>
          <figcaption> — Magnus J. E. Richardson, <cite className="text-blue-700 not-italic"><a href="https://doi.org/10.1103/PhysRevE.76.021919">
          Phys. Rev. E 76, 021919 </a></cite> </figcaption>
        </figure>
        <br></br>
        <p className="text-lg text-gray-900">
        The idea of the algorithm is to integrate the membrane potential backwards using a probability current. 
        The heart of the algorithm is the following for loop implemented in Python:
        </p>
        <br></br>
        <code className="text-lg">
            <Markdown>
              {`
              for k in np.arange(n-1, 0,-1):    # integrate backwards from threshold

              j0[k-1]=j0[k] - int(k==kre+1);
              p0[k-1]=p0[k]*A[k] + dV*B[k]*tau*j0[k];
              `}
            </Markdown>
          </code>
          <br></br>
          <p className="text-lg text-gray-900">
          As we all know Python can be very slow with for loops, because of big overhead. 
          To make the algorithm much faster, we also implement it in C ++. Then interface the dynamic library with boost. 
          </p>
          <br></br>
          <code className="text-lg">
            <Markdown>
            {`
              for(std::size_t k=n-1; k>0;--k){
                  j0[k-1]=j0[k] - (int)(k==(kre+1));
                  p0[k-1]=p0[k]*A[k] + dV*B[k]*tau*j0[k]; //integrate backwards from threshold
              }
              `}
            </Markdown>
          </code>
        <br></br>
          <p className="text-lg text-gray-900">
          To make this result available to us in the browser, we used FastAPI. It require us just to make BaseModel and to expose an endpoint. 
          </p>
        <br></br>
        <code className="text-lg">
            <Markdown>
            {`
              class Current(BaseModel):
              mean: float = Field(gt=-10, le=10, default=1)
              variance: float = Field(ge=1, le=5, default=1)
              }
              @app.post('/neuron')

              async def membrane_potential(data: Current):
                  #data = data.dict()
                  data = jsonable_encoder(data)
                  mean = data['mean']
                  variance = data['variance']

                  V,P0,J0,r0 = LIF0(
                    tau=tau_mem, 
                    mu=mean,
                    sig=variance,
                    Vth=V_th, 
                    Vresting=V_resting,
                    Vre=V_reset,tau_ref=t_ref)

                  return {
                          'membrane potential values': list(V),
                          'probability distribution': list(P0),
                          'probability flux': list(J0)
                          }
              `}
            </Markdown>
          </code>
          <br></br>
        <p className="text-lg text-gray-900">
          Finally, to see the result we made a responsive graph, we must be able to use plotly.js with React. 
          This is done by seting responsive: true in config, and setting useResizeHandler to true. Now we can setup Dockerfile and we are done. 
        </p>
        <br></br>
          <code className="text-lg">
            <Markdown>
            {`
                <Plot
                data={[
                  {
                    x: data["membrane potential values"],
                    y: data["probability distribution"],
                    type: 'scatter',
                    mode: 'lines+markers',
                    name: 'Potential',
                    marker: {color: 'red', size: 3},
                    yaxis: 'y1'
                  },
                  {
                    type: 'scatter',
                    mode: 'lines+markers',
                    x: data["membrane potential values"],
                    y: data["probability flux"],
                    name: "Flux",
                    marker: {size: 1},
                    yaxis: 'y2'
                  },
                ]}
                layout={ {
                  autosize: true,
                  title: 'Equilibrium distribution of LIF neuron',
                  xaxis: {
                    title: "Membrane Potential", showgrid: false, zeroline: false
                  },
                  yaxis: {
                    title: "Probability", showgrid: false, zeroline: false
                  },
                  yaxis2: {
                    title: "Flux", showgrid: false, zeroline: false, side: 'right',overlaying: 'y'
                  },
                  legend : { x:1, y:0 }, } }
                config={
                   {scrollZoom: true, editable: true, displayModeBar: false, responsive: true} 
                  }
                useResizeHandler={true}
                style={{width: '100%', height: '100%'}}
              />
              }
              `}
            </Markdown>
          </code>
        <br></br>
      </div>
      {/* <div>
        <Header title= 'Leaky-integrate-and-fire'/>
        <h1 className='text-3xl font-sans'> Simple frontend </h1>
        {simulations.length > 0 ? <Simulations simulations={simulations} onDelete={deleteTask}/> : 'No simulations were run!'}
      </div> */}
    </>
  )
}

export default NeuralResponse;