# EM500-UDL - Ultrasonic Distance/Level Sensor

The Milesight EM500-UDL consists of an ultrasonic distance/level sensor that provides highly accurate distance measurement for a variety of applications in harsh environments like snow level monitoring, flood monitoring, wastewater management, fill level monitoring in grains or fertilizer. The measurement is based on ultrasonic waves transmitted and reflected back from nearby objects.

## Features

- **Non-contact ultrasonic measurement**: Accurate distance detection using ultrasonic technology
- **Multiple range variants**: Available in configurations up to 10 meters
- **Long battery life**: Up to 10 years operation with 19000mAh battery
- **Rugged design**: IP67 ingress protection rating for harsh outdoor environments
- **LoRaWAN connectivity**: Long-range wireless communication with low power consumption
- **Wide operating temperature**: -30°C to 65°C operating range
- **Compact dimensions**: 156.1 × 71 × 69.5 mm

## Use Cases

- Snow level monitoring
- Flood monitoring and early warning systems
- Wastewater management
- Fill level monitoring for grains or fertilizer
- Tank level monitoring
- Distance measurement in industrial applications

## Technical Specifications

- **Sensors**: Ultrasonic distance sensor, battery monitoring
- **Measurement Range**: Multiple variants available (up to 10m)
- **Operating Temperature**: -30°C to 65°C
- **Humidity**: 0% to 80% (non-condensing)
- **Ingress Protection**: IP67
- **Dimensions**: 156.1 × 71 × 69.5 mm (6.1 × 2.8 × 2.7 in)
- **Battery**: 19000mAh, up to 10 years battery life
- **Protocol**: LoRaWAN
- **Device Class**: Class A

## Thinger.io Integration

The EM500-UDL integrates seamlessly with Thinger.io through LoRaWAN network servers, enabling remote monitoring and data visualization of distance measurements.

## Requirements

A LoRaWAN server is required to communicate the Milesight EM500-UDL into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets.
This product also provides a predefined dashboard and downlinks.

## Additional Resources

Milesight resources can be found at:

- [EM500-UDL User Guide](https://resource.milesight.com/milesight/iot/document/em500-udl-user-guide-en.pdf)
- [Milesight IoT](https://www.milesight-iot.com/)
- [Thinger docs](https://docs.thinger.io)