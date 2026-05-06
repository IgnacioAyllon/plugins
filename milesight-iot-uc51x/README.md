# Milesight UC51x Series LoRaWAN® Solenoid Valve Controller

The Milesight UC51x series is a LoRaWAN® wireless solenoid valve controller used to remotely control DC latching solenoids of the valve. It contains 2 solenoid interfaces and 2 GPIO interfaces, which can be easily controlled locally or remotely. Besides ultra-low-power LoRaWAN® technology, UC51x series also provides built-in solar panel and high-capacity battery power supply for long-term operation. For outdoor applications, it equips with IP67-rated enclosure and M12 connectors to protect from water and dust under harsh environments.

## Features

- Compatible with standard 2-wire DC 12V latching solenoids
- 2 solenoid interfaces for valve control
- 2 GPIO interfaces for flow monitoring or valve status monitoring
- Solar-powered with built-in rechargeable batteries
- IP67/IP68 waterproof design with M12 A-coded male connectors
- OPEN/CLOSE control via mobile app locally or remote commands
- Support for multiple local rules enabling flexible control without network
- Pressure collection interface (AI version only) compatible with PS02 and PS03 sensors
- Transmission distance up to 15 km line of sight
- Support for Milesight D2D protocol for ultra-low latency and direct control without gateways
- NFC for easy configuration
- Time and flow control capabilities
- Support multicast for bulk control
- Timed switching of working modes for easier deployment and maintenance
- Firmware Update Over the Air (FUOTA) support

## Technical Specifications

**LoRaWAN® Connectivity**
- Technology: LoRaWAN®, Milesight D2D
- Frequency: CN470/IN865/EU868/RU864/US915/AU915/KR920/AS923-1&2&3&4
- Tx Power: 16dBm (868 MHz) / 20dBm (915 MHz) / 19dBm (470 MHz)
- Sensitivity: -137dBm @300bps
- Working Mode: OTAA/ABP, Class A, Class B, Class C
- Antenna: Internal or external antenna (hardware optional)

**Interfaces**
- Solenoid Ports: 2 × solenoid interfaces (2-wire DC 12V latching solenoids)
- GPIO Ports: 2 × digital inputs (pulse counter, logical level)
- Logical Level: Low: 0~0.8 V, High: 2.5~3.3 V
- Maximum Current: 20 mA
- Input Frequency: ≤4000 Hz (suggested)
- Pressure Collection: M12 A-coded male (AI version only)
- USB: 1 × Type-C (internal) for console
- Power Connector: 1 × M12 A-coded male interface

**Physical Characteristics**
- Dimensions: 45.5 × 116 × 116 mm
- Enclosure: IP67
- Operating Temperature: -20°C to 60°C

## Use Cases

- **Smart Irrigation**: Automated and precise irrigation control based on time, volume, or soil moisture
- **Water Flow Management**: Remote valve control for water distribution systems
- **Agricultural Automation**: Controlled irrigation strategies for farms and greenhouses
- **Smart City Applications**: Water infrastructure monitoring and control
- **Industrial Valve Control**: Remote operation of solenoid valves in industrial environments

## Thinger.io Integration

The Milesight UC51x Series integrates seamlessly with Thinger.io through LoRaWAN® connectivity, enabling remote monitoring and control of solenoid valves, flow data collection, and automated irrigation management.

## Requirements

A LoRaWAN® server is required to communicate the Milesight UC51x Series into Thinger.io, some options are:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN® server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed a new Product will be created for this device.

### Configuration

The Product is already preconfigured, check that the auto provision prefix matches the one selected in your LoRaWAN® server plugin in Thinger.io, or change it to your desire.

### Usage

Start sending uplinks for autoprovisioning devices and buckets.
This product also provides a predefined dashboard and downlinks for remote valve control and monitoring.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/iot-controller/uc51x)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/uc51x-series-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)