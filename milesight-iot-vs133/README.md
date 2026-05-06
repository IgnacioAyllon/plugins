# VS133 AI ToF People Counting Sensor

The VS133 is a LoRaWAN people counting sensor that uses second-generation ToF (Time-of-Flight) technology combined with AI algorithms to accurately count people with up to 99.8% accuracy. It provides excellent privacy protection by using ToF technology instead of cameras, making it ideal for monitoring occupancy and foot traffic in various environments.

## Features

- **High Accuracy**: Up to 99.8% counting accuracy using 2nd generation ToF technology and AI algorithms
- **Privacy-Focused**: Non-invasive ToF technology (940nm invisible light beam) ensures privacy protection
- **Wide Field of View**: 98° horizontal and 80° vertical coverage
- **Advanced Detection**: Differentiates between children and adults
- **Precise Measurement**: Less than 3.5cm measuring accuracy
- **LoRaWAN Connectivity**: Low-power, long-range wireless communication
- **Dual Models**: Available in standard (VS133) and PoE (VS133-P) versions
- **Easy Configuration**: Wi-Fi or Ethernet support for setup

## Use Cases

- Retail store traffic analysis
- Building occupancy monitoring
- Public space management
- Smart building optimization
- Queue management
- Event attendance tracking
- Workplace utilization analytics

## Technical Specifications

- **Technology**: Second-generation Time-of-Flight (ToF)
- **Light Beam**: 940nm (invisible)
- **Field of View**: 98° horizontal, 80° vertical
- **Measuring Accuracy**: < 3.5cm
- **Counting Accuracy**: Up to 99.8%
- **Power Supply**: 12VDC / 2A
- **Power Consumption**: Typical 7.8W, max 22.2W
- **Connectivity**: LoRaWAN
- **Configuration**: Wi-Fi or Ethernet

## Thinger.io Integration

The VS133 integrates with Thinger.io through LoRaWAN network servers, enabling real-time monitoring and analytics of people counting data.

## Requirements

A LoRaWAN server is required to communicate the VS133 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard for visualizing people counting data and analytics.

## Additional Resources

Milesight resources can be found at:

- [Product Information](https://www.milesight-iot.com)
- [Thinger docs](https://docs.thinger.io)