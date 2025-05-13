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
    return Picture(nueva_img)  def up(self, p):


  def up(self, p):
    nueva_img = []
    for fila in p.img:
        nueva_img.append(fila)
    for fila in self.img:
        nueva_img.append(fila)
    return Picture(nueva_img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    return Picture(None)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    return Picture(None)

  def verticalRepeat(self, n):
    return Picture(None)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)
