import 'whatwg-fetch';
import 'setimmediate';
import { getEnvironment } from './src/helpers/getEnviroments';

require('dotenv').config({
    path: '.env.test',
});

jest.mock('./src/helpers/getEnviroments', () =>({
    getEnvironment: () => ({...process.env})
}));