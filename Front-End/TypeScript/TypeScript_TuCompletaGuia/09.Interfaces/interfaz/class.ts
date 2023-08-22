(() => {
    interface Xmen {
        nombre: string,
        poder?: string
        mutantPower(id: number): string;

    }

    interface Human {
        age: number;
    }

    class Mutante implements Xmen, Human {
        public age: number = 1;
        public nombre: string ="";
        public poder: string ="";

        mutantPower(id: number): string {
            return 'Mutant Power';
        }
    }
}
)()