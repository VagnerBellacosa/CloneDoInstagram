// Utilização de Enums no TypeScript

// Definição do Enum
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
// Iniciando o Enum com um valor diferente de 0
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
// Pegando o valor a partir da numeração
let colorName: string = Color[2];