# Mini AI Thermopile People Counter

The VS351 is a compact AI thermopile people counter designed for indoor entrance and exit applications. It offers high accuracy in bi-directional people counting, enabling effective analysis of foot traffic and efficient space management. Featuring LoRaWAN connectivity, the device provides 100% anonymity and GDPR-compliant monitoring without image capturing, free from privacy concerns.

## Features

- **High Accuracy Counting**: Bi-directional people counting with up to 95% detection rate (up to 99% for single person)
- **Dual Technology**: Combines thermopile and radar sensors (battery version) for enhanced accuracy
- **Privacy Compliant**: 100% anonymous operation without image capturing, GDPR-compliant
- **Flexible Power Options**: Available in Type-C wired version and battery-powered wireless version
- **Long Battery Life**: Up to 1.7 years battery life with ultra-low power consumption
- **Data Reliability**: Local storage of 1,000 historical records with data retransmission support
- **Easy Configuration**: Equipped with NFC for one-touch configuration via mobile app
- **Milesight D2D Protocol**: Enables ultra-low latency and direct control without gateways
- **Compact Design**: Small form factor (70 x 32 x 70 mm) for simple deployment
- **Wide Temperature Range**: Operating temperature from -20°C to 60°C

## Technical Specifications

### Measurement
- **Technology**: Thermopile + Radar (battery version only)
- **Installation Height**: 2 m to 3 m
- **Detection Width**: 3.6 m @ 3 m installation height
- **Sensor Adjustable Angle**: 0° to 90°
- **Best Operating Temperature**: 15°C to 30°C
- **Temperature Range**: -30°C to 70°C
- **Temperature Accuracy**: ±2°C

### Wireless Communication
- **Protocol**: LoRaWAN®, Milesight D2D
- **Antenna**: Internal
- **Frequency**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Tx Power**: 16 dBm (868 MHz) / 19 dBm (470 MHz) / 22 dBm (915 MHz)
- **Sensitivity**: -137 dBm
- **Mode**: OTAA/ABP
- **Class**: A

### Power Supply
- **Type-C Version**: 5V/1A via Type-C port
- **Battery Version**: 4 x 9000 mAh ER26500 Li-SOCl2 replaceable batteries
- **Battery Life**: 
  - Around 1.7 years (SF7, EU868 & US915)
  - Around 1.6 years (SF10, EU868 & US915)
  - Based on 30-minute interval, 25°C, 1000 people per day

### Physical Characteristics
- **Dimensions**: 70 x 32 x 70 mm (Type-C version)
- **Ingress Protection**: IP30
- **Operating Temperature**: -20°C to 60°C
- **Relative Humidity**: 0% to 95% (non-condensing)

### Advanced Features
- **Data Storage**: 1,000 entries
- **Data Retransmission**: Prevents data loss
- **Data Retrievability**: Historical data access
- **Milesight D2D Controller**: Direct device-to-device communication
- **Configuration**: NFC via mobile app, downlink commands

## Use Cases

- **Retail Analytics**: Monitor customer foot traffic and optimize store layouts
- **Building Management**: Track occupancy levels and space utilization
- **Smart Office**: Analyze meeting room usage and workspace efficiency
- **Public Spaces**: Manage visitor flow in museums, libraries, and public facilities
- **Queue Management**: Monitor entrance and exit patterns for better crowd control
- **ESG Compliance**: Energy-efficient monitoring supporting environmental standards

## Thinger.io Integration

The VS351 integrates seamlessly with Thinger.io through LoRaWAN network servers, enabling real-time monitoring and analysis of people counting data for smart building and retail applications.

## Requirements

A LoRaWAN server is required to communicate the VS351 into Thinger.io. Compatible options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Check that the auto-provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your preference.

Configure the device using NFC via mobile app or through downlink commands for parameters such as reporting interval, detection sensitivity, and operational modes.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product provides real-time people counting data, including:

- In/Out counting
- Temperature monitoring
- Detection status
- Battery level (battery version)

The device supports data storage and retransmission to ensure no data loss during network unavailability.

## Additional Resources

Milesight resources can be found at:

- [VS351 Datasheet](https://resource.milesight.com/milesight/iot/document/vs351-datasheet-en.pdf)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/vs351/)
- [Thinger.io Documentation](https://docs.thinger.io)