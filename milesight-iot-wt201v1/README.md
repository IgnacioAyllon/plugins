# Milesight Smart Thermostat v1

The Milesight WT201 smart thermostat redefines HVAC control, employing LoRaWAN® technology for unparalleled convenience and energy efficiency. Unlike traditional thermostats, it offers remote control capabilities, aligning seamlessly with a green energy strategy. Elevate your living spaces with advanced heating and cooling management, prioritizing sustainability and eco-friendly practices.

## Features

- **Wide HVAC Compatibility**: Works with most 24VAC HVAC systems, including furnaces and air conditioners (2H/2C), heat pumps (4H/2C or 3H/2C + 1 stage AUX heat), boilers, and PTAC
- **Intuitive Display**: 4.2-inch display showing temperature, humidity, and room status clearly
- **Built-in Sensors**: Integrated temperature and humidity sensor for environmental detection and accurate control
- **Flexible Temperature Control**: 4 temperature control modes (Heat, EM Heat, Cool, Auto) and 3 fan modes (Auto, On, Circulate)
- **Advanced Scheduling**: 7 working modes with up to 16 schedules per mode for manual or automatic temperature adjustment
- **Real-time Monitoring**: Enables timely alerts for sudden temperature changes
- **Data Security**: Local storage of historical records with retransmission support to prevent data loss
- **Safety Features**: Child lock function and anti-theft installation
- **Hotel Integration**: Compatible with hotel room card systems for remote management
- **RTC Backup**: Equipped with Real-Time Clock to keep time accurate for 72 hours without power supply
- **NFC Configuration**: One-touch configuration via NFC
- **Device-to-Device Control**: Supports Milesight D2D protocol for ultra-low latency control without gateway
- **Multicast Support**: Control devices in bulk
- **FUOTA**: Firmware Update Over the Air capability

## Technical Specifications

- **Wireless Technology**: LoRaWAN®, Milesight D2D
- **Frequency Bands**: IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **TX Power**: 16 dBm (868 MHz) / 22 dBm (915 MHz)
- **Sensitivity**: -137 dBm
- **LoRaWAN Mode**: OTAA/ABP
- **LoRaWAN Class**: Class C
- **Sensors**: Temperature and humidity
- **Enclosure**: IP30
- **Dimensions**: 113 x 21 x 110 mm
- **Operating Temperature**: -20°C to 60°C
- **HVAC Voltage**: 24VAC

## Use Cases

- Commercial and residential building HVAC automation
- Energy management in smart buildings
- Hotel room climate control systems
- Green building initiatives and sustainability projects
- Remote facility management
- Multi-zone temperature control
- Scheduled climate management for occupied/unoccupied spaces

## Thinger.io Integration

The Milesight WT201 integrates seamlessly with Thinger.io through LoRaWAN network servers, enabling remote monitoring, control, and data visualization of HVAC systems.

## Requirements

A LoRaWAN server is required to communicate the Milesight WT201 into Thinger.io, some options are:

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

- [WT201 Datasheet](https://resource.milesight.com/milesight/iot/document/wt201-datasheet-en.pdf)
- [WT201 User Guide](https://resource.milesight.com/milesight/iot/document/wt201-user-guide-en.pdf)
- [WT201 Communication Protocol](https://resource.milesight.com/milesight/iot/document/wt201-communication-protocol-en.pdf)
- [Thinger docs](https://docs.thinger.io)