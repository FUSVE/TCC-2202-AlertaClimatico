import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';

import { CreateStateController } from './controllers/state/CreateStateController';
import { ListStateController } from './controllers/state/ListStateController';

import { CreateCityController } from './controllers/city/CreateCityController';
import { ListCityController } from './controllers/city/ListCityController';

import { CreateRiskZoneController } from './controllers/riskzone/CreateRiskZoneController';
import { ListRiskZoneController } from './controllers/riskzone/ListRiskZoneController';

import { CreatePointInterestController } from './controllers/pointinterest/CreatePointInterestController';
import { ListPointInterestController } from './controllers/pointinterest/ListPointInterestController';

import { CreateWeatherController } from './controllers/weather/CreateWeatherController';
import { ListWeatherController } from './controllers/weather/ListWeatherController';

import { CreateCurrentWeatherController } from './controllers/currentweather/CreateCurrentWeatherController';
import { ListCurrentWeatherController } from './controllers/currentweather/ListCurrentWeatherController';

import { CreateWeatherForecastController } from './controllers/weatherforecast/CreateWeatherForecastController';
import { ListWeatherForecastController } from './controllers/weatherforecast/ListWeatherForecastController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/user-info', isAuthenticated, new DetailUserController().handle)

// -- ROTAS STATE --
router.post('/states', isAuthenticated, new CreateStateController().handle)
router.get('/states', isAuthenticated, new ListStateController().handle)

// -- ROTAS CITY --
router.post('/cities', isAuthenticated, new CreateCityController().handle)
router.get('/cities', isAuthenticated, new ListCityController().handle)

// -- ROTAS RISK ZONE --
router.post('/riskzones', isAuthenticated, new CreateRiskZoneController().handle)
router.get('/riskzones', isAuthenticated, new ListRiskZoneController().handle)

// -- ROTAS POINT INTEREST --
router.post('/pointsinterest', isAuthenticated, new CreatePointInterestController().handle)
router.get('/pointsinterest', isAuthenticated, new ListPointInterestController().handle)

// -- ROTAS WEATHER --
router.post('/weathers', isAuthenticated, new CreateWeatherController().handle)
router.get('/weathers', isAuthenticated, new ListWeatherController().handle)

// -- ROTAS CURRENT WEATHER --
router.post('/currentweathers', isAuthenticated, upload.single('file'), new CreateCurrentWeatherController().handle)
router.get('/currentweathers', isAuthenticated, new ListCurrentWeatherController().handle)

// -- ROTAS WEATHER FORECAST --
router.post('/weatherforecast', isAuthenticated, new CreateWeatherForecastController().handle)
router.get('/weatherforecast', isAuthenticated, new ListWeatherForecastController().handle)

export { router };