# Geolocation Module

The Abeeway Geolocation module is a compact and versatile positioning solution designed for outdoor and indoor IoT tracking applications. It features a high-performance multi-constellation GNSS receiver supporting GPS, GLONASS, Beidou, and Galileo, with a patented ultra Low-Power GPS (LP GPS) mode for energy-efficient operation. Indoor positioning capabilities are provided through an integrated Bluetooth Low Energy receiver and ultra-low power Wi-Fi receiver, making it suitable for comprehensive asset tracking across various environments.

## Features

- **Multi-constellation GNSS**: GPS, GLONASS, Beidou, and Galileo support for accurate outdoor positioning
- **Ultra Low-Power GPS mode**: Patented LP GPS technology for extended battery life
- **Indoor positioning**: BLE and Wi-Fi receivers for indoor location tracking
- **Compact design**: Small form factor measuring 17 x 17.5 mm
- **Wide operating temperature range**: -25°C to +85°C
- **Integrated sensors**: Accelerometer and temperature sensor
- **Lightweight**: Approximately 10 grams
- **LoRaWAN connectivity**: Long-range wireless communication for IoT applications

## Use Cases

- Asset tracking and fleet management
- Supply chain and logistics monitoring
- Personnel safety and location tracking
- Smart agriculture equipment monitoring
- Industrial equipment tracking
- Smart city applications

## Thinger.io Integration

The Abeeway Geolocation Module integrates seamlessly with Thinger.io through LoRaWAN connectivity, enabling real-time location tracking, sensor data monitoring, and device management through the Thinger.io platform.

## Requirements

A LoRaWAN server is required to communicate the Abeeway Geolocation Module into Thinger.io, some options are:

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
This product also provides a predefined dashboard and downlinks for location tracking and sensor data visualization.

## Additional Resources

Abeeway resources can be found at:

- [Product Page](https://www.abeeway.com/abeeway-geolocation-module/)
- [Datasheet](https://www.abeeway.com/wp-content/uploads/2022/04/Abeeway_Geolocation-module-data-sheet_2022-v05.pdf)
- [Thinger docs](https://docs.thinger.io)