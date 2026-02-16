# Grain Probe

The Grain Probe is a LoRaWAN temperature monitoring sensor designed for grain storage applications. It is used as part of the 0006-000002 Grain monitor system to detect temperature variations and hot spots in stored grain, helping prevent spoilage and potential fire hazards.

## Features

- Temperature monitoring sensor
- IP64 rated enclosure for protection against dust and water
- Compact dimensions: 50 x 74 x 3000 mm
- Wide operating temperature range: -40°C to 85°C
- LoRaWAN connectivity for long-range wireless data transmission
- Low power consumption for extended deployment periods

## Use Cases

- Grain storage monitoring
- Silo temperature surveillance
- Hot spot detection in grain bins
- Agricultural storage facility management
- Commodity quality preservation

## Thinger.io Integration

The Grain Probe can be integrated into Thinger.io through a LoRaWAN network server, enabling centralized monitoring and management of grain storage temperature data.

## Requirements

A LoRaWAN server is required to communicate the Grain Probe into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks.

## Additional Resources

- [Thinger docs](https://docs.thinger.io)