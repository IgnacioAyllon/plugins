# UC1122 - Controller

The Milesight UC1122 is a compact LoRaWAN controller designed for industrial IoT applications. It provides reliable connectivity for monitoring and control through 1 digital input, 1 digital output, and 2 analog inputs, enabling easy integration with multiple wired sensors. The device features ultra-wide-distance transmission up to 10 km line of sight and is built with an industrial metal case design suitable for harsh environments.

## Features

- **LoRaWAN Connectivity**: Standard LoRaWAN protocol support with OTAA/ABP activation, Class C operation
- **I/O Interfaces**: 1 × opto-isolated digital input (3-24 VDC with pulse counter support), 1 × SPDT relay output (3A@DC Max: 30V or AC Max: 250V), 2 × analog inputs (4-20mA, 12-bit resolution)
- **Long-Range Communication**: Transmission distance up to 10 km line of sight
- **Multiple Triggering Conditions**: Configurable actions and conditions for automated control
- **Wide Operating Temperature**: -40°C to +70°C for industrial environments
- **Embedded Watchdog**: Enhanced work stability and reliability
- **Compact Design**: 79 × 60 × 24 mm dimensions with IP30 enclosure
- **Flexible Power Supply**: 5-24 VDC via 3.5mm terminal block
- **Easy Configuration**: Micro USB port with Milesight ToolBox software

## Use Cases

- Industrial process monitoring and control
- Environmental sensing and automation
- Equipment status monitoring
- Alarm and notification systems
- Remote switch control
- Water level and tank monitoring
- HVAC system integration

## Thinger.io Integration

The UC1122 integrates seamlessly with Thinger.io through LoRaWAN network servers, enabling real-time monitoring and control of connected sensors and actuators.

## Requirements

A LoRaWAN server is required to communicate the Milesight UC1122 into Thinger.io, some options are:

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

- [UC11 Series User Guide](https://resource.milesight.com/milesight/iot/document/uc11-series-user-guide-en.pdf)
- [UC11 Series Datasheet](https://www.milesight-iot.com/lorawan/controller/)
- [Thinger docs](https://docs.thinger.io)