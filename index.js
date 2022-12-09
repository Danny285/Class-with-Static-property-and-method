/*. Create a class that has class/static properties
 and methods. Show how to use/access them. */

  class inverter {
    inverter_capacity = 10 + "kva"
    max_expected_load = "80%"
    Charging_capacity = 15 + "A"
    battery_capacity = 2400
    running_load = 200

    static Inverter_type = "wall mount"
Backup_time (){ 
    console.log(this.battery_capacity / this.running_load + " hours of power back up system")

}
    
  }

const Inverter = new inverter ()
Inverter.Backup_time()
//to update the instance properties of the inverters
Inverter.inverter_capacity = 5 + "kva"
console.log(Inverter, inverter)