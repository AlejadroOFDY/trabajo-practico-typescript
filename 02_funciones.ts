// Funciones
function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}

const stock = 500;
const newStock = updateStock(stock, 300);
const soldStock = updateStock(stock, -150);

console.log(newStock);
console.log(soldStock);
