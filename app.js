// Sample entry
module.exports = (retis) => {
  retis.logger.info("Sample Plugin is working!")
  retis.logger.info("Properties of the retis object:")
  retis.logger.info(retis)
  retis.logger.info("Config:")
  retis.logger.info(retis.config)
}

