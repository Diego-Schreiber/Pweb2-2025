from chessPictures import bishop
from interpreter import draw

original = bishop
vertical = bishop.verticalMirror()
horizontal = bishop.horizontalMirror()

combined = original.join(vertical).join(horizontal)

draw(combined)
