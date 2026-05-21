# Smart Fan Coil Thermostat-WT303

The WT303 is an advanced room thermostat specifically developed to oversee fan and valve operations in air conditioner applications where 2-pipe or 4-pipe fan coil units (FCU) with 3-speed fan or ECM fan are adopted. This LoRaWAN-enabled device features a 2.7-inch e-ink display, built-in temperature and humidity sensors, and supports multiple relay types and motorized valves for flexible climate control in commercial and residential environments.

## Features

- **LoRaWAN Connectivity**: Wireless communication for remote monitoring and control
- **Built-in Sensors**: Temperature and humidity monitoring
- **E-ink Display**: 2.7-inch screen for clear visibility and low power consumption
- **Flexible System Support**: Compatible with 2-pipe and 4-pipe fan coil systems
- **Multiple Configurations**: Supports 2-wire and 3-wire valve control with 3-speed fan operation
- **Valve Control**: Smart valve operation for heating and cooling management
- **Digital Input**: Key card integration and magnetic contact switch support
- **Advanced Features**: Open window detection, freeze protection, and schedule control
- **Compact Design**: 86 x 42 x 86 mm dimensions with IP20 enclosure
- **Wide Operating Range**: -20°C to 60°C temperature range

## Use Cases

- Hotel room climate control with key card integration
- Office building HVAC management
- Commercial space temperature regulation
- Multi-zone heating and cooling systems
- Energy-efficient building automation
- Remote facility monitoring and control

## Thinger.io Integration

The WT303 Smart Fan Coil Thermostat integrates with Thinger.io through LoRaWAN connectivity, enabling remote monitoring of temperature, humidity, and valve status, as well as configuration and control of thermostat settings, schedules, and operating modes.

## Requirements

A LoRaWAN server is required to communicate the WT303 into Thinger.io, some options are:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed a new Product will be created for this device.

### Configuration

The Product is already preconfigured, check that the auto provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your desire.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks for:

- Temperature and humidity monitoring
- Fan speed control (low, medium, high)
- Valve operation management
- System mode configuration (heating, cooling, auto, standby)
- Schedule programming
- Open window detection status
- Freeze protection settings

## Additional Resources

Milesight resources can be found at:

- [WT303 User Guide](https://resource.milesight.com/milesight/iot/document/wt303-wt304-user-guide-en.pdf)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/wt303/)
- [Thinger docs](https://docs.thinger.io)