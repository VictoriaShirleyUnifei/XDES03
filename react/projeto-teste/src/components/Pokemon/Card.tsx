interface CardProps {
    nome: string;
    img: string;
}

function Card({ nome, img }: CardProps) {
  return (
    <div style={style.card}>
        <h2 style={style.title}>{nome}</h2>
        <img src={img} alt="Pokémon" style={style.image} />
    </div>
  )
}

export default Card

const style = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '8px 16px',
        textAlign: 'center' as const,
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '200px',
        height: '200px',
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '8px',
    }
}   