export enum AssetTag {
  Modern = "modern",
  Classic = "classic",
  Basketball = "basketball",
  Baseball = "baseball",
  Football = "football",
  Memorabilia = "memorabilia",
  Bundle = "bundle",
  Topps = "topps",
  Fleer = "fleer",
  Panini = "panini",
  SportsImmortals = "sports_immortals",
  Card = "card",
}

export interface Asset {
  athleteName: string;
  assetName: string;
  image: string;
  tags: AssetTag[];
}

export const SEED_ASSETS: Asset[] = [
  {
    athleteName: "LeBron James",
    assetName: "2003 Black Refractor",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/a596e056-9fd6-44f4-9e48-1900dfef89f2",
    tags: [AssetTag.Modern, AssetTag.Basketball, AssetTag.Card],
  },
  {
    athleteName: "Micky Mantle",
    assetName: "1952 Topps #311 PSA NM-MT 8",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/3c00475e-b9f7-4a46-b004-db40decef8bf",
    tags: [AssetTag.Classic, AssetTag.Baseball, AssetTag.Card, AssetTag.Topps],
  },
  {
    athleteName: "Michael Jordan",
    assetName: "Game Worn & Signed Rookie Jersey",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/4d259eb4-f32d-4a6a-a2c6-f41d1c57fc38",
    tags: [AssetTag.Basketball, AssetTag.Memorabilia, AssetTag.SportsImmortals],
  },
  {
    athleteName: "Patrick Mahomes",
    assetName: "17 Panini Flawless Emerald RPA",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/018365d4-76af-4bf7-a1f0-b10159f2db64",
    tags: [AssetTag.Modern, AssetTag.Football, AssetTag.Card, AssetTag.Panini],
  },
  {
    athleteName: "Wax Box - Factory Original",
    assetName: "1986 Fleer Basketball",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/aefc10e5-8973-4fe7-be0a-ae51a2c0e8f6",
    tags: [AssetTag.Basketball, AssetTag.Card, AssetTag.Bundle, AssetTag.Fleer],
  },
  {
    athleteName: "Andre the Giant",
    assetName: "Jock strap",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/ef7a6610-efdd-4629-8bfc-bcf8938e137b",
    tags: [AssetTag.Memorabilia, AssetTag.SportsImmortals, AssetTag.Classic],
  },
  {
    athleteName: "Tom Brady",
    assetName: "2000 SP Authentic Rookie Card",
    image:
      "https://collectable-production-uploads-bucket.s3.amazonaws.com/87b14aa2-d8c8-43dc-a687-89723ea4d89f",
    tags: [AssetTag.Football, AssetTag.Card],
  },
];
