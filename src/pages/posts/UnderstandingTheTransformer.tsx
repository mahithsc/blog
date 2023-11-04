import transformers from '../../images/transformers.jpg'
import dinoModels from '../../images/dinoModels.jpg'
import transformerModel from '../../images/transformerModel.jpg'

const UnderstandingTheTransformer = () => {
    return (
        <div className='mb-20'>
            <div className='mx-auto max-w-[60rem] mt-10 px-5'>
                {/* heading */}
                <h1 className='font-bold text-3xl'>Understanding the Transformer</h1>
                <div className='italic mt-1'>In this post we will try to understand the inner workings of the transformer. We will step thorugh each part of the transformer, understanding the purpose it serves to the functionality of the transformer.</div>
                <img src={transformers} className='h-72 mx-auto' />


                {/* whats wrong with NLP? */}
                <h2 className='font-bold text-xl mt-5'>What was wrong with NLP before the transformers?</h2>
                <img src={dinoModels} className='max-h-60 mx-auto' />
                <div className='mt-1'>Prior to the advent of the transformer architrecture, the standard nural network models were: RNNs, LSTMs, and GRUs. However, these models came with heavy drawbacks.</div>
                <div className='mt-2'>Recurrent Neural Networks (RNNs) have several drawbacks. They suffer from vanishing and exploding gradient problems, making them challenging to train on long sequences. Additionally, their hidden state has a limited capacity to capture long-term dependencies, often forgetting distant information in sequences. Moreover, RNNs inherently process sequences in a step-by-step manner, which restricts parallel processing and extends training times.</div>
                <div className="mt-2">Long Short-Term Memory networks (LSTMs), an evolution of RNNs, addressed some of these issues but introduced their own challenges. LSTMs have a more complex structure with additional parameters, leading to increased computational costs.</div>
                <div className="mt-2">Similarly, Gated Recurrent Units (GRUs), while simpler than LSTMs, still present a trade-off between complexity and performance, and like their predecessors, are bound by the constraints of sequential computation.</div>
                <div className='mt-2'>The solution to all this? You guessed it, the transformer.</div>

                <img src={transformerModel} className='max-h-72 mx-auto' />


                {/* the main idea of the transformer */}
                <h2 className='font-bold text-xl mt-10'>The MVP of the transformer</h2>
                <div className='mt-1'>At a high level, the transformer's central mechanism is the self-attention mechanism that allows it to weigh the importance of different parts of an input sequence when producing an output sequence. This attention mechanism is used in both the encoder and decoder parts of the original transformer for machine translation. For models like GPT and BERT, they employ variations of this architecture.</div>

                <div className='mt-2'>Now that we have a very generic understanding of the transformer lets step through each part of the transformer and digest it.</div>

                 {/* the main idea of the transformer */}
                 <h2 className='font-bold text-xl mt-10'>Stepping through the transformer</h2>
                 <div className='mt-1 font-bold'>1. Input Embeddings</div>
                 <div className='mt-1'>Hello world</div>
                 <div className='mt-1 font-bold'>2. Positional Encoding</div>
                 <div className='mt-1'>Hello world</div>
                 <div className='mt-1 font-bold'>3. Attention mechanism</div>
                 <div className='mt-1'>Hello world</div>
                


            </div>
        </div>
    )
}

export default UnderstandingTheTransformer