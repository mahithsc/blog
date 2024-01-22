import { CodeBlock, atomOneLight } from "react-code-blocks"

const DocLLM = () => {
    const block1 = `
    pip install langchain openai pypdf2
    `

    const splittingCode = `
    import PyPDF2

    # storing all PDF text in content variable
    reader = PyPDF2.PdfReader(path)
    content = "\\n".join([page.extract_text() for page in reader.pages])
    `

    const chunk = `
    from langchain.text_splitter import RecursiveCharacterTextSplitter

    # function from langchain which splits the content into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        # Set a really small chunk size, just to show.
        chunk_size = 150,
        chunk_overlap  = 20,
        length_function = len,
        add_start_index = True,
    )

    # splitting the content into chunks
    docs = text_splitter.create_documents([content])
    `

    const embedAndStore = `
    from langchain.embeddings.openai import OpenAIEmbeddings

    # initialize the embeddings
    embeddings = OpenAIEmbeddings(openai_api_key=<OPENAI_API_KEY>)

    # passing in docs from the splitting step and storing the embeddings in db
    db = Chroma.from_documents(docs, embeddings)
    `

    const query = `
    query = <YOUR_QUERY>
    docs = db.similarity_search(query)
    `

    const queryAndAnswer = `
    # loading our model
    llm = OpenAI(model_name="gpt-3.5-turbo", openai_api_key=<OPENAI_API_KEY>)

    # q&a chain which can be used to ansewr questions provided similar docs
    chain = load_qa_chain(llm, chain_type="stuff")

    # finding the 3 most relavent document
    similar_docs = find_similiar_docs(query, k=3)

    # passing these documents as information for the LLM to answer
    answer = chain.run(input_documents=similar_docs, question=query)

    `


    return (
        <div className='mb-20'>
            <div className='mx-auto max-w-[60rem] mt-10 px-5'>
                {/* heading */}
                <h1 className='font-bold text-3xl'>DocLLM</h1>
                <div className='italic mt-1'></div>
                {/* <img src={langchainImage} className='h-60 mx-auto' /> */}


                {/* section 1 */}
                <h2 className='font-bold text-xl'>Why do we need this process to begin with?</h2>
                <div className='mt-1'>The question arises as to why we need to "custom train" LLMs. Why can't we just hand ChatGPT or any LLM for the matter our data and ask to make sense of it. Well the answer is pretty simple, this method would work for smaller chunks of data, but if you had an entire textbook worth of data, it would be too much for the LLM to handle at once. To get around this influx of dta, we use vector stores or vector DBs to store our data and index them.</div>

                <h2 className='font-bold text-xl mt-10'>What is the general process of training an LLM</h2>
                {/* <img src={langchainDiagram} className='h-60 mx-auto my-5' /> */}

                <div className='mt-1'>The diagram above displays the process of training an LLM on custom data. We will walk through it step by step, understanding whats happening and why it is happening.</div>
                <div className='mt-2'>1. The user supplies documents. The documents are then chunked into array of similar length texts. Embeddings are then generated on this array of texts. We initially chunk the data into an array of similar length texts because it provides for more efficient data retrival which we will see later on.</div>
                <div className='mt-2'>2. Once embeddings are generated, they are stored to a vector Db such as ChromaDB or Pinecone. Storing embeddings to vector DB makes it possible to retrieve relavent chunks of data repersented as embeddings.</div>
                <div className='mt-2'>3. The user enters their question/prompt. This input is then vectorized using embeddings and used to search the vector DB for relavant chunks of data.</div>
                <div className='mt-2'>4. Finally, the retruned chunks of data as passed into the LLM along with the original prompt in order to generate a response.</div>

                <h2 className='font-bold text-xl mt-10'>Lets dig into the code!</h2>

                <div className='mt-2'>We are going to start off by installingt he necessary libraries to get started: langchain, openai, and pypdf2.</div>

                <div className='font-mono text-xs my-2'>
                    <CodeBlock
                        text={block1}
                        language='python'
                        showLineNumbers={false}
                        theme={atomOneLight}
                    />

                </div>

                <div className='mt-2'>Chunking and embedding data: For the purposes of this article, I will be using the "Attention is All You Need" paper to train our LLM. You can substitute this pdf for any of your own data and the end result will be the same.</div>

                <div className='font-mono text-xs my-2'>
                    <CodeBlock
                        text={splittingCode}
                        language='python'
                        showLineNumbers={false}
                        theme={atomOneLight}
                    />
                </div>

                <div className='my-2'>now that we have the document text we can proceed to chunking the data</div>

                <div className='font-mono text-xs my-2'>
                    <CodeBlock
                        text={chunk}
                        language='python'
                        showLineNumbers={false}
                        theme={atomOneLight}
                    />
                </div>

                <div className='my-2'>With the document chunks now in hand we can now create vectorize the documents and store them to a vector DB. Luckily, langchain has made this easy for us with their api.</div>

                <div className='font-mono text-xs my-2'>
                    <CodeBlock
                        text={embedAndStore}
                        language='python'
                        showLineNumbers={false}
                        theme={atomOneLight}
                    />
                </div>

                <div className='my-2'>Now that we have stored the embeddings, there should be a ChromaDB folder which will act as the persisted vector DB from which we will search and query from.</div>

                <div className='my-2'>To test wether our DB has properly stored our data, we can send a query to the db. If the data has been stored properly, the returned docs should be relavant to the query.</div>

                <div className='font-mono text-xs my-2'>
                    <CodeBlock
                        text={query}
                        language='python'
                        showLineNumbers={false}
                        theme={atomOneLight}
                    />
                </div>

                <div className='my-2'>Now that we have confirmed that the DB is working correctly, we can get to the final step, chatting with our data. We will now load our GPT model, send a query and use the information from relavant documents to answer the question or respond to the query.</div>

                <div className='font-mono text-xs my-2'>
                    <CodeBlock
                        text={queryAndAnswer}
                        language='python'
                        showLineNumbers={false}
                        theme={atomOneLight}
                    />
                </div>

                <h2 className='font-bold text-xl mt-10'>Conslusion</h2>

                <div className='mt-2'>That's it! If you've followed along this far, shouldve gotten a working pipeline from start to finish which trains and tests a trained LLM model.</div>


            </div>
        </div>
    )
}

export default DocLLM