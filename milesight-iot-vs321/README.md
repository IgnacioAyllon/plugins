# Wireless AI Occupancy Sensor

The VS321 is a low-power, battery-operated wireless occupancy sensor empowered by advanced AI algorithms. It achieves up to 95% occupancy detection accuracy powered by its AI algorithm, combining PIR motion sensing with an RGB camera and embedded AI processing. The device integrates temperature, humidity, and ambient light sensors to enable comprehensive environmental monitoring and intelligent scenario-based control. Fully GDPR-compliant with no image collection, the VS321 ensures privacy and data security while providing actionable insights for workspace optimization, energy efficiency, and building automation.

## Features

- **Advanced AI-Powered Detection**: Up to 95% occupancy detection accuracy combining PIR sensor with RGB camera and AI algorithms
- **Dual Operating Modes**: Switchable between People Counting and Desk Occupancy modes for different scenarios
- **Wide Field of View**: 129° horizontal and 93° vertical coverage
- **Environmental Monitoring**: Integrated temperature, humidity, and ambient light sensors
- **PIR Motion Detection**: 115° measuring angle with 4m detection radius
- **Battery Powered**: 4 × 2700 mAh ER14505 Li-SOCl2 replaceable batteries with extended battery life (up to 5 years at 8h/day operation, 5-min intervals)
- **Low Power AI Chip**: PIR triggered detection with scheduled hibernation for reduced power consumption
- **LoRaWAN® Connectivity**: Fully compatible with standard LoRaWAN® gateways and network servers
- **Milesight D2D Protocol**: Ultra-low latency direct device-to-device control without gateway
- **Data Reliability**: Local historical storage (2045 entries) with retransmission support to prevent data loss
- **Wireless Installation**: Simple, fast deployment without wiring requirements
- **Privacy Compliant**: Fully GDPR-compliant, no image storage
- **Flexible Configuration**: Bluetooth and USB Type-C for setup and temporary power
- **Advanced Features**: Data storage, threshold alarms, hibernate mode, and data retrievability

## Technical Specifications

### Occupancy Detection
- **Field of View**: 129° horizontal, 93° vertical
- **Installation Height**: 2.4m to 4m
- **Required Illumination**: 50 Lux minimum
- **Detection Zones**: 4-8 desk detection zones

### PIR Sensor
- **Measuring Angle**: 115°
- **Detection Area**: Radius 4m (at 15°C, 3m installation height)

### Temperature Sensor
- **Technology**: Digital CMOSens® (MEMS)
- **Range**: -40°C to +125°C
- **Accuracy**: ±1°C
- **Resolution**: 0.1°C

### Humidity Sensor
- **Technology**: Digital CMOSens® (MEMS)
- **Range**: 0 to 100 %RH
- **Accuracy**: ±2.5 %RH
- **Resolution**: 0.5 %RH

### Light Sensor
- **Technology**: Photodiode
- **Status**: Bright/Dim detection

### LoRaWAN® Specifications
- **Protocol**: LoRaWAN®, Milesight D2D
- **Frequency**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1/2/3/4
- **Tx Power**: 16 dBm (868 MHz) / 20 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm @ 300 bps
- **Work Mode**: OTAA/ABP, Class A
- **Antenna**: Internal

### Power and Battery
- **Power Supply**: 4 × 2700 mAh ER14505 Li-SOCl2 replaceable batteries
- **Battery Life**: Up to 5 years (8h/day operation, 5-min detection and report interval, 25°C)
- **USB**: Type-C port for temporary power supply

### Physical Characteristics
- **Configuration**: Bluetooth, USB Type-C
- **LED Indicator**: 1 × status indicator
- **Button**: 1 × multi-function button

## Use Cases

- **Workspace Optimization**: Monitor desk and room occupancy for efficient space utilization
- **Meeting Room Management**: Track occupancy to improve scheduling and efficiency
- **Lighting Control**: Automatically adjust lighting based on room occupancy for energy savings
- **Environmental Comfort**: Monitor temperature, humidity, and ambient light for healthier work environments
- **ESG and Sustainability**: Support energy efficiency goals through intelligent automation
- **Building Automation**: Enable smart scenario-based control across facilities

## Thinger.io Integration

This device communicates via LoRaWAN®, enabling seamless integration with Thinger.io for remote monitoring, data visualization, and intelligent automation workflows.

## Requirements

A LoRaWAN® server is required to communicate the VS321 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/vs321)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/vs321-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)