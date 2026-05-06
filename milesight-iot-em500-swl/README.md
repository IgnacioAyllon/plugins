# Milesight EM500-SWL Submersible Water Level

The Milesight EM500-SWL is a LoRaWAN submersible water level sensor designed for measuring liquid levels in harsh environments. It features a stainless steel probe with corrosion resistance, an IP67/IP68 waterproof enclosure, and ultra-wide-distance transmission up to 10 km line of sight. The device includes a long-lasting 19000 mAh replaceable battery providing up to 10 years of operation, local data storage with retransmission capability, and easy configuration via NFC. With customizable measuring ranges up to 200m and high accuracy, the EM500-SWL is ideal for water tank level monitoring, river level monitoring, ISO tank level monitoring, wastewater tank monitoring, and oil storage tank level monitoring.

## Features

- **Long Range Connectivity**: LoRaWAN wireless transmission with up to 10 km line of sight
- **Customizable Range**: Measuring range from 0-3m/5m/10m (customizable up to 200m)
- **High Accuracy**: ±0.5% FS accuracy with 0.01m resolution
- **Durable Design**: IP67 transceiver and IP68 level sensor with stainless steel 304 probe
- **Extended Battery Life**: 19000 mAh replaceable battery lasting up to 10 years
- **Data Management**: Local storage of 1000 entries with retransmission and retrievability
- **Easy Configuration**: NFC-enabled mobile app configuration and USB Type-C PC software
- **Threshold Alarms**: Configurable alarm functionality for critical level monitoring
- **Wide Temperature Range**: Operating from -30°C to 70°C (transceiver), -20°C to 70°C (sensor)

## Specifications

### LoRaWAN

- **Technology**: LoRaWAN Class A
- **Frequency**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Tx Power**: 16dBm (868MHz) / 20dBm (915MHz) / 19dBm (470MHz)
- **Sensitivity**: -137dBm @ 300bps
- **Activation**: OTAA/ABP
- **Antenna**: Internal

### Measurement

- **Pressure Type**: Vented Gauge
- **Range**: 0-3m / 5m / 10m (customizable up to 200m)
- **Supported Liquid**: H2O (customizable for other liquids)
- **Accuracy**: ±0.5% FS
- **Resolution**: 0.01m
- **Long-term Stability**: ≤±0.3% FS/year

### Power

- **Battery**: 1 × 19000 mAh Li-SOCL2 (ER34615) replaceable battery
- **Battery Life** (10 min interval, 25°C):
  - 10 years (SF7 & SF10, EU868)
  - 10 years (SF7, US915)
  - ~9 years (SF10, US915)

### Physical

- **Transceiver Dimensions**: 105.4 × 71 × 69.5 mm (4.1 × 2.8 × 2.7 in)
- **Level Sensor Dimensions**: 130 × ø27 mm (5.1 × ø1.1 in)
- **Transceiver Weight**: 328g (with battery and mounting bracket)
- **Cable Length**: At least 1-1.5m longer than measuring range
- **Transceiver Material**: ABS + PC, Grey
- **Level Sensor Material**: Stainless Steel 304, Silver
- **Ingress Protection**: IP67 (transceiver) / IP68 (level sensor)
- **Operating Temperature**: -30°C to 70°C (transceiver), -20°C to 70°C (sensor)
- **Relative Humidity**: 0% to 100% (non-condensing)

### Interface

- **LED**: 1 × LED indicator (internal)
- **Button**: 1 × Power/Reset button (internal)
- **USB**: 1 × USB Type-C (internal) for configuration and console
- **Configuration**: Mobile app (via NFC), PC software (via USB Type-C), Downlink

## Thinger.io Integration

The EM500-SWL integrates with Thinger.io through LoRaWAN network servers, enabling remote monitoring and management of water level data. The integration supports automatic device provisioning, real-time data visualization, historical data analysis, and alarm notifications.

## Requirements

A LoRaWAN server is required to communicate the Milesight EM500-SWL into Thinger.io, some options are:

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

## Use Cases

- **Water Tank Level Monitoring**: Track water levels in storage tanks and reservoirs
- **River and Water Resource Monitoring**: Monitor natural water bodies for environmental and safety purposes
- **ISO Tank Level Monitoring**: Measure liquid levels in standardized intermodal containers
- **Wastewater Tank Monitoring**: Track levels in wastewater treatment and storage facilities
- **Oil Storage Tank Monitoring**: Monitor oil levels in storage facilities with corrosion-resistant probe

## Additional Resources

Milesight resources can be found at:

- [Official Datasheet](https://resource.milesight.com/milesight/iot/document/em500-swl-datasheet-en.pdf)
- [Milesight IoT Cloud](https://www.milesight-iot.com/iot-cloud/)
- [Thinger.io Documentation](https://docs.thinger.io)