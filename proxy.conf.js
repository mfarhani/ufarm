const PROXY_CONFIG = [
  {
    'context': [
      '/api',
    ],
    'target': 'http://192.168.0.5:999/',
    // 'target': 'http://192.168.0.77:999/v1/',
    // 'target': 'http://192.168.0.77:21888/',
    // 'target': 'http://192.168.0.5:21888/',
    'secure': false,
    'changeOrigin': true,
    'logLevel': 'debug'
  }
]

module.exports = PROXY_CONFIG;
