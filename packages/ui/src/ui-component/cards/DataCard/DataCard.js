import React from 'react'
import PropTypes from 'prop-types'
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

const DataCard = ({ feedbackPercentage, messagesWithFeedback, totalMessages, label }) => {
    const cardStyle = {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        height: 'auto',
        padding: '10px',
        minWidth: '110px',
        width: 'fit-content',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        textAlign: 'center'
    }

    const titleStyle = {
        fontSize: '14px',
        color: '#616161',
        fontWeight: 'bold',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        gap: '0.625px'
    }

    const percentageStyle = {
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#616161'
    }

    const ratioStyle = {
        fontSize: '14px',
        color: '#616161',
        fontWeight: '500'
    }

    const iconStyles = {
        fontSize: '14px',
        marginRight: '2.5px'
    }

    const Icon = () => {
        switch (label) {
            case 'Data Rated':
                return <ThumbsUpDownIcon style={iconStyles} />
            case 'Thumbs Up':
                return <ThumbUpIcon style={iconStyles} />
            case 'Thumbs Down':
                return <ThumbDownIcon style={iconStyles} />
            default:
                return <ThumbsUpDownIcon style={iconStyles} />
        }
    }

    return (
        <div style={cardStyle}>
            <div style={titleStyle}>
                {Icon()}
                {label}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '0.25rem' }}>
                <div style={percentageStyle}>{feedbackPercentage.toFixed(2)}%</div>
                <div style={ratioStyle}>
                    ({messagesWithFeedback}/{totalMessages})
                </div>
            </div>
        </div>
    )
}
DataCard.propTypes = {
    feedbackPercentage: PropTypes.number.isRequired,
    messagesWithFeedback: PropTypes.number.isRequired,
    totalMessages: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}
export default DataCard
