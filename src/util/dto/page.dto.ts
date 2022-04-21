import { PageMetaDto } from './pageMeta.dto';

export class PageDto<T> {
  constructor(private data: T[], private meta: PageMetaDto) {}
}
