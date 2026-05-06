# Milesight VS121 AI Workplace Occupancy Sensor

The Milesight VS121 is an AI-powered workplace sensor designed to monitor occupancy and utilization in modern workspaces. Based on Artificial Intelligence technology, it achieves up to 95% recognition accuracy with the ability to sense areas of more than 78 m². The device supports up to 16 custom detection regions and bi-directional line crossing detection, enabling comprehensive space management with minimal sensor deployment. Equipped with Wi-Fi for easy configuration, the VS121 ensures 100% anonymous detection for privacy-compliant monitoring.

## Thinger.io Integration

The Milesight VS121 integrates with Thinger.io through LoRaWAN connectivity, enabling real-time occupancy data collection and analysis. The device automatically provisions itself and creates data buckets for historical tracking of workplace utilization metrics.

## Requirements

A LoRaWAN server is required to communicate the Milesight VS121 into Thinger.io, some options are:

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

- [Milesight IoT Official Website](https://www.milesight-iot.com/)
- [Thinger docs](https://docs.thinger.io)