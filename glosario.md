En este trabajo se utilizaron los siguientes conceptos:

**Tipos Fundamentales:**
Son los tipos básicos de TypeScript como `string`, `number`, `boolean`, etc., que definen el tipo de dato de una variable.

Ejemplo:
let productName: string = "RTX 5090 OC";
let productPrice: number = 3360;

**Tipo Unión (Union Type):**
Permite que una variable pueda ser de varios tipos diferentes, usando el operador `|`.

Ejemplo:
let productId: string | number;
productId = 500; // válido
productId = "Titan GVS-500"; // también válido

**Interfaz Básica:**
Define la estructura de un objeto especificando qué propiedades debe tener y sus tipos.

Ejemplo
interface product {
nombre: string;
precio: number;
}

const newProduct: product = {
nombre: "RTX 5090",
precio: 3360,
};

**Funciones:**
Permiten especificar tipos para parámetros y valores de retorno, asegurando que la función reciba y devuelva los datos correctos.

Ejemplo:
function updateStock(currentStock: number, quantityChange: number): number {
return currentStock + quantityChange;
}

**Tipos Literales:**
Restringen una variable a un conjunto específico de valores exactos.

Ejemplo:
type orderStatus = "pending" | "shipped" | "delivered";
const order: orderStatus = "pending";

**Enums:**
Son conjuntos de constantes con nombre que facilitan trabajar con valores relacionados.

Ejemplo:
enum LogLevel {
Info = "Information",
Warning = "Warning",
Error = "Error",
}

logMessage(LogLevel.Info, "Información");
