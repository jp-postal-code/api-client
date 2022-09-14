export type Fetcher = (
  url: string,
  context: FetcherContext
) => Promise<unknown>;

export interface FetcherContext {
  postalCode: string;
  signal?: AbortSignal;
}
