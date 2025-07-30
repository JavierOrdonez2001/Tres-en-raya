import { Square } from "./Square"

export function Winner ({winner, resetGame}) {
  if(winner == null) return null
  
  const winnerText = winner == false ? '¡EMPATE!' : '¡GANADOR!'
  const subtitleText = winner == false ? 'Nadie ganó esta vez' : `El jugador ${winner} es el campeón`
  
  return(
    <section className="winner">
      <div className="text">
        <h2 className="winner-title">
          {winnerText}
        </h2>
        
        <p className="winner-subtitle">
          {subtitleText}
        </p>
        
        {winner && (
          <header className="win">
            <Square>{winner}</Square>
          </header>
        )}
        
        <footer>
          <button onClick={resetGame} className="reset-button">
            🎮 JUGAR DE NUEVO
          </button>
        </footer>
      </div>
    </section>
  )
}
    