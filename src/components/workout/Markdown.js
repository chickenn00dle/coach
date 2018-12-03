import React from 'react'
import marked from 'marked'
import Typography from '@material-ui/core/Typography'

marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: true,
}) 

const convertMarkdown = text => {
    const converted = marked( text )
    return {
        __html: converted
    }
}

const Markdown = ({ text }) => {
    const convertedText = convertMarkdown( text );
    return (
        <Typography variant="body1">
            <span dangerouslySetInnerHTML={ convertedText } />
        </Typography>
    )
}

export default Markdown
