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

  // Exporta um novo tipo : Query - um objeto opcional de pesquisa para o tipo Post
  export type Query = {
    editorId?: number;
    page?: number;
    size?: number;
    showAll?: boolean;
    // sort é um array de par de chaves formado por :
    // - Qualquer propriedade do tipo PostSummary
    // - Ordenacao : ascendente(asc) ou descendente(desc) (Só pode ser uma das duas strings)
    sort?: [keyof Summary, 'asc' | 'desc'];
  };
}
