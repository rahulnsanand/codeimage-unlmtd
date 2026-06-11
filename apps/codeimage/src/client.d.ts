/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_AUTH0_DOMAIN: string;
  readonly VITE_PUBLIC_AUTH0_CLIENT_ID: string;
  readonly VITE_PUBLIC_MY_CALLBACK_URL: string;
  readonly VITE_PUBLIC_AUTH0_AUDIENCE: string;
  readonly VITE_ENABLE_MSW: boolean;
  readonly VITE_MOCK_AUTH: boolean;
  readonly VITE_API_BASE_URL: string | null;
  readonly VITE_PRESET_LIMIT: number;
  readonly VITE_PRESET_LIMIT_GUEST: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '@codeimage/api/api-types' {
  export type GetProjectByIdApi = {response: any; request: any};
  export type CreateProjectApi = {response: any; request: any};
  export type UpdateProjectApi = {response: any; request: any};
  export type DeleteProjectApi = {response: any; request: any};
  export type CreatePresetApi = {response: any; request: any};
  export type UpdatePresetApi = {response: any; request: any};
  export type DeletePresetApi = {response: any; request: any};
  export type GetAllPresetApi = {response: any; request: any};
  export type UpdateProjectNameApi = {response: any; request: any};
  export type CloneProjectApi = {response: any; request: any};
}
