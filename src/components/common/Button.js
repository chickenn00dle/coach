import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ to, text }) => (
    <Link to={ to }>
        { text }
    </Link>
);

export default Button
