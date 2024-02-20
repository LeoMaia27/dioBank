//Dio Banking

//name, accountNumber
//depositar, sacar
//'super()', inicializa a classe que estamos a estender.

import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

// const gabriel: PeopleAccount = new PeopleAccount(21, 'Gabriel', 1);
// console.log(gabriel);

// const dio: CompanyAccount = new CompanyAccount('DIO', 20);
// console.log(dio);

const gabriel: PeopleAccount = new PeopleAccount(21, 'Gabriel', 1);
gabriel.deposit();