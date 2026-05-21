# WS303 Mini Leak Detection Sensor

The WS303 is a tiny and mighty leakage detection sensor for detecting presence of water leaks and transmitting an alarm using LoRaWAN® technology. It uses water conductivity to detect a minimum water level of 0.5 mm by forming a circuit with two small metal probes. The sensor is designed for wireless water leakage monitoring in various environments.

## Features

- Detects the presence of conductive liquids using a small water probe
- Replaceable built-in 590mAh battery with up to 5 years of battery life
- IP67 waterproof enclosure for harsh environment applications
- Embedded buzzer for real-time local alarming
- Support for Milesight D2D protocol enabling ultra-low latency and direct control without gateways
- Equipped with NFC for easy configuration
- Compliant with standard LoRaWAN® gateways and network servers
- Detects minimum water level of 0.5 mm

## Use Cases

- Smart restroom monitoring for cleanliness and hygiene
- Water leak detection in commercial and industrial facilities
- Preventive maintenance in data centers
- Building management systems
- Basement and utility room monitoring
- Equipment room leak protection

## Thinger.io Integration

## Requirements

A LoRaWAN server is required to communicate the WS303 into Thinger.io, some options are:

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

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/ws303)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/ws303-datasheet-en.pdf)
- [Thinger docs](https://docs.thinger.io)