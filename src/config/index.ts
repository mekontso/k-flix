interface IAppConfig {
    publicAppUrlBackendApi: string;
}

const config: IAppConfig = {
    publicAppUrlBackendApi: process.env.NEXT_PUBLIC_APP_URL_BACKEND_API!,
};

export function getAppConfig<T = string>(key: keyof typeof config): T {
    return config[key] as T;
}
