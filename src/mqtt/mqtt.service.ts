import { Injectable , Inject} from '@nestjs/common';

//  Agregar los importes enmedio de estos comentarios
import { ClientProxy , MqttRecordBuilder } from '@nestjs/microservices';
//  Agregar los importes enmedio de estos comentarios

@Injectable()
export class MqttService {
    constructor(
        @Inject('Cliente_NestJS') private client: ClientProxy,
        ) { }
    
        Funcion_que_que_va_a_hacer_algo(payload:[]){//this is a placeholder fuction that will be injected where needed to do something in specific
        }
}
