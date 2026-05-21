# GS301 - LoRaWAN Bathroom Odor Detector

The GS301 is a 4-in-1 LoRaWAN® bathroom odor detector designed to monitor ammonia (NH3) and hydrogen sulfide (H2S) gas levels, along with temperature and humidity. This multi-sensor device provides comprehensive environmental awareness for bathroom facilities, enabling proactive maintenance and improved hygiene management. Featuring electrochemical gas sensors with over 3 years of lifespan, the GS301 offers threshold-based alarms and supports Milesight D2D protocol for direct ventilation control.

## Features

- **Multi-Gas Detection**: Monitors ammonia (NH3) up to 10 ppm and hydrogen sulfide (H2S) up to 5 ppm using solid polymer electrochemical sensors
- **Environmental Monitoring**: Integrated temperature (-40 to 85°C) and humidity (0-100% RH) sensors
- **LoRaWAN Connectivity**: Compatible with standard LoRaWAN® gateways and network servers, supports OTAA/ABP Class A
- **Long Battery Life**: Approximately 3 years of operation with 4 × 4000 mAh ER18505 Li-SOCl2 replaceable batteries
- **Local Alarm System**: Built-in LED status/alarm indicator and buzzer for immediate notifications
- **Easy Configuration**: NFC-enabled mobile app configuration for quick setup
- **Direct Control**: Milesight D2D protocol support enables ultra-low latency ventilation control without gateways
- **Durable Design**: Damp-proof coating ensures reliable operation in bathroom environments
- **Wide Frequency Support**: Available for CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923 regions

## Technical Specifications

### Gas Sensors

**Ammonia (NH3)**
- Detection Principle: Solid Polymer Electrochemical
- Range: 0 - 10 ppm
- Accuracy: ± 5% FS (-40 to 35°C)
- Resolution: 0.01 ppm
- Long-term Stability: < 1% accuracy drift per month

**Hydrogen Sulfide (H2S)**
- Detection Principle: Solid Polymer Electrochemical
- Range: 0 - 5 ppm
- Accuracy: ± 5% FS (-40 to 35°C)
- Resolution: 0.001 ppm
- Long-term Stability: < 1% accuracy drift per month

### Environmental Sensors

**Temperature**
- Range: -40 to 85°C
- Accuracy: ± 0.2°C
- Resolution: 0.1°C

**Humidity**
- Range: 0 - 100% RH
- Accuracy: ± 2%
- Resolution: 0.5% RH

### Wireless Communication

- Protocol: LoRaWAN®, Milesight D2D
- Antenna: Internal
- Frequency: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- Tx Power: 16 dBm (868 MHz) / 19 dBm (470 MHz) / 22 dBm (915 MHz)
- Sensitivity: -137 dBm
- Mode: OTAA/ABP
- Class: A

### Power & Battery

- Power Supply: 4 × 4000 mAh ER18505 Li-SOCl2 replaceable batteries
- Sensor Life: > 3 years
- Battery Life: Approximately 3 years (10 min interval, 25°C)

### Physical Characteristics

- Dimensions: 120 × 85 × 32.5 mm (4.72 × 3.35 × 1.28 in)
- Weight: 221.4 g (batteries included)
- Housing: PC+ABS (Flame Retardant), White
- Ingress Protection: IP30
- Installation: Wall screw mounting

### Environmental & Operating Conditions

- Operating Temperature: -40°C to 55°C
- Relative Humidity: 0% - 95% (non-condensing)

### Compliance

- Regulatory: CE, FCC, EN62368
- Environmental: RoHS

## Use Cases

- **Commercial Restrooms**: Monitor air quality in shopping malls, airports, and office buildings
- **Public Facilities**: Ensure hygiene standards in stadiums, schools, and transportation hubs
- **Healthcare Facilities**: Maintain sanitary conditions in hospitals and care centers
- **Smart Buildings**: Integrate with building management systems for automated ventilation control
- **Hospitality**: Maintain comfort and cleanliness standards in hotels and restaurants
- **Industrial Facilities**: Monitor bathroom conditions in factories and warehouses

## Thinger.io Integration

The GS301 integrates seamlessly with Thinger.io through LoRaWAN network servers, enabling real-time monitoring, data visualization, and alert management for bathroom environmental conditions.

## Requirements

A LoRaWAN server is required to communicate the GS301 into Thinger.io. Recommended options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

The corresponding plugin for the selected LoRaWAN server must be installed in your Thinger.io instance.

## Get Started

### Installation

Locate the GS301 plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Upon installation, a new Product will be automatically created for this device.

### Configuration

The Product comes preconfigured with the device's data structure. Verify that the auto-provision prefix matches the configuration in your LoRaWAN server plugin, or modify it according to your requirements.

### Usage

Begin transmitting uplinks from your GS301 devices to enable automatic provisioning of devices and data buckets. This product includes predefined dashboards for monitoring gas levels, temperature, humidity, and battery status, as well as configurable threshold alarms.

## Additional Resources

Milesight GS301 resources:

- [Product Documentation](https://resource.milesight.com/milesight/iot/document/gs301-datasheet-en.pdf)
- [Milesight IoT Cloud](https://www.milesight-iot.com/iot-cloud/)
- [Thinger.io Documentation](https://docs.thinger.io)