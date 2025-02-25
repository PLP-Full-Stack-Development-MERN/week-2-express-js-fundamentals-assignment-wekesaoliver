const logger = (req, res, next)=>{
    const timestamp = new Date().toLocaleString('en-US', { timezone: 'UTC'});
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};

module.exports = logger;