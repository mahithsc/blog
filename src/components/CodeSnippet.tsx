import { CodeBlock, atomOneLight } from 'react-code-blocks'

const CodeSnippet = (code:string) => {
    return (
        <div className='font-mono text-xs my-2'>
            <CodeBlock
                text={code}
                language='python'
                showLineNumbers={false}
                theme={atomOneLight}
            />
        </div>
    )
}

export default CodeSnippet