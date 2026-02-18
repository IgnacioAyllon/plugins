# Sinus 85 - Three-Phase Meter

The Sinus 85 is a direct measuring digital three-phase meter designed for DIN rail mounting. This fully electronic energy meter is built for three-phase four-wire alternating current systems, providing accurate measurement and monitoring of electrical energy consumption in commercial and industrial applications.

## Features

- Direct connection capability up to 85 A
- Three-phase four-wire alternating current measurement
- DIN rail mounting for easy installation
- Multi-part plastic housing
- MID (Measuring Instruments Directive) compliant
- LoRaWAN connectivity for remote data transmission
- Supports EU863-870 frequency plan

## Use Cases

- Energy consumption monitoring in commercial buildings
- Industrial facility power management
- Sub-metering applications
- Remote energy monitoring systems
- Building automation and energy management systems

## Thinger.io Integration

The Sinus 85 integrates with Thinger.io through LoRaWAN connectivity, enabling remote monitoring and management of energy consumption data.

## Requirements

A LoRaWAN server is required to communicate the Sinus 85 into Thinger.io, some options are:

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

- [Device Repository for LoRaWAN](https://www.thethingsnetwork.org/device-repository/devices/tip/sinus85/)
- [Manufacturer Information](https://mueller-ziegler.de/)
- [Thinger docs](https://docs.thinger.io)