import { Iphone } from "./Iphone";
import { Samsung } from "./Samsung";
import { Phone } from "./Phone";

export class App {
    phones : Phone[] = [new Iphone(), new Samsung()];
    

    hello(phoneNumber: number) {
        
        this.phones.forEach(phone => phone.call(phoneNumber));

    }

}