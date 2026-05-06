# UC1152 - Controller

The Milesight UC1152 is a LoRaWAN controller designed for industrial data acquisition and control applications. It features multiple I/O interfaces including digital input/output and serial communication ports (RS232 and RS485), enabling connectivity with various sensors and devices for remote monitoring and control.

## Thinger.io Integration

## Requirements

A LoRaWAN server is required to communicate the UC1152 into Thinger.io, some options are:

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

## Features

- **Digital Input**: 1 × Digital Input (3V to 24V DC, pulse counter support)
- **Digital Output**: 1 × Digital Output with SPDT relay contact (3A @ 30V DC / 250V AC)
- **Serial Interfaces**: 1 × RS232 and 1 × RS485
- **Serial Baud Rate**: 1200 to 115200 bps
- **LoRaWAN Connectivity**: Long-range wireless communication
- **Operating Temperature**: -40°C to 70°C
- **Enclosure**: IP30 protection
- **Dimensions**: 79 × 24 × 60 mm
- **Configuration Interface**: Micro USB port

## Use Cases

- Industrial automation and control
- Remote sensor data acquisition
- Serial device integration into LoRaWAN networks
- Pulse counting and monitoring applications
- Relay-based control systems

## Additional Resources

Milesight resources can be found at:

- [User Guide](https://resource.milesight.com/milesight/iot/document/uc11-series-user-guide-en.pdf)
- [Thinger docs](https://docs.thinger.io)