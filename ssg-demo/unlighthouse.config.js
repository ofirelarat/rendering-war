export default {
    site: 'http://localhost:3000',
    scanner: {
      throttle: true,
      device: 'mobile',
      emulate: {
        cpuSlowdownMultiplier: 4,
      },
    },
    output: {
      location: './unlighthouse-results',
    },
  };
  