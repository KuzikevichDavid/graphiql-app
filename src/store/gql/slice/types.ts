import { QueryArgs } from '../types';

export interface HeaderItem {
  name: string;
  value: string;
}

export type HeaderIdentityItem = {
  id: string;
  isNew?: boolean;
} & HeaderItem;

export type GqlState = {
  mappedHeaders?: HeaderIdentityItem[];
} & QueryArgs;

export interface HeadersPayload {
  mappedHeaders: HeaderIdentityItem[];
  headers: Headers;
}
