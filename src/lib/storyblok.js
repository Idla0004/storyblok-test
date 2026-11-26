import Page from "@/components/Page";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import CardGrid from "@/components/CardGrid";
import FeatureCard from "@/components/FeatureCard";
import CardCarousel from "@/components/CardCarousel";

import {
  apiPlugin,
  storyblokInit,
} from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken:
    process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    card_grid: CardGrid,
    feature_card: FeatureCard,
    card_carousel: CardCarousel,
  },
  apiOptions: {
    region: "eu",
  },
});
