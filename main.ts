// Ejercicio 1

class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'centro' | 'derecha' | 'izquierda';

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'centro'; // Valor por defecto
    }

    // Método para obtener el título, color y fuente de la página
    obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    // Método para establecer la alineación del título
    establecerAlineacion(alineacion: 'centro' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
    }

    // Método para imprimir todas las propiedades de la cabecera
    imprimirPropiedades(): void {
        const propiedades = this.obtenerPropiedades();
        console.log(`Título: ${propiedades.titulo}`);
        console.log(`Color: ${propiedades.color}`);
        console.log(`Fuente: ${propiedades.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

const cabecera = new CabeceraPagina("Mi Pagina", "azul", "Arial");
cabecera.establecerAlineacion('izquierda');
cabecera.imprimirPropiedades();

//Ejercicio 2

class Calculadora {

    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    }

    // Método para calcular la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial de un número
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

const calc = new Calculadora();

console.log("Suma: ", calc.sumar(5,3));
console.log("Resta: ", calc.restar(5,3));
console.log("Multiplicacion: ", calc.multiplicar(5,3));
console.log("Division: ", calc.dividir(6,3));
console.log("Potencia: ", calc.potencia(2,3));
console.log("Factorial: ",calc.factorial(5));

// Ejercicio 3

class Cancion {
    private autor: string; // Atributo privado

    // Constructor que recibe el título y el género de la canción
    constructor(public titulo: string, public genero: string) {
        this.autor = ''; // Valor inicial por defecto para el autor
    }

    // Método para obtener el autor
    getAutor(): string {
        return this.autor;
    }

    // Método para establecer el autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

const cancion = new Cancion("Animals","Pop Rock");
cancion.setAutor("Maroon 5");
cancion.mostrarDatos();

// Ejercicio 4

class Cuenta {
    private cantidad: number;

    // Constructor que recibe nombre, cantidad, tipo de cuenta y número de cuenta
    constructor(
        public nombre: string,
        cantidad: number,
        public tipoCuenta: string,
        public numeroCuenta: string
    ) {
        if (cantidad < 0) {
            throw new Error("La cantidad inicial no puede ser negativa.");
        }
        this.cantidad = cantidad;
    }

    // Método para depositar una cantidad de dinero
    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente $${monto}. Cantidad actual: $${this.cantidad}`);
        }
    }

    // Método para retirar una cantidad de dinero
    retirar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
            return;
        }

        if (valor > this.cantidad) {
            console.log("No hay suficiente dinero en la cuenta.");
        } else if (this.cantidad === 0) {
            console.log("No hay dinero en la cuenta.");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Cantidad restante: $${this.cantidad}`);
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}

const cuenta = new Cuenta("Juan Pérez", 100, "Ahorro", "123456789");
cuenta.mostrarDatos();

cuenta.depositar(10);
cuenta.depositar(3);

cuenta.retirar(20);
cuenta.retirar(90);
cuenta.retirar(2);

// Ejercicio 5

// Clase abstracta Persona
abstract class Persona {
    // Atributos de la clase Persona
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    // Constructor para inicializar los atributos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si la persona es mayor de edad
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    // Método abstracto para mostrar todos los datos personales
    abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    // Constructor que llama al constructor de Persona y añade el atributo sueldo
    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        sueldo: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    // Método para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    // Implementación del método abstracto para mostrar todos los datos personales
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.esMayorDeEdad();
    }
}

const empleado = new Empleado("Juan", "Pérez", "Calle Falsa 123", "555-1234", 30, 3000);
empleado.mostrarDatos();
empleado.imprimirSueldo();
