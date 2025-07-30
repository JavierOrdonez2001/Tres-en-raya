import { useState } from "react"
import confetti from 'canvas-confetti'

import { Square } from "./components/Square"
import {TURNS} from './constants'
import {checkWinner, checkEndGAme} from './logic/board'
import { Winner } from "./components/Winner"



function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if(boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)
  
 

 const updateBoard = (index) => {
  // verificamos si un board ya tiene un elemento X o O
  //si lo tiene retornalo y termina la ejecucion del board ahi mismo
  if(board[index] || winner) return
  // a qui vamos actualizando el tablero
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
  // cambiar turno
  const newTurn = turn == TURNS.X ? TURNS.O: TURNS.X
  setTurn(newTurn)
  // guardar partida
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
  // revisar el ganador
  const newWinner = checkWinner(newBoard)
  if(newWinner){
    confetti()
    setWinner(newWinner)
  } else if (checkEndGAme(newBoard)){
    setWinner(false)
  }
 }

 const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)

  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  
  
 }
  return(
    <main className="board">
      <h1>🎮 TRES EN RAYA 🎮</h1>
      <br />
      <button onClick={resetGame}>🔄 NUEVA PARTIDA</button>
      <br />
      <section className="game">
        {
          board.map((_,index) => {
            return (
             <Square
             key={index}
             index={index}
             updateBoard={updateBoard}>
                {board[index]}
             </Square>
            )
          })
        }        
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <Winner resetGame={resetGame} winner={winner}></Winner>


     

    </main>
  )
}

export default App
