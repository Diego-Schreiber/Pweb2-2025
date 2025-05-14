from chessPictures import *
from interpreter import draw

cuadro_blanco = square
cuadro_negro = square.negative()

blanco = lambda p: p
negro = lambda p: p.negative()

fila_piezas_blancas = [
    rock, knight, bishop, queen, king, bishop, knight, rock
]
fila_peones_blancos = [pawn] * 8
fila_peones_negros = [pawn] * 8
fila_piezas_negras = [
    rock, knight, bishop, queen, king, bishop, knight, rock
]

def fila_casillas(inicia_blanco=True):
    base = [cuadro_blanco, cuadro_negro] if inicia_blanco else [cuadro_negro, cuadro_blanco]
    return [base[i % 2] for i in range(8)]

def fila_con_piezas(piezas, color, inicia_blanco):
    casillas = fila_casillas(inicia_blanco)
    return [color(p).under(c) for p, c in zip(piezas, casillas)]

def fila_vacia(inicia_blanco):
    return fila_casillas(inicia_blanco)

fila1 = fila_con_piezas(fila_piezas_negras, negro, True)
fila2 = fila_con_piezas(fila_peones_negros, negro, False)
fila3 = fila_vacia(True)
fila4 = fila_vacia(False)
fila5 = fila_vacia(True)
fila6 = fila_vacia(False)
fila7 = fila_con_piezas(fila_peones_blancos, blanco, True)
fila8 = fila_con_piezas(fila_piezas_blancas, blanco, False)

def unir_fila(fila):
    return fila[0].join(fila[1]).join(fila[2]).join(fila[3]).join(fila[4]).join(fila[5]).join(fila[6]).join(fila[7])

tablero_completo = unir_fila(fila8)\
    .up(unir_fila(fila7))\
    .up(unir_fila(fila6))\
    .up(unir_fila(fila5))\
    .up(unir_fila(fila4))\
    .up(unir_fila(fila3))\
    .up(unir_fila(fila2))\
    .up(unir_fila(fila1))

draw(tablero_completo)

