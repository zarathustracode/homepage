import pic from "../assets/images/fig_engram.png"

const Homeaostasis = () => {
  return (
    <div className="relative w-4/5 
    m-auto mt-12 md:text-justify lg:text-justify">
      <br></br>
      <h1>
        Engrams and structural plasticity
      </h1>
      <br></br>
      <p className="text-lg text-gray-900">
        Memories are thought to be stored in groups of strongly connected neurons, or engrams.
        Much effort has been put into understanding engrams, but currently there is no
        definitive consensus about how they are formed. Hebbian plasticity was proposed to
        underlie engram formation. Hebbian plasticity occurs when synaptic weights are
        strengthened between pairs of neurons with correlated activity. Hebbian plasticity,
        therefore, is thought to rely on a mechanism that can detect correlation between
        neurons. However, the increased synaptic weight implies increased correlation, which
        creates a positive feedback loop that can lead to runaway growth. Avoiding such an
        unfavorable condition would require regulatory mechanisms that are much faster than
        the ones which have been observed in the brain. Here we show that a structural
        plasticity rule that is based on firing rate homeostasis can also lead to the formation of
        engrams. In this case, engram formation does not rely on a mechanism that traces
        correlation. Instead, stronger connectivity between correlated neurons emerges as a
        network effect, based on self-organized rewiring. Our work (<cite className="text-blue-700 not-italic"><a href="https://doi.org/10.1371/journal.pcbi.1009836">
        Gallinaro, Gašparović & Rotter 2022</a></cite>) proposes a different
        possibility how engrams could be created. This new perspective could be instrumental
        for better understanding the process of memory formation.
      </p>
      <br></br>
      <p className="text-lg text-gray-900">
      You can find the entire implementation in the following <a className="text-blue-700" href='https://github.com/zarathustracode/Linear-Response-of-LIF-neurons'>Github repository</a>.
      </p>
      <br></br>
      <figure className="relative w-4/5 m-auto">
        <img src={pic} className="relative w-full" />
        <figcaption className="text-lg text-gray-900">
        Formation of memory engrams in a neuronal network with homeostatic
        structural plasticity. (A) In a classical conditioning scenario, an unconditioned stimulus
        (US) was represented by a group of neurons that were connected to a readout neuron
        (yellow) via static synapses. The readout neuron spiked whenever neuronal activity
        representing the US was above a certain threshold (top). During a conditioning protocol,
        two other groups of neurons (CS1 and CS2) were chosen to represent two different
        conditioned stimuli (bottom). (B) During stimulation, the external input to a specific
        group of neurons was increased. The color marks indicate when each specific group was
        being stimulated. During the “encoding” phase, CS1 was always stimulated together
        with US, and CS2 was always stimulated alone. The time axis matches that of panel C
        (top). (C) Firing rate (top) and spike train (bottom) of the readout neuron. Before the
        paired stimulation (“baseline”), the readout neuron responded strongly only upon direct
        stimulation of the neuronal ensemble corresponding to the US. After the paired
        stimulation (“retrieval”), however, a presentation of C1 alone triggered a strong response
        of the readout neuron. This was not the case for a presentation of C2 alone. (D) Coarse
        grained connectivity matrix. Neurons are divided into 10 groups of 100 neurons each,
        shown is the average connectivity within each group. After encoding, the connectivity
        matrix indicates that engrams were formed, and we found enhanced connectivity within
        all three ensembles as a consequence of repeated stimulation. Bidirectional
        inter-connectivity across different engrams, however, is only observed for the pair C1-US
        that experienced paired stimulation. (E) Average connectivity as a function of time.
        The connectivity dynamics shows that engram identity was strengthened with each
        stimulus presentation, and that engrams decayed during unspecific external stimulation.
        </figcaption>
      </figure>
      <br></br>
      <p className="text-lg text-gray-900">
      René Descartes already proposed a theory of memory, paraphrased in <cite className="text-blue-700 not-italic"> <a href="https://doi.org/10.1016/j.conb.2017.06.006">Mongillo et al. 2017</a></cite>: 
      Putting needles through a linen cloth would leave traces in the cloth that either stay open, or can more easily be opened again. 
      Richard Semon, who originally coined the term ``engram'' in his book 
      <cite><a className="text-blue-700 not-italic" href="https://archive.org/stream/cu31924100387210#page/n31/mode/2up"> The Mneme </a></cite>
      (see 
       <cite className="text-blue-700 not-italic"><a href="https://doi.org/10.1038/nrn4000"> Josselyn et al. 2015</a></cite> for more details),
       proposes that an engram is a ``permanent record'' formed after a stimulus impacts an ``irritable substance''. 
       Putting these two ideas together, we can think of Descartes' needles not to penetrate an inanimate linen cloth,
        but a living brain, the irritable substance. In this case, we should expect the formation not of permanent holes,
         but of scar tissue, which grows further by repeating the procedure. Therefore, the memory of the system nothing else but a ``scar'' left by sensory experience.
          We think that this is a good metaphor for the type of memories described in our paper,
           formed through homeostatically controlled structural plasticity.
            Interestingly, this model was originally meant as a model for rewiring after lesion <cite className="text-blue-700 not-italic"><a href="https://doi.org/10.3389/fnana.2014.00115">Butz2013</a></cite>.
             In our work, however, the ``lesion'' is imposed by stimulation, which induces phenomena similar to scar formation. 
             The dynamics of this healing process is very universal, where resources from the whole network are used to fix a local problem leading to a scar.
              A perturbation introduces heterogeneity in a previously homogeneous organic substrate.
      </p>
      <br></br>

    </div>
  )
}

export default Homeaostasis