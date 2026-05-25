// Application controller: returns JSON for root, health and status endpoints

exports.root = (req, res) => {
  res.json({
    service: 'multi-stage-docker-app',
    message: 'Welcome — service is up',
    time: new Date().toISOString()
  });
};

exports.health = (req, res) => {
  res.json({ status: 'UP' });
};

exports.status = (req, res) => {
  // In a real app this would include DB checks, external service checks, etc.
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    memoryUsage: process.memoryUsage()
  });
};
