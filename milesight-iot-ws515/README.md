# Smart Wall Socket

The WS51x is an 86-type in-wall smart socket panel with a stylish and minimalist design that combines power control and electricity consumption statistics features. Designed for in-wall installation, this LoRaWAN-enabled smart socket enables remote control and energy monitoring capabilities for modern building automation and smart home applications.

## Features

- **Power Control**: Remote on/off switching capability via LoRaWAN
- **Energy Monitoring**: Real-time electricity consumption statistics
- **In-wall Installation**: 86-type standard mounting for clean integration
- **LoRaWAN Connectivity**: Class A OTAA/ABP activation modes
- **Wide Voltage Range**: 100~250 VAC, 50~60 Hz input voltage support
- **Safety Features**: Built-in safety door protection
- **Socket Types Available**: EU Type F and FR Type E configurations

## Use Cases

- Smart home energy management
- Commercial building automation
- Remote power control for appliances
- Energy consumption monitoring and analytics
- Scheduled device operation
- Load management in office and retail spaces

## Thinger.io Integration

The WS51x Smart Wall Socket integrates with Thinger.io through LoRaWAN connectivity, enabling remote control and monitoring of connected devices while tracking energy consumption data in real-time.

## Requirements

A LoRaWAN server is required to communicate the WS51x Smart Wall Socket into Thinger.io, some options are:

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
This product also provides a predefined dashboard and downlinks for remote socket control and energy monitoring.

## Additional Resources

Milesight resources can be found at:

- [User Guide](https://resource.milesight.com/milesight/iot/document/ws51x-user-guide-en.pdf)
- [Thinger docs](https://docs.thinger.io)