from chessPictures import square
from interpreter import draw

cuadro_blanco = square
cuadro_negro = square.negative()
fila = cuadro_blanco.join(cuadro_negro).horizontalRepeat(4)

draw(fila)
