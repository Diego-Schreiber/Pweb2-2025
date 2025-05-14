from chessPictures import square
from interpreter import draw

cuadro_blanco = square
cuadro_negro = square.negative()
fila = cuadro_negro.join(cuadro_blanco).horizontalRepeat(4)

draw(fila)
