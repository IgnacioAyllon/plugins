# WS302 - Sound Level Sensor

The Milesight WS302 is a LoRaWAN sound level sensor with integrated microphone designed for monitoring noise levels in decibels (dB). WS302 can measure a wide range of noise levels from 30 to 120 dBA with ±3 dB accuracy and 0.1 dB resolution. The device supports multiple weighting measurements including A weighting, C weighting, and fast weighting to suit different monitoring scenarios. It can measure various values to accurately judge sound levels: actual value, equivalent continuous value, and maximum value. The sensor features an LED indicator for threshold alarms and provides more than 4 years of battery life. Built-in NFC enables easy configuration, and the device is compliant with standard LoRaWAN gateways and network servers.

## Thinger.io Integration

## Requirements

A LoRaWAN server is required to communicate the Milesight WS302 into Thinger.io, some options are:

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

## Device Specifications

- **Measurement Range:** 30 to 120 dBA
- **Accuracy:** ±3 dB
- **Resolution:** 0.1 dB
- **Weighting Types:** A weighting, C weighting, fast weighting
- **LoRaWAN Class:** Class A
- **Activation Mode:** OTAA/ABP
- **Tx Power:** 16 dBm (868 MHz) / 22 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity:** -137 dBm @ 300 bps
- **Battery Life:** More than 4 years
- **Configuration:** Built-in NFC
- **LED Indicator:** Threshold alarm indication
- **Operating Temperature:** -20°C to 60°C
- **Enclosure:** IP30
- **Dimensions:** 68 x 20.5 x 65 mm

## Use Cases

- Office and workplace noise monitoring
- Industrial environment sound level compliance
- Smart building acoustic management
- Environmental noise pollution monitoring
- Noise regulation compliance verification
- Public space sound level tracking

## Additional Resources

Milesight resources can be found at:

- [WS302 Datasheet](https://resource.milesight.com/milesight/iot/document/ws302-datasheet-en.pdf)
- [Milesight IoT Cloud](https://www.milesight-iot.com/)
- [Thinger docs](https://docs.thinger.io)