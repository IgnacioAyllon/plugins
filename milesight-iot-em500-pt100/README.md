# Milesight EM500-PT100 Industrial Temperature Sensor

The Milesight EM500-PT100 resistance temperature sensor is designed for measuring a wide range of temperatures in harsh environments. EM500-PT100 features a long-lasting battery life of up to 10 years, an IP67 UV-resistant and waterproof enclosure, and can be easily configured via NFC. It offers a corrosion resistance cable and multiple probe options. EM500-PT100 is widely used for temperature monitoring applications like industrial machines, ovens, pipes, etc.

## Features

- **Wide Temperature Range**: Supports multiple probe options (T050: -200°C to 50°C, T200: -50°C to 200°C, T500: -50°C to 500°C, T800: -50°C to 800°C), customizable from -200°C to 800°C
- **High Precision Measurement**: 3-wire connection with 0.1°C resolution
- **Long Range Communication**: LoRaWAN® transmission up to 10 km line of sight
- **Extended Battery Life**: Built-in 19000 mAh replaceable battery lasting up to 10 years
- **Rugged Design**: IP67 waterproof enclosure suitable for harsh environments
- **Easy Configuration**: NFC-enabled for mobile app configuration, also supports USB Type-C and downlink configuration
- **Data Storage**: Stores up to 1,000 historical records locally with retransmission capability
- **Advanced Features**: Threshold alarm, change alarm, data retrievability
- **Flexible Installation**: Pole, wall, or DIN rail mounting options
- **Corrosion Resistant**: Durable cable and probe construction for industrial use

## Technical Specifications

### LoRaWAN Communication
- **Technology**: LoRaWAN®, Milesight D2D
- **Frequency Bands**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **TX Power**: 16 dBm (868 MHz) / 20 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm @ 300 bps
- **Activation Mode**: OTAA/ABP
- **Class**: Class A
- **Antenna**: Internal

### Sensor Specifications
- **Connection Type**: 3-wire PT100
- **Temperature Resolution**: 0.1°C
- **Probe Type**: Straight tube (customizable)
- **Cable Length**: 1.5 m (customizable)

### Power
- **Battery**: 1 × 19000 mAh ER34615 Li-SOCL2 replaceable battery
- **Battery Life**: Up to 10 years (10 min interval at 25°C)

### Physical Characteristics
- **Dimensions**: 105.4 × 71 × 69.5 mm (4.1 × 2.8 × 2.7 in)
- **Weight**: 362.7 g (with battery, mounting bracket and probe)
- **Enclosure Material**: ABS + PC, Grey
- **Ingress Protection**: IP67
- **Operating Temperature**: -30°C to 70°C
- **Relative Humidity**: 0% to 100% (non-condensing)

### Compliance
- **Regulatory**: CE, FCC, ISED, ICASA, Telec
- **Environmental**: RoHS

## Use Cases

- Liquid or gas temperature monitoring
- Industrial machine monitoring
- Oven and cooking temperature control
- Chimney and boiler temperature monitoring
- Medical or laboratory applications
- Pipe temperature monitoring

## Thinger.io Integration

The Milesight EM500-PT100 can be seamlessly integrated into Thinger.io through LoRaWAN network servers, enabling remote temperature monitoring, data visualization, and alert management.

## Requirements

A LoRaWAN server is required to communicate the Milesight EM500-PT100 into Thinger.io. Supported options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Check that the auto provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or change it to your preference.

Configure the device using one of the following methods:
- **NFC**: Use the Milesight mobile app for quick configuration via NFC
- **USB Type-C**: Connect via USB for configuration through PC software
- **Downlink**: Configure remotely through LoRaWAN downlink commands

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product provides:
- Automatic device provisioning
- Real-time temperature monitoring
- Historical data storage and visualization
- Alarm notifications based on threshold or change settings
- Predefined dashboards for data analysis

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/em500-pt100)
- [Official Datasheet](https://resource.milesight.com/milesight/iot/document/em500-pt100-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)