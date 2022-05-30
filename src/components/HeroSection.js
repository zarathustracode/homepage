import Plot from 'react-plotly.js'
import { useState, useEffect } from "react"

const HeroSection = () => {
  const [neuron_parameters, setNeurons] = useState({'mean': 0, 'variance': 1});

  const [data, setData] = useState({"membrane potential values": [], "probability distribution": [], "probability flux": []
});

  const fetchData = async () => {
    const response = await fetch("http://ec2-35-157-18-0.eu-central-1.compute.amazonaws.com:8000/neuron",{
      method: "POST",
      body: JSON.stringify(neuron_parameters),
      headers: {
        "Content-Type": 'application/json'}})
    const data = await response.json()
    setData(data)
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
    <div className="text-center">
      <h1>AI IS FOR EVERYONE</h1>
      <p>Join the AI revolution!</p>
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
          width: 600, height: 400,
          title: 'Equilibrium distribution of LIF neuron',
          xaxis: {title: "Membrane Potential", showgrid: false, zeroline: false},
          yaxis: {title: "Probability", showgrid: false, zeroline: false},
          yaxis2: {title: "Flux", showgrid: false, zeroline: false, side: 'right',overlaying: 'y'},
          legend : { x:1, y:0 }, } }
        config={ {scrollZoom: true, editable: true, displayModeBar: false, responsive: true } }
      />
      <form>
        <label>
          Mean:
          <input className= "text-black" type="number" value={neuron_parameters['mean']} onChange={e => setMean(e)}/>
        </label>
        <label>
          Variance:
          <input className= "text-black" type="number" value={neuron_parameters['variance']} onChange={e => setVar(e)}/>
        </label>
      </form>

    </div>
  )
}

export default HeroSection;
