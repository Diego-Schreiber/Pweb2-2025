from chessPictures import knight
from interpreter import draw

caballo = knight
caballo_blanco = caballo
caballo_negro = caballo.negative()
caballo_der_blanco = caballo_blanco.verticalMirror()
caballo_der_negro = caballo_negro.verticalMirror()
superior = caballo_blanco.join(caballo_negro)
inferior = caballo_der_negro.join(caballo_der_blanco)
tablero = superior.under(inferior)

draw(tablero)
