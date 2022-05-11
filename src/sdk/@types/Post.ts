import { Apl } from './Apl';

export namespace Post {
  export type Input =
    Apl.components['schemas']['PostInput'];
  export type Detailed =
    Apl.components['schemas']['PostDetailed'];
  export type Summary =
    Apl.components['schemas']['PostSummary'];
  export type Paginated =
    Apl.components['schemas']['PostsPaginated'];
  export type WithEarnings =
    Apl.components['schemas']['PostWithEarnings'];
}
