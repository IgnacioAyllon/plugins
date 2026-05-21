# VS341 - Desk&Seat Occupancy Sensor

The VS341 is a pro-grade occupancy sensor designed to detect whether desks or seats in a workspace are occupied, allowing for better management and optimization of space usage. The sensor combines high-precision PIR technology with an additional Thermopile IR temperature sensor to achieve up to 98% accuracy in occupancy detection. This LoRaWAN-enabled sensor enables efficient workspace management by automating desk and seat monitoring, freeing up human resources for other tasks.

## Features

- **Ultra-High Accuracy**: Up to 98% detection accuracy with dual sensing technology (PIR + Thermopile IR)
- **Advanced Sensing**: Combines PIR sensor with Thermopile IR temperature sensor for enhanced precision
- **Flexible Detection**: Different types of PIR covers for adjustable field angles and detecting ranges
- **LoRaWAN Connectivity**: Long-range wireless communication for seamless integration
- **Milesight D2D Protocol**: Ultra-low latency direct device-to-device control without gateways
- **Workspace Optimization**: Real-time desk and seat occupancy monitoring
- **Compact Design**: Easy installation on desks and seats

## Use Cases

- **Smart Office Management**: Monitor desk occupancy for hot-desking environments
- **Space Utilization**: Optimize workspace allocation based on real-time usage data
- **Facility Management**: Track seat occupancy in conference rooms, co-working spaces, and libraries
- **Resource Planning**: Analyze workspace usage patterns for better facility planning
- **Energy Efficiency**: Integrate with HVAC and lighting systems for occupancy-based automation

## Thinger.io Integration

The VS341 integrates seamlessly with Thinger.io through LoRaWAN connectivity, enabling real-time occupancy monitoring, data visualization, and workspace analytics. The integration supports automated device provisioning, data bucket creation, and dashboard visualization for efficient workspace management.

## Requirements

A LoRaWAN server is required to communicate the VS341 into Thinger.io. Supported options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

The corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Check that the auto provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your preference.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product provides predefined dashboards for occupancy monitoring and visualization.

## Additional Resources

Milesight resources can be found at:

- [Product Datasheet](https://resource.milesight.com/milesight/iot/document/vs34x-datasheet-v1.0.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)