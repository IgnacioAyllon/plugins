# GS601 - LoRaWAN Vape Detector

The GS601 is a LoRaWAN® vape detector designed to identify vaping and smoking events and send alerts. Equipped with a suite of powerful embedded sensors, the GS601 simultaneously measures temperature, humidity, TVOC, and PM parameters. The device features a unique vape index sensor using laser scattering technology to detect vaping and smoking events in real-time, making it ideal for deployment in schools, restrooms, and other sensitive areas where smoking and vaping need to be monitored.

## Features

- **Vape Detection**: Laser scattering technology with vape index range 0-100
- **Multi-Sensor Monitoring**: Temperature, humidity, TVOC, PM1.0, PM2.5, and PM10 measurements
- **LoRaWAN® Connectivity**: Compatible with standard LoRaWAN® gateways and network servers
- **Class C Support**: Enables immediate downlink communication for alerts and configuration
- **Tamper Detection**: Built-in vibration sensor to detect vandalism or tampering attempts
- **Visual and Audio Alerts**: Status/alarm LED indicator and 70dB buzzer
- **NFC Configuration**: Built-in NFC for easy setup via mobile app
- **FUOTA Support**: Firmware Update Over the Air capability
- **Threshold Alarms**: Configurable alarm thresholds for all monitored parameters
- **Flexible Power**: 5V/1A via USB Type-C port or optional PoE splitter

## Technical Specifications

### LoRaWAN®
- **Frequency Bands**: RU864/IN865/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Tx Power**: 16dBm (868MHz) / 22dBm (915MHz)
- **Sensitivity**: -137dBm @ 300bps
- **Mode**: OTAA/ABP
- **Class**: C
- **Antenna**: Internal

### Sensors

**Temperature**
- Technology: Digital CMOSens® (MEMS)
- Range: -20°C to 60°C
- Accuracy: ±0.2°C
- Resolution: 0.1°C

**Humidity**
- Technology: Digital CMOSens® (MEMS)
- Range: 0% to 100% RH
- Accuracy: ±2% RH
- Resolution: 0.5% RH

**Vape Index**
- Technology: Laser Scattering
- Range: 0 to 100
- Accuracy: ±10
- Resolution: 1

**TVOC**
- Technology: MOX (MEMS)
- Range: 0 to 2000 μg/m³
- Accuracy: 20 μg/m³ ±15% of readings (1-500 μg/m³)
- Resolution: 1 μg/m³

**PM1.0, PM2.5, PM10**
- Technology: Laser Scattering
- Range: 0 to 1000 μg/m³
- Accuracy (PM1.0 & PM2.5): ±10 μg/m³ (0-100 μg/m³), ±10% (100-1000 μg/m³)
- Accuracy (PM10): ±25 μg/m³ (0-100 μg/m³), ±25% (100-1000 μg/m³)
- Resolution: 1 μg/m³

### Physical Characteristics
- **Power Supply**: 5V/1A via USB Type-C or optional PoE splitter
- **Operating Temperature**: -5°C to 45°C
- **Relative Humidity**: 0% to 95% (non-condensing)
- **Ingress Protection**: IP30
- **Dimensions**: Ø 128 × 40 mm (Ø 5.04 × 1.57 in)
- **Weight**: 178.6g
- **Color**: White
- **Installation**: Ceiling mounting
- **Buzzer**: 70dB @ 1m
- **Compliance**: CE, FCC, RoHS

## Use Cases

- School restrooms and common areas
- Educational institutions
- Office buildings and workplaces
- Healthcare facilities
- Public restrooms
- Hospitality venues
- Any indoor space requiring vaping and smoking detection

## Thinger.io Integration

The GS601 integrates seamlessly with Thinger.io through LoRaWAN®, enabling real-time monitoring of vaping events, air quality parameters, and environmental conditions.

## Requirements

A LoRaWAN server is required to communicate the GS601 into Thinger.io, some options are:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed a new Product will be created for this device.

### Configuration

The Product is already preconfigured, check that the auto provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your desire.

Configure the device using NFC via mobile app or LoRaWAN downlinks. Set appropriate threshold alarms for vape index, TVOC, and PM parameters based on your monitoring requirements.

### Usage

Start sending uplinks for autoprovisioning devices and buckets.
This product also provides a predefined dashboard and downlinks.

## Additional Resources

Milesight resources can be found at:

- [GS601 Datasheet](https://resource.milesight.com/milesight/iot/document/gs601-datasheet-en.pdf)
- [Thinger docs](https://docs.thinger.io)