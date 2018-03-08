import { Phone } from "./Phone";

export class Iphone implements Phone {
    model: string = "iPhone";

    call(phone: number) {
        console.log(`call ${phone} from ${this.model}`);
    }

}