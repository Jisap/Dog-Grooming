export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {                                                           // Hidden es el estado inicial
      y: direction === 'up'       // si dir=up 
        ? 40                      // el elemento comenzará a 40px por debajo de su posición final
        : direction === 'down'    // si dir=down
          ? -40                   // el elemento comenzará a 40px por encima.  
          : 0,                    // Si no se expecifica ninguna dirección la pos inicial = final
      opacity: 0,                     // el elemento será completamente transparente al inicio de la animación
      x: direction === 'left'     // si dir=left 
        ? 40                      // el elemento comenzará 40px a la derecha de su posición final
        : direction === 'right'   // si dir=right
          ? -40                   // el elemento comenzará 40px a la izquierda
          : 0,                    // Si no se expecifica ninguna dirección la pos inicial = final  
      transition: {                   // Define como se ve el elemento al principio de la animación
        type: `tween`,                // Utilizará la animación tween
        duration: 1.4,                // durará 1.4 segundos
        delay: delay,                 // con un retraso antes de que comienze 
        ease: [0.25, 0.6, 0.3, 0.8],  // matriz que define la velocidad de animación en diferentes puntos
      },
    },
    show: {                                                           // Show es el estado final de la animación
      y: 0,                       // x e y = 0 lo que significa que el elemento terminará en su pos inicial
      x: 0,
      opacity: 1,                 // opacity en 1 hará que el elemento será completamente opaco al final de la animación
      transition: {               // Define como se ve el elemento al final de la animación
        type: `tween`,
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.2, 0.25, 0.7],
      }
    }
  }


}