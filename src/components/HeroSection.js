import Plot from 'react-plotly.js'

const HeroSection = () => {
  const neuron_parameters = {'mean': 1, 'variance': 1};

  // fetch("http://0.0.0.0:8000/neuron", {
  // body: JSON.stringify(neuron_parameters),
  // headers: {
  //   "Accept": "application/json",
  //   "Content-Type": "application/json"
  // },
  // method: "POST",
  // mode: "no-cors"}).then(response=>(console.log(response.url)));

  var response = fetch("http://0.0.0.0:8000/get_stationary_diststribution/random/?mean_val=0&variance_val=1", {
  headers: {
    "Accept": "application/json",
  },
  method: "GET",
  mode: "no-cors"}).then(response => response.text()).then(data => {console.log(data)});

  console.log(response)
  console.log("Kurac")

  return (
    <div className="text-center">
      <h1>AI IS FOR EVERYONE</h1>
      <p>Join the AI revolution!</p>
      <Plot
        data={[
          {
            x: [...Array(20).keys()],
            y: [...Array(20).keys()].map(value=>value*value),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', mode: 'lines+markers',x: [...Array(20).keys()], y: [...Array(20).keys()].map(value=>10*value-0.1*value*value)},
        ]}
        layout={ {width: 600, height: 400, title: 'Membrane Potential', legend : { x:1, y:0 }, } }
        config={ {scrollZoom: true, editable: true, displayModeBar: false } }
      />
    </div>
  )
}

export default HeroSection;
