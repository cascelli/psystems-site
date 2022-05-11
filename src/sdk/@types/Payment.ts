import { Apl } from './Apl';

export namespace Payment {
  export type Input =
    Apl.components['schemas']['PaymentInput'];
  export type Detailed =
    Apl.components['schemas']['PaymentDetailed'];
  export type Summary =
    Apl.components['schemas']['PaymentSummary'];
  export type Preview =
    Apl.components['schemas']['PaymentPreview'];
  export type PreviewInput =
    Apl.components['schemas']['PaymentPreviewInput'];
  export type Paginated =
    Apl.components['schemas']['PaymentsPaginated'];
}
