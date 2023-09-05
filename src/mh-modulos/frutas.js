const frutas = ['🍉', '🍓', '🍒'];
const precios = [100, 200];

// Equivalente a export default CommonJS
// module.exports = frutas;

// Equivalente al export con nombre
module.exports = { 
    frutas: frutas, // Redundante, si la clave tiene el mismo nombre que el valor se puede omitir
    precios,
};
