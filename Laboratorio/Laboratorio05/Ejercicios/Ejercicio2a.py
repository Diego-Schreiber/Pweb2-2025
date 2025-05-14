from chessPictures import knight
from interpreter import draw

caballo = knight
caballo_blanco = caballo
caballo_negro = caballo.negative()
superior = caballo_blanco.join(caballo_negro)
inferior = caballo_negro.join(caballo_blanco)
tablero = superior.up(inferior)

draw(tablero)

