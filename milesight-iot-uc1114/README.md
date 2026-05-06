# UC1114 - Controller

The Milesight UC1114 is a LoRaWAN controller designed for industrial IoT monitoring and control applications. It features dual digital inputs and dual relay outputs, enabling remote data acquisition and device control over long-range LoRa networks. The UC1114 supports edge intelligence with IF-THEN automation capabilities, allowing for local decision-making without constant network communication.

## Features

- **Digital Inputs**: 2 digital inputs with pulse counting capability
- **Relay Outputs**: 2 relay outputs for remote control
- **LoRaWAN Connectivity**: Long-range wireless transmission using LoRaWAN protocol
- **Edge Computing**: IF-THEN automation for local logic execution
- **Industrial Design**: IP30 enclosure rating
- **Compact Size**: 79 x 24 x 60 mm
- **Wide Operating Temperature**: -40°C to 70°C

## Use Cases

- Remote equipment control and monitoring
- Industrial automation and process control
- Pulse counting for utility metering
- Agricultural irrigation control
- Building automation systems
- Smart city infrastructure management

## Thinger.io Integration

The UC1114 integrates with Thinger.io through LoRaWAN network servers, enabling seamless data visualization, device management, and automated control workflows.

## Requirements

A LoRaWAN server is required to communicate the Milesight UC1114 into Thinger.io, some options are:

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

- [UC1114 User Guide](https://resource.milesight-iot.com/document/uc1114_user_guide_en.pdf)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/uc1114/)
- [Thinger docs](https://docs.thinger.io)