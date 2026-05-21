# Milesight WS301 - Wireless Magnetic Contact Switch

The Milesight WS301 is a LoRaWAN® wireless magnetic contact switch designed to detect the opening or closing of doors and windows. It provides physical security monitoring by warning of intrusion or unauthorized entry. With ultra-low power consumption LoRa technology, the WS301 can operate continuously for more than 5 years on a single 1200 mAh replaceable battery. The device is compliant with standard LoRaWAN® gateways and network servers, enabling real-time monitoring of open/close status with alarm notifications via mobile applications.

## Features

- **Magnetic Contact Detection**: Monitors door/window open/close status
- **Tamper Detection**: Alerts when device is removed from mounting surface
- **Long Battery Life**: Built-in 1200 mAh replaceable battery provides 5+ years of operation
- **Long Range**: LoRaWAN® transmission up to 15 km line of sight
- **NFC Configuration**: One-touch configuration via NFC
- **LED Indicators**: Visual feedback for network status, open/close events, tamper alerts, and low battery
- **Milesight D2D Protocol**: Ultra-low latency direct control without gateway
- **Wide Temperature Range**: Operates from -40°C to 70°C
- **Compact Design**: 18 x 31 x 50.5 mm dimensions with IP30 enclosure
- **Universal Installation**: Suitable for various door/window materials

## Specifications

- **Protocol**: LoRaWAN® v1.0.2/v1.0.3/v1.1
- **Frequency Bands**: CN470/IN865/RU864/EU868/US915/AU915
- **Activation**: OTAA/ABP Class A
- **Sensitivity**: -137 dBm @ 300 bps
- **Power Output**: 16 dBm Max
- **Battery**: 1200 mAh replaceable
- **Operating Temperature**: -40°C to 70°C
- **Enclosure Rating**: IP30
- **Dimensions**: 18 x 31 x 50.5 mm

## Thinger.io Integration

The Milesight WS301 integrates with Thinger.io through LoRaWAN® network servers, enabling centralized device management, real-time data visualization, and alarm configuration for security monitoring applications.

## Requirements

A LoRaWAN server is required to communicate the Milesight WS301 into Thinger.io, some options are:

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

## Use Cases

- **Building Security**: Monitor unauthorized entry through doors and windows
- **Office Access Control**: Track entry points in commercial facilities
- **Home Automation**: Integrate with smart home security systems
- **Warehouse Management**: Monitor restricted access areas
- **Retail Security**: Detect unauthorized access to storage areas

## Additional Resources

Milesight resources can be found at:

- [WS301 Datasheet](https://resource.milesight.com/milesight/iot/document/ws301-datasheet-en.pdf)
- [WS301 User Guide](https://resource.milesight.com/milesight/iot/document/ws301-user-guide-en.pdf)
- [Thinger docs](https://docs.thinger.io)