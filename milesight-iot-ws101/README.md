# Milesight WS101 Smart Button

The Milesight WS101 is a LoRaWAN®-based smart button for wireless controls, triggers and alarms. WS101 supports multiple press actions, all of which can be defined by the user to control devices or trigger scenes. Besides, Milesight also provides a red button that is primarily used to send SOS alarms. WS101 can be widely used in smart homes, smart offices, hotels, schools, etc.

## Features

- **LoRaWAN® Connectivity**: Standard LoRaWAN® protocol support with up to 15 km communication range
- **Multiple Press Actions**: Supports various press patterns that can be user-defined to control devices or trigger scenes
- **SOS Alarm Function**: Red button variant available for emergency alarm notifications
- **Battery Powered**: Compact design with long battery life
- **Easy Configuration**: NFC-enabled for simple setup and configuration
- **Wide Application**: Suitable for smart homes, offices, hotels, schools, and various IoT scenarios
- **Milesight IoT Cloud Compatible**: Works seamlessly with Milesight IoT Cloud platform

## Thinger.io Integration

The Milesight WS101 integrates with Thinger.io through LoRaWAN network servers, enabling remote monitoring of button press events, alarm triggers, and device status management within the Thinger.io platform.

## Requirements

A LoRaWAN server is required to communicate the Milesight WS101 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. The WS101 will transmit data when button press actions are detected, enabling real-time event tracking and alarm notifications through the Thinger.io platform.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/ws101)
- [The Things Network Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/ws101/)
- [Thinger docs](https://docs.thinger.io)