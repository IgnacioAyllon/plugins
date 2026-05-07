# VS330 LoRaWAN Bathroom Occupancy Sensor

The VS330 is a LoRaWAN® bathroom occupancy sensor providing a cost-effective solution for monitoring the occupancy status of bathrooms and cubicles in public toilet facilities across different scenarios. Featuring dual detection technology combining PIR (Passive Infrared) and ToF (Time-of-Flight) sensors, the VS330 delivers industry-leading accuracy exceeding 99.5% while maintaining ultra-low power consumption for extended battery life.

## Key Features

- **Dual Technology Detection**: Combines PIR motion detection and ToF distance measurement for enhanced accuracy
- **High Accuracy**: Exceeds 99.5% detection accuracy with sophisticated trigger logic
- **Privacy Compliant**: 100% anonymous detection, fully compliant with GDPR regulations
- **Ultra-Low Power Consumption**: 3x 4000 mAh ER18505 Li-SOCl2 batteries with up to 4 years battery life (based on 90 detections / 7 hours per day)
- **Real-Time Updates**: Instant occupancy status reporting for responsive monitoring
- **LoRaWAN® Connectivity**: Compatible with standard LoRaWAN® gateways with 2 km communication range in urban areas
- **Wall Penetration**: Capable of penetrating thick walls for flexible installation
- **Compact Design**: 100 x 24 x 100 mm dimensions with IP30 enclosure
- **Wide Operating Range**: -20°C to 60°C operating temperature

## Use Cases

- Public restroom occupancy monitoring
- Commercial building bathroom management
- Shopping mall and retail facility monitoring
- Airport and transportation hub facilities
- Office building washroom optimization
- Smart building management systems

## Thinger.io Integration

The VS330 integrates with Thinger.io through LoRaWAN connectivity, enabling real-time monitoring and management of bathroom occupancy data through the cloud platform.

## Requirements

A LoRaWAN server is required to communicate the VS330 into Thinger.io. Compatible options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

The corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Verify that the auto provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or modify it according to your requirements.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product provides real-time occupancy status monitoring with options for predefined dashboards and historical data analysis.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/vs330)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/vs330/)
- [Thinger.io Documentation](https://docs.thinger.io)