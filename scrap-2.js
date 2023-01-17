// from pygame tutorial
screen.fill((255, 255, 255))

for i in range(0, 9):
  color = (255, 0, 255)
  x = ((i % 3) * 175) + 75
  y = (int(i / 3) * 175) + 75
  position = (x, y)
    
  pygame.draw.circle(screen, color, position, 75)
