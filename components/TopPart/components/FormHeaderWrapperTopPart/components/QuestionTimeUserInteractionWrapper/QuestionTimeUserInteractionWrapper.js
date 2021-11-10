

export const QuestionTimeUserInteractionWrapper = ({ data }) => {

    return (
        <p style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '11px',
            color: '#ffffff',
            lineHeight: '18px',
            marginLeft: '12px',
            opacity: '0.7',
        }}>
            {data.questionTime}h ago
        </p>
    )
}