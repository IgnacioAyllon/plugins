# GS101 - LoRaWAN Gas Detector

The GS101 is a LoRaWAN® residential gas detector designed to detect natural gas leaks and send alarms. It monitors methane (CH4) leakage with a gas alarm threshold as low as 8% Lower Explosive Limit (LEL) for quick alerts in residential and commercial environments.

## Features

- **Gas Detection**: Methane (CH4) leak detection with 8% LEL alarm threshold
- **LoRaWAN® Connectivity**: Long-range wireless transmission for remote monitoring
- **Smart Valve Control**: Integrated valve control capability for automatic gas shutoff
- **Battery Monitoring**: Built-in battery level monitoring
- **Indoor Air Quality (IAQ)**: Additional air quality monitoring capabilities
- **Compact Design**: 65 x 80 x 118 mm dimensions with IP30 enclosure
- **Wide Operating Range**: -10°C to +55°C operational temperature
- **Power Supply**: 12V DC, 1A via jack connector

## Use Cases

- Residential gas leak detection and alarm
- Commercial kitchen safety monitoring
- Building automation and safety systems
- Remote gas infrastructure monitoring
- Smart home integration with automated shutoff

## Thinger.io Integration

The GS101 integrates with Thinger.io through LoRaWAN network servers, enabling real-time gas leak monitoring, automated alerts, and remote valve control capabilities.

## Requirements

A LoRaWAN server is required to communicate the GS101 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks for valve control and configuration.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/gs101)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/gs101-datasheet-en.pdf)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/gs101/)
- [Thinger docs](https://docs.thinger.io)