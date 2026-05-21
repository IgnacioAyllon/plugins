# TS101 - LoRaWAN Insertion Temperature Sensor

The Milesight TS101 is an all-in-one insertion temperature sensor with an integrated LoRaWAN transmitter. It is equipped with an advanced measuring unit that provides a wide temperature measuring range from -30°C to +70°C with ±0.5°C accuracy. Designed for precise internal temperature detection, the TS101 features a DS18B20 chip and stainless-steel probe, making it ideal for monitoring inner temperatures in agricultural applications such as tobacco or grain stacks. With low power consumption technology, the device can operate for up to 10 years on a 4,000mAh battery.

## Thinger.io Integration

The TS101 integrates with Thinger.io through LoRaWAN network servers, enabling remote temperature monitoring and data management for industrial and agricultural applications.

## Requirements

A LoRaWAN server is required to communicate the Milesight TS101 into Thinger.io, some options are:

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

- [Product Information](https://www.milesight-iot.com/)
- [Device Repository](https://www.thethingsnetwork.org/device-repository/devices/milesight-iot/ts101/)
- [Thinger docs](https://docs.thinger.io)