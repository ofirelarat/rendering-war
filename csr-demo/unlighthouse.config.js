export default {
    site: 'http://localhost:5173', // Your app's local development URL
    scanner: {
      throttle: true, // Enable network throttling to simulate real-world conditions
      device: 'mobile', // 'desktop' or 'mobile' for testing Core Web Vitals
      emulate: {
        cpuSlowdownMultiplier: 4, // Simulate a slower device
      },
    },
    debug: false, // Enable for verbose logs
    output: {
      location: './unlighthouse-results', // Save results to this folder
    },
  };
  