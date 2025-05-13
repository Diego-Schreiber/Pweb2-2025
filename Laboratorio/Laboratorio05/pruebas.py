from chessPictures import knight 
from interpreter import draw

original = knight
vertical = knight.verticalMirror()
horizontal = knight.horizontalMirror()
negativo = knight.negative()
juntos = vertical.join(negativo)
torre = original.up(negativo)
errot = original.under(negativo)
repeticionH = horizontal.horizontalRepeat(3)
repeticionV = horizontal.verticalRepeat(5)

draw(repeticionV)
