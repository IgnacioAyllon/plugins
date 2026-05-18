# Radar Fall Detection Sensor

The VS373 is a Radar Fall Detection Sensor that adopts millimeter wave radar technology to detect falls with high accuracy. It enables non-contact human detection using 60 GHz 4D radar point cloud data and triggers fall alarms. Supporting continuous 24-hour detection capabilities, the device operates stably both day and night without relying on visible light, ensuring 100% privacy protection as no images are captured.

## Features

- **High Accuracy Detection**: 99% fall capture rate with less than 1% false alarm rate
- **Millimeter Wave Radar**: 60 GHz frequency with 24 transmitters and 22 receivers
- **Advanced Monitoring**: Multi-bed presence detection, breathing detection, dwell detection, and human in-place detection
- **Contactless Technology**: Privacy-respecting operation without wearable devices
- **Detection Coverage**: 2m × 2m to 4m × 5m range with 70° horizontal and 140° vertical field of view
- **Installation Height**: 2.3m to 3m
- **Local Alarms**: Buzzer and LED indicator for on-site notifications
- **Data Storage**: Stores up to 1,000 historical entries locally with data retrievability
- **Dual Connectivity**: LoRaWAN and Wi-Fi (IEEE 802.11b/g/n, 2.4 GHz) for flexible data transmission
- **Digital Output**: 1 × DO interface (60V/1A) for customizable local alarms
- **Milesight D2D Protocol**: Ultra-low latency direct control without gateways

## Thinger.io Integration

The VS373 Radar Fall Detection Sensor integrates seamlessly with Thinger.io through LoRaWAN connectivity, enabling real-time monitoring of fall detection events, presence detection, and breathing rate data in cloud-based dashboards and IoT applications.

## Requirements

A LoRaWAN server is required to communicate the VS373 into Thinger.io. Supported options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Check that the auto-provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your preference.

The VS373 supports:
- **LoRaWAN Modes**: OTAA/ABP
- **LoRaWAN Class**: Class C
- **Frequency Bands**: CN470/IN865/EU868/RU864/US915/AU915/KR920/AS923-1&2&3&4
- **Network Protocols**: HTTP, MQTT (via Wi-Fi)

### Usage

Start sending uplinks for autoprovisioning devices and buckets. The device transmits fall detection events, presence status, breathing rate, and alarm notifications through LoRaWAN or Wi-Fi.

This product provides predefined dashboards for monitoring fall events, occupancy status, and breathing detection metrics.

## Use Cases

- **Healthcare Facilities**: Patient monitoring in hospitals and nursing homes
- **Elderly Care**: Fall detection in assisted living facilities and senior residences
- **Home Safety**: Independent living monitoring for elderly individuals
- **Rehabilitation Centers**: Patient safety monitoring during recovery
- **Smart Buildings**: Occupancy and safety monitoring in commercial spaces

## Additional Resources

Milesight resources can be found at:

- [VS373 Datasheet](https://resource.milesight.com/milesight/iot/document/vs373-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)