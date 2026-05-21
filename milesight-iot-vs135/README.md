# VS135 4D AI ToF People Counting Sensor

The VS135 is a high-end people counting sensor that uses second-generation ToF (Time-of-Flight) technology combined with deep learning AI algorithms to accurately count people with excellent privacy protection. Achieving up to 99.8% counting accuracy, the VS135 delivers all-round enhancements with Ultra AI and ToF, making it ideal for large, dynamic spaces in retail, hospitality, commercial buildings, and education facilities.

## Features

- **Ultra High Accuracy**: Up to 99.8% counting accuracy using 2nd generation ToF technology and AI algorithms
- **Privacy-Compliant**: Operates without image capture, ensuring GDPR compliance and complete anonymity
- **Bi-Directional People Counting**: Up to 4 detection lines for bi-directional people counting with U-turns filtering
- **Regional People Counting**: Up to 4 detection areas (up to 10 decagons per area) with dwell time detection
- **Advanced Detection Capabilities**:
  - Children/Adults differentiation
  - Staff detection
  - Occlusion detection
  - Shopping cart fill level detection
  - Motion and dwell heat map generation
- **Multi-Device Stitching**: Supports up to 4 devices stitching to expand coverage
- **Wide Coverage**: 98° horizontal and 80° vertical field of view (standard version)
- **Detection Range**: 0.5 to 3.5 meters (standard version)
- **ToF Light Beam**: 940nm invisible light
- **Distance Measuring Accuracy**: ±3.5cm (standard version)
- **Data Retransmission**: Supports 4000 retransmission packets
- **Operating Temperature**: -20°C to 50°C
- **Enclosure**: IP40
- **Dimensions**: 180 x 26 x 72 mm

## Use Cases

- **Retail**: Understand visitor trends, peak hours, and customer behavior
- **Hospitality**: Optimize resource allocation based on occupancy patterns
- **Commercial Buildings**: Monitor space utilization and staff movement
- **Education**: Track people movement trends and optimize facility usage
- **Smart Building Management**: Analyze foot traffic for facility optimization

## Thinger.io Integration

The VS135 LoRaWAN version transmits people counting data through LoRaWAN networks, enabling seamless integration with Thinger.io for real-time monitoring, analytics, and visualization.

## Requirements

A LoRaWAN server is required to communicate the VS135 into Thinger.io, some options are:

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

- [Official Product Page](https://www.milesight.com/iot/product/lorawan-sensor/vs133-vs135)
- [VS135 Datasheet](https://resource.milesight.com/milesight/iot/document/vs135-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)