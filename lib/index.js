"use strict";
Object.defineProperties(exports, {
  INPUT: {get: function() {
      return INPUT;
    }},
  OUTPUT: {get: function() {
      return OUTPUT;
    }},
  LOW: {get: function() {
      return LOW;
    }},
  HIGH: {get: function() {
      return HIGH;
    }},
  PULL_NONE: {get: function() {
      return PULL_NONE;
    }},
  PULL_UP: {get: function() {
      return PULL_UP;
    }},
  PULL_DOWN: {get: function() {
      return PULL_DOWN;
    }},
  DigitalOutput: {get: function() {
      return DigitalOutput;
    }},
  DigitalOutput: {get: function() {
      return DigitalOutput;
    }},
  __esModule: {value: true}
});
var $__raspi_45_peripheral__,
    $__build_47_Release_47_addon__;
var Peripheral = ($__raspi_45_peripheral__ = require("raspi-peripheral"), $__raspi_45_peripheral__ && $__raspi_45_peripheral__.__esModule && $__raspi_45_peripheral__ || {default: $__raspi_45_peripheral__}).Peripheral;
var addon = ($__build_47_Release_47_addon__ = require("./build/Release/addon"), $__build_47_Release_47_addon__ && $__build_47_Release_47_addon__.__esModule && $__build_47_Release_47_addon__ || {default: $__build_47_Release_47_addon__}).default;
var INPUT = 0;
var OUTPUT = 1;
var LOW = 0;
var HIGH = 1;
var PULL_NONE = 0;
var PULL_UP = 1;
var PULL_DOWN = 2;
addon.setCallback(function(pin, value) {
  if (pinInstances[pin]) {
    pinInstances[pin].trigger('change', value);
  }
});
function parseConfig(config) {
  var pin;
  var pullResistor;
  if (typeof config == 'number') {
    pin = config;
    pullResistor = PULL_NONE;
  } else if (typeof config == 'object') {
    pin = config.pin;
    pullResistor = config.pullResistor || PULL_NONE;
  }
  if (pinInstances[pin]) {
    throw new Error('Pin ' + pin + ' is already in use. Release that instance before instantiating.');
  }
  return {
    pin: pin,
    pullResistor: pullResistor
  };
}
var DigitalOutput = function DigitalOutput(config) {
  config = parseConfig(config);
  $traceurRuntime.superCall(this, $DigitalOutput.prototype, "constructor", [config.pin]);
  addon.init(this.pin, config.pullResistor, OUTPUT);
};
var $DigitalOutput = DigitalOutput;
($traceurRuntime.createClass)(DigitalOutput, {write: function(value) {
    if (!this.alive) {
      throw new Error('Attempted to write to a destroyed peripheral');
    }
    addon.write(this.pin, value);
  }}, {}, Peripheral);
