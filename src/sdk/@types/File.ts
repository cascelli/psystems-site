import { Apl } from './Apl';

// Define um namespace especifico para lidar com upload de arquivos
export namespace File {
  export type UploadRequestInput =
    Apl.components['schemas']['UploadRequestInput'];
  export type UploadRequest =
    Apl.components['schemas']['UploadRequest'];
}
