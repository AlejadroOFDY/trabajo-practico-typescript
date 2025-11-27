// Tipos literales
type orderStatus = "pending" | "shipped" | "delivered";

const order: orderStatus = "pending";
console.log(`Estado de la orden: ${order}`);

enum LogLevel {
  Info = "Information",
  Warning = "Warning",
  Error = "Error",
}

function logMessage(level: LogLevel, message: string) {
  console.log(`${level}: ${message}`);
}

logMessage(LogLevel.Info, "Información");
