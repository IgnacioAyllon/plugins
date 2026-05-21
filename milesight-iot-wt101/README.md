# Smart Radiator Thermostat

The WT101 is a LoRaWAN® radiator thermostat designed to optimize heating control systems in residential and commercial buildings. With 1 pre-set date period and up to 16 customized heating plans, it enables smart management of heating systems and helps reduce unnecessary energy costs through automatic and intelligent temperature control.

## Features

- **Easy Installation**: Simple lock design for quick mounting on standard radiator valves without additional configuration
- **NFC Configuration**: One-touch setup via mobile app with card emulation mode support
- **Flexible Heating Plans**: Up to 16 customizable heating schedules for optimized energy management
- **Automatic Temperature Control**: Precise ambient temperature monitoring with intelligent valve adjustment
- **Advanced Protection Features**: 
  - Open-window detection for energy saving
  - Freeze protection to prevent pipe damage
  - Child lock functionality
  - Tamper alarm for security
- **Standard LoRaWAN® Compatibility**: Works seamlessly with standard LoRaWAN® gateways and network servers
- **Long Battery Life**: Approximately 5 years of operation with replaceable AA batteries
- **Multiple Valve Adapters**: Compatible with various radiator valve types including RA, RAV, RAVL, Giacomini, M28 (Comap, Herz, TA)

## Technical Specifications

### Connectivity
- **Protocol**: LoRaWAN®
- **Frequency**: IN865/RU864/EU868
- **Tx Power**: 16 dBm (868 MHz)
- **Sensitivity**: -137 dBm
- **Activation Mode**: OTAA/ABP
- **Class**: A

### Temperature Sensor
- **Type**: NTC
- **Range**: -20°C to 60°C
- **Accuracy**: ±0.5°C (0°C to 50°C)
- **Resolution**: 0.1°C

### Valve Control
- **Actuator**: Stepping Motor
- **Default Valve Fitting**: M30 × 1.5 mm
- **Optional Adapters**: RA, RAV, RAVL, Giacomini, M28 (Comap, Herz, TA)

### Power
- **Battery**: 2 × 1.5V Li-FeS2 AA replaceable batteries (3000 mAh total)
- **Battery Life**: Approximately 5 years (10 min report interval + control once during 5-month heating season at 25°C)

### Physical Characteristics
- **Dimensions**: Φ 52 × 90 mm (Φ 2.05 × 3.54 in)
- **Material**: Stainless steel + ABS
- **Color**: White
- **Ingress Protection**: IP30
- **Display**: LED display with white light
- **Buttons**: 1 × control knob, 1 × calibration & tamper button (internal), 1 × reset button (internal)

### Environmental
- **Operating Temperature**: -20°C to +60°C
- **Storage Temperature**: -40°C to +70°C (without batteries)
- **Relative Humidity**: 0% to 95% (non-condensing)

## Use Cases

- **Smart Buildings**: Automated heating control for energy-efficient building management
- **Residential Heating**: Individual room temperature control for improved comfort and cost savings
- **Commercial Properties**: Centralized heating management across multiple zones
- **Energy Management**: Monitoring and optimization of heating consumption patterns
- **Retrofit Projects**: Easy upgrade of existing radiator systems with smart controls

## Thinger.io Integration

The WT101 Smart Radiator Thermostat integrates seamlessly with Thinger.io through LoRaWAN® connectivity, enabling remote monitoring of temperature readings, valve positions, battery status, and heating schedules. The integration supports bidirectional communication for adjusting heating plans and thermostat settings remotely.

## Requirements

A LoRaWAN server is required to communicate the WT101 Smart Radiator Thermostat into Thinger.io, some options are:

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

## Additional Resources

WT101 resources can be found at:

- [Thinger docs](https://docs.thinger.io)