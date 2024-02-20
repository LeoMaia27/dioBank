export abstract class DioAccount { //classe abstrata
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    setName = (name: string): void => {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (): void => {
        if (this.validateStatus()) {
            return console.log('depositado');
        }
    }

    withdraw = (): void => {
        return console.log('sacado');
    }

    getBalance = (): void => {
        console.log(this.balance);
    }

    validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        }

        throw new Error('conta inválida');
    }
}

//métodos deverão ter apenas UMA responsabilidade.