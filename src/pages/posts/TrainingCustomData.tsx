import langchainImage from '../../images/langchain.png'
import langchainDiagram from '../../images/langchain_diagram.jpg'

const TrainingCustomData = () => {
    return (
        <div>

            <div className='mx-auto max-w-[60rem] mt-10 px-2'>
                {/* heading */}
                <h1 className='font-bold text-2xl'>Training LLMs on Custom Data</h1>
                <div className='italic mt-1'>This is a writeup discusses the nuances of training Large Language Models using platforms like LangChain, gaining insights into customizing model behavior, the challenges faced, and best practices to achieve optimal results.</div>
                <img src={langchainImage} className='h-60 mx-auto' />


                {/* section 1 */}
                <h2 className='font-bold text-xl'>Why do we need this process to begin with?</h2>
                <div className='mt-1'>The question arises as to why we need to "custom train" LLMs. Why can't we just hand ChatGPT or any LLM for the matter our data and ask to make sense of it. Well the answer is pretty simple, this method would work for smaller chunks of data, but if you had an entire textbook worth of data, it would be too much for the LLM to handle at once. To get around this influx of dta, we use vector stores or vector DBs to store our data and index them.</div>

                <h2 className='font-bold text-xl mt-10'>What is the general process of training an LLM</h2>
                <img src={langchainDiagram} className='h-60 mx-auto my-5' />

                <div className='mt-1'>The diagram above displays the process of training an LLM on custom data. We will walk through it step by step, understanding whats happening and why it is happening.</div>
                <div className='mt-2'>1. The user supplies documents. The documents are then chunked into array of similar length texts. Embeddings are then generated on this array of texts. We initially chunk the data into an array of similar length texts because it provides for more efficient data retrival which we will see later on. Since </div>
                <div className='mt-2'>2. The user supplies documents. The documents are then chunked into array of similar length texts. Embeddings are then generated on this array of texts. We initially chunk the data into an array of similar length texts because it provides for more efficient data retrival which we will see later on. Since computer understand words and not numbers we vectorize the chunks of texts using an embeddings such as OpenAI embeddings or HuggingFace embeddings.</div>
                <div className='mt-2'>3. Once embeddings are generated, they are stored to a vector Db such as ChromaDB or Pinecone. Storing embeddings to vector DB makes it possible to retrieve relavent chunks of data repersented as embeddings.</div>
                <div className='mt-2'>4. The user enters their question/prompt. This input is then vectorized using embeddings and used to search the vector DB for relavant chunks of data.</div>
                <div className='mt-2'>5. Finally, the retruned chunks of data as passed into the LLM along with the original prompt in order to generate a response.</div>

                <h2 className='font-bold text-xl mt-10'>Lets dig into the code!</h2>
                


            </div>


        </div>
    )
}

export default TrainingCustomData