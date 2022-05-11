import { Apl } from './Apl';

export namespace CashFlow {
  export type CategoryDetailed =
    Apl.components['schemas']['CashFlowCategoryDetailed'];
  export type CategorySummary =
    Apl.components['schemas']['CashFlowCategorySummary'];
  export type CategoryIdInput =
    Apl.components['schemas']['CashFlowCategoryIdInput'];
  export type CategoryMinimal =
    Apl.components['schemas']['CashFlowCategoryMinimal'];
  export type CategoryInput =
    Apl.components['schemas']['CashFlowCategoryInput'];
  export type EntryType =
    Apl.components['schemas']['CashFlowEntryType'];
  export type EntrySummary =
    Apl.components['schemas']['CashFlowEntrySummary'];
  export type EntryDetailed =
    Apl.components['schemas']['CashFlowEntryDetailed'];
  export type EntryInput =
    Apl.components['schemas']['CashFlowEntryInput'];
}
