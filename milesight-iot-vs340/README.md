# VS340 - Desk&Seat Occupancy Sensor

The VS340 is an occupancy sensor designed to detect whether desks or seats in a workspace are occupied, allowing for better management and optimization of space usage. Utilizing PIR motion detection technology, the device achieves up to 95% recognition accuracy with a wide detection area of 107° horizontal by 107° vertical. This LoRaWAN-enabled sensor is ideal for smart office applications, workspace management systems, and space utilization optimization.

## Thinger.io Integration

The VS340 integrates seamlessly with Thinger.io through LoRaWAN network server plugins, enabling real-time monitoring of desk and seat occupancy. The device automatically provisions into Thinger.io and can be configured to send occupancy status updates, supporting efficient workspace analytics and reporting.

## Requirements

A LoRaWAN server is required to communicate the VS340 into Thinger.io, some options are:

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

## Technical Specifications

- **Detection Technology:** PIR (Passive Infrared)
- **Recognition Accuracy:** Up to 95%
- **Detection Area:** 107° Horizontal × 107° Vertical
- **Enclosure:** IP30
- **Dimensions:** 73 × 26 × 73 mm
- **Operating Temperature:** -20°C to 60°C
- **Connectivity:** LoRaWAN

## Use Cases

- Smart office space management
- Workspace utilization analytics
- Desk booking and hotdesking systems
- Real-time occupancy monitoring
- Energy efficiency optimization
- Meeting room management

## Additional Resources

Milesight resources can be found at:

- [Datasheet](https://resource.milesight.com/milesight/iot/document/vs34x-datasheet-v1.0.pdf)
- [Thinger docs](https://docs.thinger.io)