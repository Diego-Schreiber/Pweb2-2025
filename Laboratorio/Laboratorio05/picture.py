from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    vertical = []
    for value in self.img:
        vertical.append(value[::-1])
    return Picture(vertical)

  def horizontalMirror(self):
    horizontal = self.img[::-1]
    return Picture(horizontal)

  def negative(self):
    negativo = []
    for value in self.img:
        negativo.append(''.join(map(lambda c: self._invColor(c), value)))
    return Picture(negativo)

  def join(self, p):
    nueva_img = []
    for fila1, fila2 in zip(self.img, p.img):
        nueva_img.append(fila1 + fila2)
    return Picture(nueva_img) 

  def up(self, p):
    nueva_img = []
    for fila in p.img:
        nueva_img.append(fila)
    for fila in self.img:
        nueva_img.append(fila)
    return Picture(nueva_img)

  def under(self, p):
        nueva_img = self.img + p.img 
        return Picture(nueva_img)
  
  def horizontalRepeat(self, n):
    nueva_img = []
    for linea in self.img:
        nueva_linea = ''.join([linea] * n)  # Repetimos la línea 'n' veces
        nueva_img.append(nueva_linea)  # Añadimos la línea repetida a la nueva imagen
    
    return Picture(nueva_img)

  def verticalRepeat(self, n):
    nueva_img = []
    for _ in range(n):
        nueva_img += self.img  
    return Picture(nueva_img)  

  def rotate(self):
    nueva_img = [''.join(fila) for fila in zip(*reversed(self.img))]
    return Picture(nueva_img)

