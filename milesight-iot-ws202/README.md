# Milesight WS202 PIR & Light Sensor

The Milesight WS202 is a LoRaWAN® PIR sensor based on passive infrared technology to detect motion or occupancy. The WS202 can detect whether there is movement within a range of 6-8 meters and send the changes via LoRaWAN® network. The device is equipped with a light sensor which can link PIR detection results to trigger automated scenes. With its compact size and battery-powered design, the WS202 is easy to install in any location.

## Features

- **PIR Motion Detection**: Detects movement within 6-8 meter range
- **Detection Coverage**: 120° horizontal and 100° vertical detection area
- **Light Sensing**: Integrated light sensor for brightness measurement (Bright/Dark status)
- **LoRaWAN® Connectivity**: Class A device supporting OTAA/ABP activation
- **High Sensitivity**: -137 dBm @ 300 bps
- **Compact Design**: 23.8 x 50 x 50 mm dimensions
- **Battery Powered**: Easy installation without external power requirements
- **Operating Temperature**: -30°C to 60°C
- **Enclosure Rating**: IP30

## Use Cases

- Occupancy monitoring for energy optimization
- Automatic lighting control based on motion and ambient light
- Building automation and smart office applications
- Security and presence detection
- Space utilization monitoring

## Thinger.io Integration

The Milesight WS202 integrates with Thinger.io through LoRaWAN network servers, enabling remote monitoring of motion detection and light levels. The integration allows for automated workflows, data visualization, and real-time alerting based on occupancy and lighting conditions.

## Requirements

A LoRaWAN server is required to communicate the Milesight WS202 into Thinger.io, some options are:

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

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/ws202)
- [Thinger.io Documentation](https://docs.thinger.io)