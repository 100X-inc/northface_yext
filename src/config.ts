import { isProduction } from "@yext/pages/util";
import { provideHeadless } from "@yext/search-headless-react";
import type { ConfigurationProviderContextType } from "@yext/sites-react-components";
import { SandboxEndpoints } from "@yext/search-headless-react"; // Add if using a sandbox account

declare global {
  const YEXT_PUBLIC_MAPS_API_KEY: string;
  const YEXT_PUBLIC_LIVE_API_KEY: string;
  const YEXT_PUBLIC_SAVED_FILTER_ID: string;
  const YEXT_PUBLIC_MAX_LIVE_API_SUGGESTION: string;
  const YEXT_PUBLIC_LIVE_API_ENTITY_TYPES: string;
  const YEXT_PUBLIC_DEBOUNCE_TIME: number;
}

const config: ConfigurationProviderContextType = {
  components: {},
};

export default config;

// Key for Maps provider.
export const MAPS_API_KEY = YEXT_PUBLIC_MAPS_API_KEY;

// Path for the search page.
// Exported here since it's required across multiple pages such as the nearby section and directory search bar.
export const FALLBACK_SEARCH_PATH = "search";
// Static filter field for FilterSearch.
export const LOCATOR_STATIC_FILTER_FIELD = "builtin.location";
// Entity type for FilterSearch
export const LOCATOR_ENTITY_TYPE = "location";
// Radius used for the locator geolocate button.
export const GEOLOCATE_RADIUS = 50;

export const getSearchProvider = (
  apiKey: string,
  locale: string,
  domain: string
) => {
  const experienceVersion = isProduction(domain) ? "PRODUCTION" : "STAGING";

  return provideHeadless({
    apiKey,
    experienceKey: "locator",
    locale,
    verticalKey: "locations",
    experienceVersion,
    endpoints: SandboxEndpoints, // Add if using a sandbox account
  });
};