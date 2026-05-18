# Milesight WS52x Portable Socket

The Milesight WS52x is a LoRaWAN® smart portable socket for the monitoring and control of electrical appliances. Adopting most of international socket types, WS52x can be used for turning on or off the electrical devices locally or remotely and measuring power consumption data plugged on it and even sending overcurrent alarms. WS52x can be widely used for wireless control of indoor lights, fans, heaters, machines, etc.

## Features

- **Remote and Local Control**: Turn on/off electrical devices remotely via LoRaWAN® or locally using the button
- **Power Monitoring**: Measures voltage (VAC), current (mA), power factor (%), active power (W), and power consumption (kWh)
- **High Accuracy**: Measurement accuracy typical ±3%, maximum ±5%
- **Advanced Protection**: Overcurrent protection and alarm, power outage alert
- **Flexible Configuration**: Mobile app configuration via NFC or downlink commands
- **Additional Features**: Delay switch, button lock, multicast support, Milesight D2D agent
- **International Standards**: Available in multiple socket types (EU, UK, US, AU, CN, FR)
- **Class C**: Supports Class C LoRaWAN® operation for continuous reception
- **Plug and Play**: No additional wiring required

## Technical Specifications

- **Operating Voltage**: 100~250 VAC, 50~60 Hz
- **Max Current**: 10A, 13A, 15A, or 16A (depending on model)
- **Wireless Technology**: LoRaWAN®, Milesight D2D
- **Frequency Bands**: CN470/IN865/RU864/EU868/US915/AU915/KR920/AS923-1&2&3&4
- **Tx Power**: 16 dBm (868 MHz) / 22 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm
- **Activation Mode**: OTAA/ABP
- **Class**: Class C
- **Antenna**: Internal
- **Configuration**: Mobile app via NFC or downlink
- **LED Indicator**: 1× Network/Power status LED
- **Button**: 1× Button for power on/off or reset
- **Material**: Polycarbonate (UL94 V0), White
- **Ingress Protection**: IP20
- **Operating Temperature**: -20°C to +60°C (-4°F to +140°F)
- **Relative Humidity**: 10% to 90% (non-condensing)
- **Dimensions**: 110 × 62.3 × 34.6 mm (4.33 × 2.45 × 1.36 in) (Plug not included)
- **Weight**: 117.5 g

## Available Models

- **WS523 16A-EU**: Type F, EU Standard, max current 16A
- **WS523 10A-AU**: Type I, AU Standard, max current 10A
- **WS523 13A-UK**: Type G, UK Standard, max current 13A
- **WS523 15A-US**: Type B, US Standard, max current 15A
- **WS523 10A-CN**: Type A + Type I, CN Standard, max current 10A
- **WS523 16A-CN**: Type I, CN Standard, max current 16A
- **WS523 16A-FR**: Type E, FR Standard, max current 16A

## Use Cases

- Wireless control of indoor lights
- Remote operation of fans and HVAC equipment
- Power management of heaters and climate control devices
- Machine and equipment control in industrial settings
- Energy consumption monitoring of appliances
- Smart home and building automation

## Thinger.io Integration

The Milesight WS52x integrates seamlessly with Thinger.io through LoRaWAN® network servers, enabling remote monitoring and control of connected electrical appliances with real-time power consumption data and alerts.

## Requirements

A LoRaWAN® server is required to communicate the Milesight WS52x into Thinger.io, some options are:

- [The Things Stack](https://www.thethingsindustries.com/stack/)
- [LORIOT](https://loriot.io/)
- [ChirpStack](https://www.chirpstack.io/)

Alongside, the corresponding plugin for the selected LoRaWAN® server needs to be installed in your Thinger.io instance.

## Get Started

### Installation

Look for the plugin in the [Thinger.io Plugin Store](https://marketplace.thinger.io/) and install it in your Thinger.io instance. Once the plugin is installed a new Product will be created for this device.

### Configuration

The Product is already preconfigured, check that the auto provision prefix matches the one selected in your LoRaWAN® server plugin in Thinger.io, or change it to your desire.

### Usage

Start sending uplinks for autoprovisioning devices and buckets. This product also provides a predefined dashboard and downlinks for remote control and power monitoring.

## Additional Resources

Milesight resources can be found at:

- [Product Documentation](https://resource.milesight.com/milesight/iot/document/ws52x-datasheet-en.pdf)
- [Milesight IoT Website](https://www.milesight-iot.com/)
- [Thinger.io Documentation](https://docs.thinger.io)