from chessPictures import knight 
from interpreter import draw

original = knight
vertical = knight.verticalMirror()
horizontal=knight.horizontalMirror()

draw(horizontal)
