import React, {createContext, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';


const AxiosContext = createContext();
const {Provider} = AxiosContext;

const AxiosProvider = ({children}) => {
    const authContext = useContext(AuthContext);

    const authAxios = axios.create({
        baseURL: 'https://hse-backend-test.herokuapp.com'
    });

    const publicAxios = axios.create({
        baseURL: 'https://hse-backend-test.herokuapp.com'
    })

    authAxios.interceptors.request.use(
        config => {
            if (!config.headers.Authorization) {
                config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    const refreshAuthLogic = failedRequest => {
        const data = {
            refreshToken: authContext.authState.refreshToken,
        };

        const options = {
            method: 'POST',
            data,
            url: 'https://hse-backend-test.herokuapp.com',
        };

        return axios(options)
            .then(async tokenRefreshResponse => {
                failedRequest.response.config.headers.Authorization =
                'Bearer' + tokenRefreshResponse.data.accessToken;

                authContext.setAuthState({
                    ...authContext.authState,
                    accessToken: tokenRefreshResponse.data.accessToken,
                });

                return Promise.resolve();
            })

            .catch(e => {
                authContext.setAuthState({
                    accessToken: null,
                    refreshToken: null,
                });
            });
    };

    createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

    return (
        <Provider
        value={{
            authAxios,
            publicAxios
        }}>
            {children}
        </Provider>
    )
}
export {AxiosContext, AxiosProvider};