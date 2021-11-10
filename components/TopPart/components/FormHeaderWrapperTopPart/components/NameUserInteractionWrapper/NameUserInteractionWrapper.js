

export const NameUserInteractionWrapper = ({ data }) => {
    const { name } = data;
    return (
        <p style={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: '27px',
            marginLeft: '12px',
        }}>
            {name}
        </p>

    )
}
