import React from 'react';
import marked from 'marked';

export const Markdown = ({ text }) => {
//    const convertedText = convertMarkdown(text);
    return (
        <div>
            { text }
        </div>
    )
}

const convertMarkdown = ( text ) => {
    console.log('marked text', text);
    const converted = marked(text,{
        sanitize: true,
    });
    return {
        __html: converted
    }
}

