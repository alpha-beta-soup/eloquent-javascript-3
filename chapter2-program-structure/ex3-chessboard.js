const _checkInput = ({input}) => {
  if (!Number.isInteger(Number(input))) throw new Error('Input must be an integer')
  if (input < 0) throw new Error('Input must have be positive')
  return input
}

const chessboard = (n) => {
  n = _checkInput({input: n})
  let board = ''
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      board += ((row + col) % 2) ? '#' : ' '
    }
    board += '\n'
  }
  console.log(board)
  return
}

if (!module.parent) {
  const size = process.argv[2] || 8
  chessboard(size)
}
