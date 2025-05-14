from chessPictures import square
from interpreter import draw

cuadro_blanco = square
cuadro_negro = square.negative()

fila_bn = cuadro_blanco.join(cuadro_negro).horizontalRepeat(4)
fila_nb = cuadro_negro.join(cuadro_blanco).horizontalRepeat(4)

tablero = fila_bn.up(fila_nb).verticalRepeat(2)

draw(tablero)
