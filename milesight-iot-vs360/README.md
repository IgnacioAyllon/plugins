# IR BreakBeam People Counter

The VS360 is a people counting sensor that is based on IR Breakbeam technology. Equipped with two devices, the principle is that the target blocks the infrared beam by detecting the area to achieve the purpose of counting. The sensor offers foot traffic counting with up to 80% accuracy, providing reliable data to support informed decision-making. Based on IR Breakbeam technology, it is not affected by ambient temperature and offers more adaptability without sunlight interference.

## Features

- Up to 90% accuracy rate for bi-directional people counting
- IR Breakbeam technology unaffected by ambient temperature
- Ultra-low power consumption with up to 3-year battery life
- Wireless LoRaWAN connectivity for easy deployment
- Visual data display via OLED screen on master device
- Smart scheduled hibernate mode to save battery power
- Local historical record storage with retransmission support
- Milesight D2D protocol support for ultra-low latency control
- NFC for one-touch configuration and card emulation mode
- Detection range: 1.2m to 3m
- Installation height: 0.7m to 1.2m
- Operating temperature: -20°C to 50°C
- IP30 enclosure protection
- Dimensions: 76 x 20 x 76 mm

## Thinger.io Integration

This device integrates with Thinger.io through LoRaWAN connectivity, enabling remote monitoring of foot traffic and people counting data. The integration allows for real-time data visualization, historical analysis, and automated alerting based on counting thresholds.

## Requirements

A LoRaWAN server is required to communicate the IR BreakBeam People Counter VS360 into Thinger.io, some options are:

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

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/vs360)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/vs360-datasheet-en.pdf)
- [Thinger docs](https://docs.thinger.io)