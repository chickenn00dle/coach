import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true,
}) 

const Markdown = ({ text }) => {
    const convertedText = convertMarkdown( text );
    return (
        <div>
            <span dangerouslySetInnerHTML={ convertedText } />
        </div>
    )
}

const convertMarkdown = text => {
    const converted = marked( text )
    return {
        __html: converted
    }
}

export default Markdown
