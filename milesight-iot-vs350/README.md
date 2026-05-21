# Passage People Counter

The VS350 is an exceptional indoor passage people counter that detects and analyzes the flow of people, allowing for optimum space management and usage. Featuring dual PIR technology, the device provides accurate bi-directional counting for passages up to 2.8 meters wide when ceiling mounted at 3 meters height. The sensor includes a built-in temperature sensor for environmental monitoring and supports data storage with retransmission capabilities to prevent data loss.

## Features

- **Dual PIR Technology**: Accurate people counting with passive infrared sensors
- **Bi-directional Counting**: Tracks people entering and exiting independently
- **Built-in Temperature Sensor**: Environmental monitoring (-30°C to +70°C range, ±0.5°C accuracy)
- **Data Storage**: Stores up to 1,000 historical records locally with retransmission support
- **LoRaWAN Connectivity**: Standard LoRaWAN protocol support (Class A)
- **Multiple Frequency Bands**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Milesight D2D Protocol**: Ultra-low latency direct control without gateways
- **NFC Configuration**: One-touch setup via mobile app with card emulation mode
- **Long Battery Life**: Up to 9.7 years (SF7, EU868, 10-min interval, 1000 people/day)
- **Flexible Installation**: Ceiling mount (≤3.0m) or wall mount (1.2m-1.3m)

## Specifications

| Parameter | Value |
|-----------|-------|
| **Detection Range** | Ceiling: 2.8m width at 3m height<br>Wall: <2.3m width at 1.2-1.3m height |
| **Installation Height** | Ceiling: ≤3.0m<br>Wall: 1.2m-1.3m |
| **Temperature Range** | -30°C to +70°C |
| **Temperature Accuracy** | ±0.5°C |
| **Best Operating Temp** | 15°C to 32°C |
| **Wireless Protocol** | LoRaWAN, Milesight D2D |
| **Frequency Bands** | CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923 |
| **Tx Power** | 16 dBm (868 MHz) / 19 dBm (470 MHz) / 22 dBm (915 MHz) |
| **Sensitivity** | -137 dBm |
| **Activation Mode** | OTAA/ABP |
| **Class** | A |
| **Power Supply** | 2 × 2700 mAh ER14505 Li-SOCl2 replaceable batteries |
| **Battery Life** | ~9.7 years (SF7, EU868)<br>~5.2 years (SF10, EU868)<br>~8.7 years (SF7, US915)<br>~4.6 years (SF10, US915) |
| **Operating Temperature** | -20°C to +60°C |
| **Humidity** | 0% - 95% (non-condensing) |
| **Ingress Protection** | IP30 |
| **Dimensions** | 100 × 70 × 21 mm |
| **Weight** | 99g (batteries included) |
| **Housing** | PC (flame retardant), white |

## Use Cases

- Retail stores: Monitor customer flow and optimize staff allocation
- Office buildings: Track space utilization and meeting room occupancy
- Public facilities: Analyze visitor patterns and manage crowd control
- Museums and exhibitions: Monitor visitor engagement and optimize layouts
- Transportation hubs: Track passenger flow for better resource management
- Healthcare facilities: Monitor patient and visitor traffic

## Thinger.io Integration

The VS350 integrates seamlessly with Thinger.io through LoRaWAN connectivity, enabling real-time monitoring of people counting data and temperature measurements. The device supports automatic provisioning and provides structured uplink data for analytics and visualization.

## Requirements

A LoRaWAN server is required to communicate the Passage People Counter into Thinger.io, some options are:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed a new Product will be created for this device.

### Configuration

The Product is already preconfigured, check that the auto provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your desire.

Configure the device via NFC using the Milesight mobile app or through LoRaWAN downlinks. Set the reporting interval according to your use case requirements.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product provides predefined dashboards for visualizing people counting data, temperature trends, and traffic patterns. Historical data storage and retransmission features ensure no data loss even during temporary connectivity issues.

## Additional Resources

Milesight resources can be found at:

- [VS350 Datasheet](https://resource.milesight.com/milesight/iot/document/vs350-datasheet-en.pdf)
- [Milesight IoT](https://www.milesight-iot.com/)
- [Thinger.io Documentation](https://docs.thinger.io)