var DigitalOutput = function DigitalOutput(config) {
  config = parseConfig(config);
  $traceurRuntime.superCall(this, $DigitalOutput.prototype, "constructor", [config.pin]);
  addon.init(this.pin, config.pullResistor, INPUT);
  this.value = addon.read(config.pin);
};
var $DigitalOutput = DigitalOutput;
($traceurRuntime.createClass)(DigitalOutput, {}, {}, Peripheral);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzYiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8wIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzgiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci85Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCQTtBQ3hCQSxLQUFLLGlCQUFpQixBQUFDLENBQUMsT0FBTTtPQ0E5QixFQUFDLEdBQUUsWUNBcUI7QUFBRSxrQkFBd0I7SUFBRSxBREE5QixDQUFDO1FBQXZCLEVBQUMsR0FBRSxZQ0FxQjtBQUFFLG1CQUF3QjtJQUFFLEFEQTlCLENBQUM7S0FBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsZ0JBQXdCO0lBQUUsQURBOUIsQ0FBQztNQUF2QixFQUFDLEdBQUUsWUNBcUI7QUFBRSxpQkFBd0I7SUFBRSxBREE5QixDQUFDO1dBQXZCLEVBQUMsR0FBRSxZQ0FxQjtBQUFFLHNCQUF3QjtJQUFFLEFEQTlCLENBQUM7U0FBdkIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsb0JBQXdCO0lBQUUsQURBOUIsQ0FBQztXQUF2QixFQUFDLEdBQUUsWUNBcUI7QUFBRSxzQkFBd0I7SUFBRSxBREE5QixDQUFDO2VBQXZCLEVBQUMsR0FBRSxZQ0FxQjtBQUFFLDBCQUF3QjtJQUFFLEFEQTlCLENBQUM7ZUFBdkIsRUFBQyxHQUFFLFlDQXFC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RyxNQUFJLENBQUMsQ0FBQztFQUM5QixNQVppQyxXQUFTLENVN0RZO0FIRHhELEFBQUksRUFBQSxnQlA2RUcsU0FBTSxjQUFZLENBQ1gsTUFBSyxDQUFHO0FBQ2xCLE9BQUssRUFBSSxDQUFBLFdBQVUsQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FRL0VoQyxBUmdGSSxnQlFoRlUsVUFBVSxBQUFDLGlEUmdGZixNQUFLLElBQUksRVEvRWlDLENSK0UvQjtBQUNqQixNQUFJLEtBQUssQUFBQyxDQUFDLElBQUcsSUFBSSxDQUFHLENBQUEsTUFBSyxhQUFhLENBQUcsTUFBSSxDQUFDLENBQUM7QUFDaEQsS0FBRyxNQUFNLEVBQUksQ0FBQSxLQUFJLEtBQUssQUFBQyxDQUFDLE1BQUssSUFBSSxDQUFDLENBQUM7QU9sRkMsQVBtRnRDLENPbkZzQztBRUF4QyxBQUFJLEVBQUEsK0JBQW9DLENBQUE7QUNBeEMsQUFBQyxlQUFjLFlBQVksQ0FBQyxBQUFDLHVCVjZFTSxXQUFTLENVNUVZO0FWcUZ4RCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSAyMDEzLTIwMTQgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+IChodHRwOi8vdGhlb3JldGljYWxpZGVhdGlvbnMuY29tKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5vZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5pbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG50byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5jb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbmZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG5hbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5GSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbkFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbkxJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5PVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG5USEUgU09GVFdBUkUuXG4qL1xuXG5pbXBvcnQgeyBQZXJpcGhlcmFsIH0gZnJvbSAncmFzcGktcGVyaXBoZXJhbCc7XG5pbXBvcnQgYWRkb24gZnJvbSAnLi9idWlsZC9SZWxlYXNlL2FkZG9uJztcblxuZXhwb3J0IHZhciBJTlBVVCA9IDA7XG5leHBvcnQgdmFyIE9VVFBVVCA9IDE7XG5cbmV4cG9ydCB2YXIgTE9XID0gMDtcbmV4cG9ydCB2YXIgSElHSCA9IDE7XG5cbmV4cG9ydCB2YXIgUFVMTF9OT05FID0gMDtcbmV4cG9ydCB2YXIgUFVMTF9VUCA9IDE7XG5leHBvcnQgdmFyIFBVTExfRE9XTiA9IDI7XG5cbmFkZG9uLnNldENhbGxiYWNrKGZ1bmN0aW9uKHBpbiwgdmFsdWUpIHtcbiAgaWYgKHBpbkluc3RhbmNlc1twaW5dKSB7XG4gICAgcGluSW5zdGFuY2VzW3Bpbl0udHJpZ2dlcignY2hhbmdlJywgdmFsdWUpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcGFyc2VDb25maWcoY29uZmlnKSB7XG4gIHZhciBwaW47XG4gIHZhciBwdWxsUmVzaXN0b3I7XG4gIGlmICh0eXBlb2YgY29uZmlnID09ICdudW1iZXInKSB7XG4gICAgcGluID0gY29uZmlnO1xuICAgIHB1bGxSZXNpc3RvciA9IFBVTExfTk9ORTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnID09ICdvYmplY3QnKSB7XG4gICAgcGluID0gY29uZmlnLnBpbjtcbiAgICBwdWxsUmVzaXN0b3IgPSBjb25maWcucHVsbFJlc2lzdG9yIHx8IFBVTExfTk9ORTtcbiAgfVxuICBpZiAocGluSW5zdGFuY2VzW3Bpbl0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BpbiAnICsgcGluICsgJyBpcyBhbHJlYWR5IGluIHVzZS4gUmVsZWFzZSB0aGF0IGluc3RhbmNlIGJlZm9yZSBpbnN0YW50aWF0aW5nLicpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGluOiBwaW4sXG4gICAgcHVsbFJlc2lzdG9yOiBwdWxsUmVzaXN0b3JcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIERpZ2l0YWxPdXRwdXQgZXh0ZW5kcyBQZXJpcGhlcmFsIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgY29uZmlnID0gcGFyc2VDb25maWcoY29uZmlnKTtcbiAgICBzdXBlcihjb25maWcucGluKTtcbiAgICBhZGRvbi5pbml0KHRoaXMucGluLCBjb25maWcucHVsbFJlc2lzdG9yLCBPVVRQVVQpO1xuICB9XG5cbiAgd3JpdGUodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWxpdmUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdGVkIHRvIHdyaXRlIHRvIGEgZGVzdHJveWVkIHBlcmlwaGVyYWwnKTtcbiAgICB9XG4gICAgYWRkb24ud3JpdGUodGhpcy5waW4sIHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlnaXRhbE91dHB1dCBleHRlbmRzIFBlcmlwaGVyYWwge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25maWcgPSBwYXJzZUNvbmZpZyhjb25maWcpO1xuICAgIHN1cGVyKGNvbmZpZy5waW4pO1xuICAgIGFkZG9uLmluaXQodGhpcy5waW4sIGNvbmZpZy5wdWxsUmVzaXN0b3IsIElOUFVUKTtcbiAgICB0aGlzLnZhbHVlID0gYWRkb24ucmVhZChjb25maWcucGluKTtcbiAgfVxufVxuLy8gVE9ETzogRW1pdCBldmVudCB3aGVuIHZhbHVlIGNoYW5nZXNcbiIsIk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGV4cG9ydHMsICRfX3BsYWNlaG9sZGVyX18wKTsiLCJ7Z2V0OiAkX19wbGFjZWhvbGRlcl9fMH0iLCJnZXQgJF9fcGxhY2Vob2xkZXJfXzAoKSB7IHJldHVybiAkX19wbGFjZWhvbGRlcl9fMTsgfSIsIl9fZXNNb2R1bGU6IHRydWUiLCJ7dmFsdWU6ICRfX3BsYWNlaG9sZGVyX18wfSIsIigkX19wbGFjZWhvbGRlcl9fMCA9IHJlcXVpcmUoJF9fcGxhY2Vob2xkZXJfXzEpLCBcbiAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIgJiYgJF9fcGxhY2Vob2xkZXJfXzMuX19lc01vZHVsZSAmJiAkX19wbGFjZWhvbGRlcl9fNCB8fCB7ZGVmYXVsdDogJF9fcGxhY2Vob2xkZXJfXzV9KSIsInZhciAkX19wbGFjZWhvbGRlcl9fMCA9ICRfX3BsYWNlaG9sZGVyX18xIiwiJHRyYWNldXJSdW50aW1lLnN1cGVyQ2FsbCgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiLCJ2YXIgJF9fcGxhY2Vob2xkZXJfXzAgPSAkX19wbGFjZWhvbGRlcl9fMSIsIigkdHJhY2V1clJ1bnRpbWUuY3JlYXRlQ2xhc3MpKCRfX3BsYWNlaG9sZGVyX18wLCAkX19wbGFjZWhvbGRlcl9fMSwgJF9fcGxhY2Vob2xkZXJfXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMykiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=