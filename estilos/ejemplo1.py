import pygame


pygame.init()
size = 800, 600
pygame.display.set_mode(size)
pygame.set_caption("repaso")

ventana = True
while ventana == True:
    for eventocapturado in pygame.event.get():
        if eventocapturado.type == pygame.quit:
            ventana = False

            pygame.update
            pygame.quit()
