/*

//Trocando Alganews por App

import { AlgaNews } from "./AlgaNews";

export namespace User {
  export type Input = AlgaNews.components['schemas']['UserInput']
  export type Detailed = AlgaNews.components['schemas']['UserDetailed']
  export type Summary = AlgaNews.components['schemas']['UserSummary']
  export type Minimal = AlgaNews.components['schemas']['UserMinimal']
  export type Metrics = AlgaNews.components['schemas']['UserMetrics']
  export type EditorSummary = AlgaNews.components['schemas']['EditorSummary']
  export type EditorDetailed = AlgaNews.components['schemas']['EditorDetailed']
  
  export type Role = AlgaNews.components['schemas']['Role']
  export type Skill = AlgaNews.components['schemas']['Skill']
}
*/
import { Apl } from './Apl';

export namespace User {
  export type Input =
    Apl.components['schemas']['UserInput'];
  export type Detailed =
    Apl.components['schemas']['UserDetailed'];
  export type Summary =
    Apl.components['schemas']['UserSummary'];
  export type Minimal =
    Apl.components['schemas']['UserMinimal'];
  export type Metrics =
    Apl.components['schemas']['UserMetrics'];
  export type EditorSummary =
    Apl.components['schemas']['EditorSummary'];
  export type EditorDetailed =
    Apl.components['schemas']['EditorDetailed'];

  export type Role = Apl.components['schemas']['Role'];
  export type Skill = Apl.components['schemas']['Skill'];
}
