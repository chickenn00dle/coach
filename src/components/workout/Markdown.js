import React from 'react'
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true,
}) 

// Helper function. Convert and sanitize markdown text to HTML
const convertMarkdown = text => {
    const converted = marked( text )
    return {
        __html: converted
    }
}

const Markdown = ({ text }) => {
    const convertedText = convertMarkdown( text );
    return (
        <div>
            <span dangerouslySetInnerHTML={ convertedText } />
        </div>
    )
}

export default Markdown
