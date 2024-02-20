import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log('você pegou um empréstimo');
    }

    deposit = (): void => { //sobrescrevendo método ja existente (alterando fluxo);
        console.log('a empresa depositou');
    }
}