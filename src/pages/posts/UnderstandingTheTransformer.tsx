

const UnderstandingTheTransformer = () => {
    return (
        <div className='mb-20'>
            <div className='mx-auto max-w-[60rem] mt-10 px-5'>
                {/* heading */}
                <h1 className='font-bold text-2xl'>Understanding the Transformer</h1>
                <div className='italic mt-1'>This is a writeup discusses the nuances of training Large Language Models using platforms like LangChain, gaining insights into customizing model behavior, the challenges faced, and best practices to achieve optimal results.</div>
                {/* <img src={langchainImage} className='h-60 mx-auto' /> */}


                {/* section 1 */}
                <h2 className='font-bold text-xl'>What was wrong with NLP before the transformers?</h2>
                <div className='mt-5'>Prior to the advent of the transformer architrecture, the standard nural network models were: RNNs, LSTMs, and GRUs. However, these models came with heavy drawbacks.</div>
                <div className='mt-5'>Recurrent Neural Networks (RNNs) have several drawbacks. They suffer from vanishing and exploding gradient problems, making them challenging to train on long sequences. Additionally, their hidden state has a limited capacity to capture long-term dependencies, often forgetting distant information in sequences. Moreover, RNNs inherently process sequences in a step-by-step manner, which restricts parallel processing and extends training times. Long Short-Term Memory networks (LSTMs), an evolution of RNNs, addressed some of these issues but introduced their own challenges. LSTMs have a more complex structure with additional parameters, leading to increased computational costs. Similarly, Gated Recurrent Units (GRUs), while simpler than LSTMs, still present a trade-off between complexity and performance, and like their predecessors, are bound by the constraints of sequential computation.</div>

                <div className='mt-5'>The solution to all this? You guessed it, the transformer.</div>

                <h2 className='font-bold text-xl mt-10'>The main idea of the transformer</h2>
                {/* <img src={langchainDiagram} className='h-60 mx-auto my-5' /> */}

                <div className='mt-1'>At a high level, the transformer's central mechanism is the self-attention mechanism that allows it to weigh the importance of different parts of an input sequence when producing an output sequence. This attention mechanism is used in both the encoder and decoder parts of the original transformer for machine translation. For models like GPT (which only uses the decoder) and BERT (which only uses the encoder), they employ variations of this architecture.</div>
                

                <h2 className='font-bold text-xl mt-10'>Lets dig into the code!</h2>

                <div className='mt-2'>We are going to start off by installingt he necessary libraries to get started: langchain, openai, and pypdf2.</div>

                <div className='font-mono text-xs my-2'>
    

                </div>

                <div className='mt-2'>Chunking and embedding data: For the purposes of this article, I will be using the "Attention is All You Need" paper to train our LLM. You can substitute this pdf for any of your own data and the end result will be the same.</div>

                <div className='font-mono text-xs my-2'>
  
                </div>

                <div className='my-2'>now that we have the document text we can proceed to chunking the data</div>

                <div className='font-mono text-xs my-2'>
     
                </div>

                <div className='my-2'>With the document chunks now in hand we can now create vectorize the documents and store them to a vector DB. Luckily, langchain has made this easy for us with their api.</div>

                <div className='font-mono text-xs my-2'>
  
                </div>

                <div className='my-2'>Now that we have stored the embeddings, there should be a ChromaDB folder which will act as the persisted vector DB from which we will search and query from.</div>

                <div className='my-2'>To test wether our DB has properly stored our data, we can send a query to the db. If the data has been stored properly, the returned docs should be relavant to the query.</div>

                <div className='font-mono text-xs my-2'>
            
                </div>

                <div className='my-2'>Now that we have confirmed that the DB is working correctly, we can get to the final step, chatting with our data. We will now load our GPT model, send a query and use the information from relavant documents to answer the question or respond to the query.</div>

                <div className='font-mono text-xs my-2'>
                    
                </div>

                <h2 className='font-bold text-xl mt-10'>Conslusion</h2>

                <div className='mt-2'>That's it! If you've followed along this far, shouldve gotten a working pipeline from start to finish which trains and tests a trained LLM model.</div>


            </div>
        </div>
    )
}

export default UnderstandingTheTransformer