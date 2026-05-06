# Milesight TS301/TS302 LoRaWAN® Temperature Sensor

The Milesight TS301/TS302 are LoRaWAN® temperature sensors with an LCD display. These devices seamlessly connect to high-accuracy PT100 temperature probes and door magnetic sensors. Ideal for the food processing, pharmaceutical storage, and cold chain industries, they comply with EN12830 regulation and support automated temperature monitoring and anti-tamper recording of data in compliance with HACCP, meeting the authenticity requirements of 21 CFR Part 11B electronic record.

## Features

- Optional high accuracy PT100 temperature probes, DS18B20 temperature probe, and TH temperature-humidity probe
- Detachable probe for self-calibration
- IP65 waterproof enclosure with dust plug, suitable for harsh environments
- Low-consumption LCD display for intuitive data reading
- Store up to 10,000 historical records locally with retransmission to prevent data loss
- Simplified PDF and CSV data export for easy documentation
- NFC for quick and easy configuration
- Built-in two large-capacity replaceable batteries (2 × 4000 mAh ER18505 Li-SOCl2)
- Type-C USB port for power supply (5V/1A)
- Supports Firmware Update Over the Air (FUOTA)
- Milesight D2D protocol support for ultra-low latency and direct control without gateways
- Threshold alarm and change alarm capabilities

## Specifications

### LoRaWAN®
- **Frequency**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **TX Power**: 16 dBm (868 MHz) / 22 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm @ 300 bps
- **Mode**: OTAA/ABP
- **Class**: A
- **Antenna**: Internal

### Sensor Connectivity
- **Connector Type**: 5-pin M12 A-Coded Male Connector
- **TS301**: 1 × Connector for Temperature/Humidity Sensor or Magnet Switch Sensor
- **TS302**: 2 × Connectors for two Temperature/Humidity Sensors or Temperature/Humidity Probe + Magnet Switch Sensor

### Physical Characteristics
- **Dimensions**: 109.35 × 29 × 75 mm
- **Operating Temperature**: -30°C to +70°C
- **Enclosure**: IP65/IP67
- **Display**: LCD Segment Code Screen

### Power
- **Power Supply**: 2 × 4000 mAh ER18505 Li-SOCl2 Batteries or Type-C USB (5V/1A)
- **Configuration**: Mobile App via NFC, Downlink, Power Button

## Use Cases

- Food processing temperature monitoring
- Pharmaceutical storage compliance
- Cold chain logistics
- HACCP-compliant temperature recording
- Healthcare and laboratory environments
- Warehouse and refrigeration monitoring

## Thinger.io Integration

The Milesight TS301/TS302 can be integrated into Thinger.io through a LoRaWAN network server, enabling remote temperature monitoring, data visualization, and automated alerts.

## Requirements

A LoRaWAN server is required to communicate the Milesight TS301/TS302 into Thinger.io, some options are:

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

- [Milesight TS30x Datasheet](https://resource.milesight.com/milesight/iot/document/ts30x-datasheet-en.pdf)
- [Milesight IoT Official Website](https://www.milesight-iot.com/)
- [Thinger.io Documentation](https://docs.thinger.io)