import { PageOptionsDto } from './pageOptions.dto';

interface IPageMetaConst {
  pageOptions: PageOptionsDto;
  itemCount: number;
}

export class PageMetaDto {
  page: number;

  take: number;

  itemCount: number;

  pageCount: number;

  hasPreviousPage: boolean;

  hasNextPage: boolean;

  constructor({ pageOptions, itemCount }: IPageMetaConst) {
    this.page = pageOptions.page;
    this.take = pageOptions.take;
    itemCount = itemCount;
    this.pageCount = Math.ceil(itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
