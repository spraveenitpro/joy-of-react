import React from 'react'

/**
 * Converts a time string in the format "HH:MM" to the total number of minutes.
 * @param {string} timeString - A string representing a time in the format "HH:MM".
 * @returns {number} - The total number of minutes.
 */

function FriendlyGreeting({ name = 'There!' }) {
    return (
        <p style={
            {
                fontSize: '1.25rem',
                textAlign: 'center',
                color: 'sienna',
            }
        }>
            Greetings, {name}!
        </p>
    )
}

export default FriendlyGreeting