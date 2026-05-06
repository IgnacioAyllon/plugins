# Milesight UC50x Series LoRaWAN® Controller

The Milesight UC50x series is a LoRaWAN® controller used for data acquisition from various sensors and equipment. It contains different I/O interfaces such as analog input, digital input, digital output, serial port and SDI-12, which simplify the deployment and replacement of LoRaWAN® networks. For outdoor applications, it provides flexible power like built-in solar panel or high-capacity battery and is equipped with an IP67-rated enclosure and M12 connectors to protect itself from water and dust in harsh environments.

## Features

- **Multiple I/O Interfaces**: GPIO, Analog Input (AI), RS232/RS485, SDI-12 for connecting various wired sensors
- **Waterproof Design**: IP67-rated enclosure with M12 A-coded connectors
- **Flexible Power Options**: Solar panel and built-in battery support
- **Long Range Transmission**: Up to 15 km line of sight
- **Easy Configuration**: Quick wireless setup via NFC, USB Type-C or mobile app
- **LoRaWAN® Compliance**: Works with standard LoRaWAN® gateways and network servers
- **Data Reliability**: Local storage for up to 600-10,000 historical records with retransmission capability
- **Advanced Alarms**: Threshold and change alarm support
- **Multicast Support**: Control devices in bulk (UC501 only)
- **Operating Temperature**: -20°C to 60°C
- **Compact Design**: 45.5 x 116 x 116 mm

## Technical Specifications

### Wireless Communication

- **Protocol**: LoRaWAN®
- **Frequency Bands**: CN470, IN865, EU868, RU864, US915, AU915, KR920, AS923-1/2/3/4
- **Transmission Power**: 16 dBm (868 MHz), 20 dBm (915 MHz), 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm @ 300 bps
- **Activation**: OTAA/ABP
- **Class**: Class A, Class C (UC501), Class A (UC502)
- **Antenna**: Internal or External antenna (hardware optional, SMA Female connector)

### Data Interfaces

**GPIO (2 ports)**
- Logical Level: Low (0-0.8V), High (2.5-3.3V)
- Maximum Current: 20 mA
- Work Mode: Digital Input, Digital Output, Pulse Counter (software switchable)
- Input Frequency: ≤4000 Hz (suggested)

**Serial Port (1 port)**
- Type: RS232 or RS485 (software switchable)
- Baud Rate: 1200-115200 bps
- Protocol: Transparent (RS232/RS485), Modbus RTU (RS485)

**Analog Input (2 ports)**
- Resolution: 12-bit
- Input Range: 4-20 mA or 0-10 V (switchable)

**SDI-12 (1 port)**
- Protocol: SDI-12 V1.4, Transparent

**Power Output**
- 2 × 3.3V (continuous)
- 2 × 5/9/12V (switchable, 0-10 minutes before data collection)

### Other Features

- **Configuration**: Mobile app via NFC, PC software via USB Type-C, downlink commands
- **Button**: 1 × Power/Reset button (internal)
- **USB**: 1 × Type-C (internal) for configuration and console
- **LED Indicator**: 1 × Reboot/Reset (internal)
- **Interface Type**: M12 A-coded male connectors

## Thinger.io Integration

The Milesight UC50x series integrates with Thinger.io through LoRaWAN® network servers, enabling remote monitoring and control of connected sensors and equipment.

## Requirements

A LoRaWAN® server is required to communicate the Milesight UC50x series into Thinger.io. Some options are:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN® server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Check that the auto provision prefix matches the one selected in your LoRaWAN® server plugin in Thinger.io, or change it to your desire.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product also provides predefined dashboards and downlinks for controlling outputs and configuring device parameters.

## Use Cases

- Industrial automation and control
- Environmental monitoring with multiple sensor types
- Agricultural sensor data collection
- Smart city infrastructure monitoring
- Remote equipment control and supervision
- Water and wastewater management
- Energy monitoring systems

## Additional Resources

Milesight resources can be found at:

- [UC50x Series Datasheet](https://resource.milesight.com/milesight/iot/document/uc50x-series-datasheet-en.pdf)
- [UC50x Communication Protocol](https://resource.milesight.com/milesight/iot/document/uc50x-series-communication-protocol-en.pdf)
- [Milesight IoT Official Website](https://www.milesight-iot.com/)
- [Thinger.io Documentation](https://docs.thinger.io)