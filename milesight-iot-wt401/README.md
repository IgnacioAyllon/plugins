# Wireless Smart Thermostat - WT401

The WT401 is a wireless smart thermostat defined by its split-unit design, delivering unparalleled installation flexibility. Its broad compatibility empowers you to bring intelligent, unified control to a diverse spectrum of HVAC systems. Featuring an intuitive 2.7-inch E-ink display, the device allows for clear visualization of environmental conditions and control status. Equipped with a PIR sensor for human presence detection, it enables energy-saving temperature control through intelligent occupancy management.

## Features

- **Intuitive 2.7-inch E-ink display** for clear environment and control status visualization
- **PIR sensor** for human presence detection and energy-saving temperature control
- **5 external buttons** for friendly control with flexible feature switching
- **Multiple power supply options** including battery power for wire-free installation
- **Manual or automatic temperature adjustment** with 8 configurable working plans
- **NFC and Bluetooth** for one-touch configuration
- **LoRaWAN connectivity** compatible with standard gateways and network servers
- **Multicast support** for bulk control operations
- **Firmware Update Over-the-Air (FUOTA)**
- **Child lock function** and anti-theft installation for safety
- **Highly adaptable installation** compatible with walls or 60mm/86mm/118mm/120mm boxes

## Technical Specifications

### LoRaWAN Connectivity

- **Technology**: LoRaWAN
- **Antenna**: Internal
- **Frequency**: IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Tx Power**: 16dBm (868MHz) / 22dBm (915MHz)
- **Sensitivity**: -137dBm
- **Mode**: OTAA/ABP
- **Class**: Class A / Class C

### Sensors

- **Temperature Sensor**
  - Operating Principle: Digital CMOSens® technology (MEMS)
  - Range: -20°C to 60°C
  - Accuracy: Typical ± 0.2°C, Maximum ± 0.5°C
  - Resolution: 0.1°C

- **Humidity Sensor**
  - Operating Principle: Digital CMOSens® technology (MEMS)
  - Range: 0% to 100% RH
  - Accuracy: Typical ± 2% RH, Maximum ± 5% RH
  - Resolution: 0.5% RH

- **PIR Sensor**
  - Detection Area: 120° Horizontal, 90° Vertical
  - Detection Distance: Maximum 6 m

### Thermostat Features

- **HVAC Compatibility**: Works with most HVAC systems via LoRaWAN, PTAC (2H/1C), Boilers, Furnaces, or Heat Pumps (2H/1C) via Milesight UC7111 HVAC controllers, radiators via Milesight WT101/WT102 thermostats
- **Temperature Control Modes**: Heat, EM (Emergency) Heat, Cool, Auto
- **Fan Modes**: Low, Medium, High, Auto, On, Circulate
- **Advanced Features**: Local control, scheduling

### Physical Characteristics

- **Display**: 2.7-inch Black & White E-ink Screen
- **Buttons**: 5 buttons for Power On/Off, Reset, System On/Off, Temperature Up/Down, Temperature Control Mode, Fan Mode
- **Enclosure**: IP30
- **Dimensions**: 86 x 42 x 86 mm
- **Operating Temperature**: -20°C to 60°C

## Use Cases

- Commercial building climate control
- Office space temperature management
- Hotel room HVAC automation
- Residential smart home integration
- Educational facility climate optimization
- Energy-efficient building management
- Multi-zone temperature control systems

## Thinger.io Integration

The WT401 integrates with Thinger.io through LoRaWAN, enabling remote monitoring and control of HVAC systems with real-time data visualization and advanced scheduling capabilities.

## Requirements

A LoRaWAN server is required to communicate the WT401 into Thinger.io. Compatible options include:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

The corresponding plugin for the selected LoRaWAN server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed, a new Product will be created for this device.

### Configuration

The Product is already preconfigured. Verify that the auto-provision prefix matches the one selected in your LoRaWAN server plugin in Thinger.io, or adjust it as needed. Configure the device using NFC or Bluetooth for quick setup.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. The device reports temperature, humidity, PIR occupancy status, target temperatures, control modes, fan modes, and battery level. This product supports predefined dashboards and downlinks for remote thermostat control including temperature setpoints, control modes, and fan settings.

## Additional Resources

Milesight resources can be found at:

- [WT401 Datasheet](https://resource.milesight.com/milesight/iot/document/wt401-datasheet-en.pdf)
- [WT401 User Guide](https://resource.milesight.com/milesight/iot/document/wt401-user-guide-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)