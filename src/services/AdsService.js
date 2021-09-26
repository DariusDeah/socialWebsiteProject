import { AppState } from '../AppState'
import { AdsModel } from '../Models/AdsModel'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.ads = res.data.map(a => new AdsModel(a))
  }
}
export const adsService = new AdsService()
