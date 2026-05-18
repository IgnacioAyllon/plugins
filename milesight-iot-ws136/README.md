# Milesight WS136 Smart Scene Panel

The Milesight WS136 LoRaWAN® Smart Scene Panel is a multi-button control panel that enables simple one-press activation of different pre-defined scenes. Without any additional cabling, the WS136 can be easily installed anywhere and used to control devices via LoRaWAN® or Milesight LoRa D2D communication protocol. It features a user-defined E-ink screen to suit different scenes and supports up to 6 configurable scenes, with each scene capable of controlling multiple devices.

## Features

- **6 Programmable Scene Buttons**: Up to 6 scenes settable, each scene can consist of multiple devices
- **E-ink Screen**: Programmable display for flexible customization
- **NFC Capability**: One-touch configuration with NFC support and card emulation mode
- **Dual Connectivity**: Supports LoRaWAN® and Milesight D2D protocol for ultra-low latency direct control without gateway
- **Wireless Installation**: Easy installation with multiple mounting options without wiring
- **Long Battery Life**: Over 3 years battery life (1080 min interval + 20 presses per day)
- **LoRaWAN Compatibility**: Compliant with standard LoRaWAN® gateways and network servers
- **Class A Device**: OTAA/ABP activation modes supported

## Technical Specifications

### Wireless
- **Technology**: LoRaWAN®, LoRa D2D
- **Frequency**: CN470/RU864/IN865/EU868/US915/AU915/KR920/AS923
- **Tx Power**: 16 dBm (868 MHz) / 22 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm
- **Class**: Class A
- **Activation**: OTAA/ABP

### Interface
- **Scene Buttons**: 6 buttons with blue light indicator
- **Display**: Not supported on WS136 (available on WS156 model)
- **Configuration**: NFC
- **Other**: 1 × Reset Button (internal) + 1 × LED Indicator

### Power
- **Battery**: 2 × 590 mAh CR2450 Lithium Coin Cell Batteries (replaceable)
- **Battery Life**: Over 3 years (based on 1080 min interval + 20 presses per day)

### Physical
- **Dimensions**: 86 × 86 × 14 mm (3.39 × 3.39 × 0.55 in)
- **Material**: PC + ABS (flame-retardant)
- **Color**: White
- **Ingress Protection**: IP30
- **Operating Temperature**: -10°C to +50°C
- **Relative Humidity**: ≤ 90% (non-condensing)
- **Installation**: Desktop, 3M tape mounting, 86 box mounting

## Use Cases

- **Smart Office**: Control lighting, HVAC, and other building automation systems with preset office scenes
- **Smart Hotels**: Enable guests to quickly activate room scenes for comfort and convenience
- **Smart Home**: Manage home automation with customized scene control for different activities
- **Schools and Educational Facilities**: Control classroom environments with predefined settings

## Thinger.io Integration

The Milesight WS136 integrates with Thinger.io through LoRaWAN connectivity, enabling centralized monitoring and control of scene panel events and device management.

## Requirements

A LoRaWAN server is required to communicate the Milesight WS136 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. Scene button presses will generate uplink messages that can trigger actions and workflows in Thinger.io. The device supports downlinks for configuration and management.

## Additional Resources

Milesight resources can be found at:

- [Product Page](https://www.milesight.com/iot/product/lorawan-sensor/ws136)
- [Datasheet](https://resource.milesight.com/milesight/iot/document/ws136&ws156-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)