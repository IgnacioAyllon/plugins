# Milesight Smart Thermostat v2

Milesight WT201 smart thermostat redefines HVAC control, employing LoRaWAN® technology for unparalleled convenience and energy efficiency. Unlike traditional thermostats, it offers remote control capabilities, aligning seamlessly with a green energy strategy. Elevate your living spaces with advanced heating and cooling management, prioritizing sustainability and eco-friendly practices.

The device features a 4.2-inch display showing temperature, humidity, and room status, and supports most 24VAC HVAC systems including furnaces and air conditioners (2H/2C), heat pumps (4H/2C or 3H/2C + 1 stage AUX heat), boilers, and PTAC units.

## Features

- **Built-in Sensors**: Temperature and humidity monitoring for environmental detection and accurate control
- **Display**: 4.2-inch intuitive screen for clear visibility of temperature, humidity, and system status
- **HVAC Compatibility**: Works with most 24VAC HVAC systems including furnaces, air conditioners, heat pumps, boilers, and PTAC
- **Temperature Control**: 4 temperature control modes (Heat, EM Heat, Cool, Auto) and 3 fan modes (Auto, On, Circulate)
- **Scheduling**: 7 working modes with up to 16 schedules per mode for flexible automation
- **Real-time Monitoring**: Timely alerts for sudden temperature changes
- **Data Storage**: Local historical records with retransmission support to prevent data loss
- **Security**: Child lock function and anti-theft installation
- **NFC Configuration**: One-touch configuration for simplified deployment
- **RTC**: Real-time clock maintains accurate time for 72 hours without power supply
- **Hotel Integration**: Compatible with hotel room card systems for remote management
- **D2D Protocol**: Supports Milesight Device-to-Device protocol for ultra-low latency control without gateway
- **Multicast**: Control multiple devices in bulk
- **FUOTA**: Firmware Update Over the Air support

## Technical Specifications

### LoRaWAN Connectivity
- **Technology**: LoRaWAN®, Milesight D2D
- **Frequency Bands**: IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **TX Power**: 16dBm (868MHz) / 22 dBm (915 MHz)
- **Sensitivity**: -137dBm
- **Activation**: OTAA/ABP
- **Class**: Class C

### Physical Characteristics
- **Dimensions**: 113 x 21 x 110 mm
- **Enclosure**: IP30
- **Operating Temperature**: -20°C to 60°C

### Measurements
- **Temperature**: INT16/10, Unit: °C
- **Humidity**: UINT8/2, Unit: %RH
- **Target Temperature**: Adjustable via display or remote control
- **Dual Target Mode**: Separate heating and cooling target temperatures

## Use Cases

- **Commercial Buildings**: Office climate control with flexible scheduling and energy optimization
- **Hotel Rooms**: Integration with card systems for occupancy-based HVAC management
- **Residential**: Smart home automation with remote control and energy efficiency
- **Industrial Facilities**: Temperature monitoring with alerts for critical environments
- **Educational Institutions**: Multi-zone climate control with centralized management
- **Healthcare**: Precise environmental control for patient comfort and equipment protection

## Thinger.io Integration

The Milesight WT201 integrates seamlessly with Thinger.io through LoRaWAN connectivity, enabling centralized device management, real-time monitoring, and automated workflows.

## Requirements

A LoRaWAN server is required to communicate the Milesight Smart Thermostat v2 into Thinger.io, some options are:

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
This product also provides a predefined dashboard and downlinks for remote temperature control, mode selection, fan control, and schedule management.

## Additional Resources

Milesight resources can be found at:

- [Datasheet](https://resource.milesight.com/milesight/iot/document/wt201-datasheet-en.pdf)
- [User Guide](https://resource.milesight.com/milesight/iot/document/wt201-user-guide-en.pdf)
- [Communication Protocol](https://resource.milesight.com/milesight/iot/document/wt201-communication-protocol-en.pdf)
- [Thinger docs](https://docs.thinger.io)