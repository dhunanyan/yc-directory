import "server-only";

import {
  type DefinedSanityFetchType,
  type DefinedSanityLiveProps,
  defineLive,
} from "next-sanity";
import { client } from "./client";
import { type ComponentType } from "react";

export const { sanityFetch, SanityLive } = defineLive({ client }) as {
  sanityFetch: DefinedSanityFetchType;
  SanityLive: ComponentType<DefinedSanityLiveProps>;
};
