# Milesight EM500-SMT Soil Moisture Sensor

The Milesight EM500-SMT is designed for measuring soil moisture in harsh environments and transmitting data using LoRaWAN® technology. With this low power consumption technology, EM500-SMT can work up to 10 years with 19000 mAh battery. Combining with Milesight LoRaWAN® gateway and Milesight IoT Cloud solution, users can manage all sensor data remotely and visually.

## Features

- High precision soil moisture measurement (0-100%)
- Built-in temperature sensor (-40°C to 80°C)
- Ultra-wide-distance transmission up to 10km line of sight
- IP67 waterproof enclosure for harsh environment applications
- Built-in 19000 mAh replaceable battery with up to 10 years battery life
- Store historical records locally (1,000 entries) with retransmission support
- NFC for easy configuration
- Compliant with standard LoRaWAN® gateways and network servers
- Threshold alarm and temperature change alarm capabilities
- Corrosion-resistant probe design

## Applications

- Irrigation control
- Smart agriculture
- Greenhouse control
- Smart horticulture
- Golf course maintenance

## Technical Specifications

### LoRaWAN Connectivity

- **Technology**: LoRaWAN®, Milesight D2D
- **Frequency**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Tx Power**: 16dBm (868MHz) / 20dBm (915MHz) / 19dBm (470MHz)
- **Sensitivity**: -137dBm @ 300bps
- **Mode**: OTAA/ABP
- **Class**: Class A
- **Antenna**: Internal

### Measurements

**Soil Moisture:**
- Range: 0% to 100%
- Accuracy: ±2% (0-50%), ±3% (50-100%)
- Resolution: 0.01%

**Temperature:**
- Range: -40°C to 80°C
- Accuracy: ±0.5°C
- Resolution: 0.1°C

### Power

- **Battery**: 1 × 19000 mAh ER34615 Li-SOCl2 replaceable battery
- **Battery Life**: Up to 10 years (10 min interval, 25°C, SF7&SF10 EU868)

### Physical Characteristics

- **Operating Temperature**: -30°C to 70°C
- **Relative Humidity**: 0% to 100% (non-condensing)
- **Ingress Protection**: IP67 (Transceiver), IP68 (Soil Sensor)
- **Cable Length**: 2 m
- **Weight**: 328g (with battery and mounting bracket)
- **Housing**: ABS + PC, Grey (Transceiver) / Epoxy Resin + Stainless Steel, White + Silver (Soil Sensor)
- **Dimensions**: 69.5 × 71 × 105.4 mm

### Configuration & Interfaces

- 1 × LED Indicator (Internal)
- 1 × Power/Reset Button (Internal)
- 1 × USB Type-C (Internal) for configuration and console
- NFC for mobile app configuration
- Power on/off via NFC or power button

## Thinger.io Integration

The Milesight EM500-SMT integrates seamlessly with Thinger.io through LoRaWAN network servers, enabling remote monitoring and data management of soil moisture and temperature measurements.

## Requirements

A LoRaWAN server is required to communicate the Milesight EM500-SMT into Thinger.io, some options are:

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

- [Milesight Official Documentation](https://resource.milesight.com/)
- [Product Datasheet](https://resource.milesight.com/milesight/iot/document/em500-smtc-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)