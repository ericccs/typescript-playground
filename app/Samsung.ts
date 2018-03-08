import { Phone } from "./Phone";

export class Samsung implements Phone {
    model: string = "Samsung";

    call(phone: number) {
        console.log(`call ${phone} from ${this.model}`);
    }

}