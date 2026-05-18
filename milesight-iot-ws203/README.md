# Motion&TH Sensor

The Milesight WS203 is an environmental monitoring device that combines motion and temperature/humidity (TH) sensors. Equipped with passive infrared and Fresnel Lens technology, it enables motion or occupancy detection with adjustable field angles and detecting ranges through different PIR cover types. The built-in high-accuracy temperature and humidity sensor works in conjunction with the PIR sensor to enable communicative triggers for comprehensive environmental monitoring.

## Features

- **Motion Detection**: Passive infrared sensor with Fresnel Lens for motion or occupancy detection up to 8 meters
- **Environmental Sensing**: High-accuracy temperature and humidity sensor integrated with PIR capabilities
- **Flexible Detection**: Multiple PIR cover types for adjustable field angles and detection ranges
- **Data Reliability**: Local storage of 1000 historical records with retransmission support to prevent data loss
- **NFC Configuration**: One-touch configuration with card emulation mode support
- **Safety Certified**: V0 grade flame retardant material for enhanced safety and reliability
- **LoRaWAN® Connectivity**: Compatible with standard LoRaWAN® gateways and network servers
- **Milesight D2D Protocol**: Ultra-low latency and direct control without gateway requirement
- **Compact Design**: IP30 enclosure with dimensions of 73 x 26 x 73 mm

## Technical Specifications

- **Sensors**: Battery, temperature, humidity, PIR motion
- **Operating Temperature**: -20°C to 60°C
- **Enclosure Rating**: IP30
- **Dimensions**: 73 x 26 x 73 mm
- **Wireless Protocol**: LoRaWAN®
- **Detection Range**: Up to 8 meters

## Thinger.io Integration

The Milesight WS203 integrates seamlessly with Thinger.io through LoRaWAN connectivity, enabling real-time monitoring of motion, temperature, and humidity data. The device supports automatic provisioning and provides structured uplink data for occupancy detection, environmental monitoring, and threshold-based alerts.

## Requirements

A LoRaWAN server is required to communicate the Milesight WS203 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks.

## Use Cases

- **Smart Buildings**: Occupancy detection for HVAC and lighting control
- **Space Utilization**: Monitor room occupancy and environmental conditions
- **Facility Management**: Track usage patterns and environmental compliance
- **Energy Efficiency**: Optimize heating and cooling based on presence and temperature
- **Office Management**: Workspace monitoring and comfort optimization

## Additional Resources

Milesight resources can be found at:

- [WS203 Datasheet](https://resource.milesight.com/milesight/iot/document/ws203-datasheet-en.pdf)
- [User Guide](https://resource.milesight.com/milesight/iot/document/ws203-user-guide-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)