from chessPictures import bishop
from interpreter import draw

original = bishop
vertical = bishop.verticalMirror()

draw(vertical)
