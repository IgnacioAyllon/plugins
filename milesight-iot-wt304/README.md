# Smart Fan Coil Thermostat -WT304

The WT304 is an advanced LoRaWAN® smart room thermostat specifically developed to oversee fan and valve operations in air conditioner applications where 2-pipe or 4-pipe fan coil units (FCU) with 3-speed fan or EC fan are adopted. Designed for efficient, flexible, and intelligent climate control, the WT304 supports 0-10V proportional valves and provides comprehensive connectivity for commercial and residential HVAC systems.

## Features

- **2.7-inch E-Ink Display**: Continuous display of temperature, humidity, and system status with minimal power consumption
- **Built-in Sensors**: Embedded temperature and humidity sensors for real-time ambient monitoring
- **External Sensor Support**: Compatible with external NTC temperature sensors for enhanced flexibility
- **Dry Contact Input**: Supports keycard or magnet switches for occupancy-based control
- **0-10V Proportional Valve Control**: Precision valve actuation for optimal energy efficiency
- **LoRaWAN Class C**: Wireless connectivity for centralized climate management
- **Advanced Climate Features**: Scheduling, open window detection, freeze protection, and keycard integration
- **Flexible Fan Control**: Multiple fan speed modes and temperature control options
- **IP20 Enclosure**: Suitable for indoor commercial and residential installations

## Specifications

- **Connectivity**: LoRaWAN®
- **Display**: 2.7-inch E-Ink touchscreen
- **Sensors**: Temperature, Humidity
- **Valve Output**: 0-10V proportional valve control
- **Fan Support**: 3-speed fan and EC fan compatibility
- **Dimensions**: 86 x 42 x 86 mm
- **Operating Temperature**: -20°C to 60°C
- **Enclosure**: IP20

## Use Cases

- Commercial HVAC systems
- Smart building retrofits
- Hotel room climate control with keycard integration
- Office building temperature management
- Energy-efficient residential climate control
- Centralized multi-room temperature monitoring

## Thinger.io Integration

The WT304 integrates with Thinger.io through LoRaWAN connectivity, enabling remote monitoring and control of HVAC systems with centralized data collection and visualization.

## Requirements

A LoRaWAN server is required to communicate the WT304 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks for remote thermostat control and monitoring.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/wt303-wt304)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/wt304/)
- [Thinger docs](https://docs.thinger.io)