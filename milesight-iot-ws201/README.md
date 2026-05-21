# WS201 Smart Fill Level Monitor Sensor

The WS201 is a wireless fill-level monitoring sensor that securely monitors a small container's fill level, especially tissue boxes. Employing cutting-edge Time-of-Flight (ToF) technology, the WS201 delivers precise distance measurements for accurately gauging the fill levels of paper towels and toilet paper. The sensor features non-contact detection with wireless LoRaWAN® deployment, making it ideal for facilities management and washroom monitoring applications.

## Features

- **ToF Technology**: High-focusing detection ranges from 1 to 55 cm with ±1 cm accuracy
- **25° Field of View**: Optimized for small container monitoring with ±5° accuracy
- **Percentage Reporting**: Reports remaining fill amount by percentage with pre-set alarm thresholds
- **Ultra-Compact Design**: Easy installation tailored for most tissue boxes
- **Ultra-Low Power**: Standby mode ensures durable battery life
- **Damp-Proof Coating**: Reliable operation in various bathroom conditions and humid environments
- **NFC Configuration**: Simplified setup and configuration via NFC
- **LoRaWAN® Connectivity**: Compatible with standard LoRaWAN® gateways and network servers

## Use Cases

- Facilities management in commercial buildings
- Washroom supply monitoring
- Restroom maintenance optimization
- Hospitality and healthcare facility management
- Smart building applications
- Automated refill scheduling

## Thinger.io Integration

The WS201 integrates seamlessly with Thinger.io through LoRaWAN® connectivity, enabling real-time monitoring of fill levels, automated alerts, and data visualization for proactive facilities management.

## Requirements

A LoRaWAN server is required to communicate the WS201 into Thinger.io, some options are:

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

- [WS201 User Guide](https://resource.milesight.com/milesight/iot/document/ws201-user-guide-en.pdf)
- [Milesight IoT](https://www.milesight.com/)
- [Thinger docs](https://docs.thinger.io)