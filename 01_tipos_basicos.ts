// Tipos Fundamentales
let productName: string = "RTX 5090 OC";
let productPrice: number = 3360;

console.log(`Producto: ${productName} cuesta: ${productPrice}`);

// Tipo Union
let productId: string | number;

// productId a a ser un número primero
productId = 500;
console.log(`ID del producto: ${productId}`);

// Ahora va a ser un string
productId = "Titan GVS-500";
console.log(`modelo: ${productId}`);

// Interfaz
interface product {
  nombre: string;
  precio: number;
}

const newProduct: product = {
  nombre: "RTX 5090",
  precio: 3360,
};

console.log(newProduct);
