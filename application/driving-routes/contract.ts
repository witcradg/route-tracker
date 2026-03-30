export type DrivingRouteRating = "high" | "mid" | "low";

export type QuarterKey = "q1" | "q2" | "q3" | "q4";

export type QuarterlyCoinTotals = Record<QuarterKey, number | null>;

export type DrivingRouteMachineInventory = {
  style: string | null;
  hasStickers: boolean | null;
  stickerCount: number | null;
  twoInchToyMix: string[];
  oneInchToyMix: string[];
  candyGumballMix: string[];
};

export type DrivingRouteRecord = {
  id: string;
  locationName: string;
  city: string;
  address: string;
  stateCode: string;
  lastServiceDate: string | null;
  rating: DrivingRouteRating | null;
  quarterlyCoinTotals: QuarterlyCoinTotals;
  machineInventory: DrivingRouteMachineInventory;
  notes: string | null;
};
