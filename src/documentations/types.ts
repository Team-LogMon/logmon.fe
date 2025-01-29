export interface IDocumentItem {
  name: string;
  link: string;
  inner?: IDocumentItem[];
}
