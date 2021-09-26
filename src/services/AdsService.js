const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class AdsService {
  async getAds() {
    const res = api.get('api/ads')
    logger.log(res.data)
  }
}
export const adsService = AdsService()
