import { MqttOptions, Transport } from '@nestjs/microservices';

export class MqttConfig implements MqttOptions {
  transport: any;
  options: any;
  
  constructor() {
    this.transport = Transport.MQTT;
    this.options = {
      subscribeOptions: { qos: 1 },
      url: 'mqtt://localhost:1883',
    };
  }
}