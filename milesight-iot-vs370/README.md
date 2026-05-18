# VS370 Radar Human Presence Sensor

The VS370 is a LoRaWAN® Radar Human Presence Sensor that adopts Millimeter Wave Radar and PIR technology. The sensor can detect human presence or slight movement and provide accurate human mobility statistics. Featuring dual detection technology combining 24GHz radar and PIR sensors, it delivers up to 99% recognition accuracy for occupancy sensing in meeting rooms and various indoor environments.

## Key Features

- **Dual Detection Technology**: Combines 24GHz Millimeter Wave Radar and PIR sensors for enhanced accuracy
- **High Recognition Rate**: Up to 99% accuracy in detecting human presence
- **Wide Detection Coverage**: 150° detection angle for radar, 110° for PIR
- **Detection Distance**: Movement up to 7.5m, slight movement up to 4.8m
- **Privacy Protection**: 100% privacy-safe, no specific images captured
- **Low-Light Performance**: Works well in low-light or completely dark environments
- **Long Battery Life**: Up to 6.7 years battery life (50 triggers per day, SF7)
- **Flexible Configuration**: Configurable sensitivity for both PIR and radar sensors
- **Milesight D2D Protocol**: Supports ultra-low latency direct control without gateways
- **Customizable Hibernation**: Configurable hibernation periods for flexible control and battery saving
- **Light Detection**: Bright/Dim light status monitoring

## Technical Specifications

- **Sensors**: Millimeter Wave Radar (24GHz), PIR, Light
- **LoRaWAN Frequency**: CN470/IN865/EU868/RU864/US915/AU915/KR920/AS923-1&2&3&4
- **LoRaWAN Class**: Class A
- **Activation Mode**: OTAA/ABP
- **Tx Power**: 16 dBm (868 MHz) / 20 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm @300bps
- **Antenna**: Internal
- **Power Supply**: 2 × 2700 mAh ER14505 Li-SOCl2 Batteries
- **Battery Life**: Around 6.7 years (SF7, EU868 & US915), 5.3 years (SF10, EU868), 4.6 years (SF10, US915)
- **Operating Temperature**: 0°C to 30°C
- **Relative Humidity**: 0 ~ 95% (non-condensing)
- **Ingress Protection**: IP30
- **Dimensions**: Ø 70 × 48.5 mm (Ø 2.76 × 1.91 in)
- **Weight**: Body 89.6g, Magnetic bracket 38.2g
- **Housing**: ABS (UL94 V1), White
- **Installation**: Wall mounting via magnetic bracket
- **Certifications**: CE, FCC

## Configuration Options

- **NFC + Bluetooth**: Easy configuration via mobile app
- **LoRa Downlink**: Remote configuration capability
- **FUOTA**: Firmware update over the air
- **Adjustable Bracket**: Detachable and movable magnetic bracket with additional 30° deflection angle for full area coverage

## Use Cases

- Meeting room occupancy monitoring
- Office space utilization
- Smart building automation
- Energy management systems
- HVAC control optimization
- Workspace analytics

## Thinger.io Integration

## Requirements

A LoRaWAN server is required to communicate the VS370 Radar Human Presence Sensor into Thinger.io, some options are:

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

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/vs370)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/vs370-datasheet-en.pdf)
- [Thinger docs](https://docs.thinger.io)