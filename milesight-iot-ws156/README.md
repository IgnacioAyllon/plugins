# Milesight WS156-Smart Scene Panel

The Milesight WS156 LoRaWAN® Smart Scene Panel provides a multi-button control panel that can simply activate different pre-defined scenes with one-press. Without any additional cable, WS156 can be easily installed anywhere and used to control devices via LoRaWAN® or Milesight LoRa D2D communication protocol. It features a programmable 2.9-inch E-ink screen that can be customized to suit different scenes and applications.

## Features

- **Six Scene Buttons**: Up to 6 configurable scenes, each scene can consist of multiple devices
- **2.9-Inch E-Ink Display**: 128 × 296 pixels black & white E-ink screen with customizable display
- **NFC Configuration**: One-touch configuration and card emulation mode support
- **Dual Protocol Support**: LoRaWAN® and Milesight LoRa D2D protocol for direct device control
- **Flexible Installation**: Desktop, 3M tape mounting, or 86-box mounting without wiring
- **Long Battery Life**: Over 3 years with 2 × 590 mAh CR2450 lithium coin cell batteries (1080 min interval + 20 presses per day)
- **Standard Compliance**: Compatible with standard LoRaWAN® gateways and network servers

## Technical Specifications

### LoRaWAN®

- **Frequency Bands**: CN470/RU864/IN865/EU868/US915/AU915/KR920/AS923
- **TX Power**: 16 dBm (868 MHz) / 22 dBm (915 MHz) / 19 dBm (470 MHz)
- **Sensitivity**: -137 dBm
- **Activation**: OTAA / ABP
- **Class**: Class A

### Physical Characteristics

- **Dimensions**: 86 × 86 × 14 mm (3.39 × 3.39 × 0.55 in)
- **Weight**: Lightweight design with coin cell batteries
- **Enclosure**: IP30
- **Material**: White PC + ABS (flame-retardant)
- **Operating Temperature**: -10°C to +50°C (E-Ink Screen: 0°C to 50°C)
- **Relative Humidity**: ≤ 90% (non-condensing)

### Additional Components

- 1 × Reset Button (internal)
- 1 × LED Indicator
- Blue button light

## Use Cases

- **Smart Office**: Scene control for lighting, HVAC, and equipment
- **Smart Hotels**: Room automation and guest comfort control
- **Smart Home**: Multi-device scene activation with single button press
- **Schools**: Classroom environment control
- **Commercial Buildings**: Zone control and energy management

## Thinger.io Integration

The Milesight WS156 integrates seamlessly with Thinger.io through LoRaWAN® connectivity, enabling centralized management of scene control panels and automated workflows.

## Requirements

A LoRaWAN® server is required to communicate the Milesight WS156 into Thinger.io, some options are:

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

Start sending uplinks for autoprovisioning devices and buckets. Configure scene buttons and customize the E-ink display through downlinks. The device supports button press events and scene activation notifications.

## Additional Resources

Milesight resources can be found at:

- [Official Documentation](https://resource.milesight.com/milesight/iot/document/ws136&ws156-datasheet-en.pdf)
- [Thinger.io Documentation](https://docs.thinger.io)