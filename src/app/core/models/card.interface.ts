export interface Card {
  value: number;    // El valor numérico de la carta
  ownerId: string;  // El identificador de la persona asociada a la carta
  showNumbers?: boolean; // Agregar esta propiedad
}
