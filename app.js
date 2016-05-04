var Cylon = require('cylon');

Cylon.api({
  host: "0.0.0.0",
  port: "3000",
  ssl: false
});

Cylon.robot({
  // This is required to call the robot from the HTTP API
  name: "tank",
  connections: {
    edison: { adaptor: 'intel-iot' }
  },

  devices: {
    motor_1_backward: { driver: 'motor', pin: 3, connection: 'edison' },
    motor_1_forward: { driver: 'motor', pin: 5, connection: 'edison' },
    motor_2_backward: { driver: 'motor', pin: 6, connection: 'edison' },
    motor_2_forward: { driver: 'motor', pin: 9, connection: 'edison' }
  },

  work: function() {
  }
}).start();

