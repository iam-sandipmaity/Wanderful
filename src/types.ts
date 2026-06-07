export interface Activity {
  time: string;
  title: string;
  description: string;
  locationName: string;
  cost: string;
  latitude?: number;
  longitude?: number;
}

export interface DayPlan {
  dayNumber: number;
  title: string;
  activities: Activity[];
  accommodations: string;
  tips: string;
}

export interface BudgetBreakdown {
  stays: string;
  transport: string;
  food: string;
  activities: string;
}

export interface Itinerary {
  tripName: string;
  tagline: string;
  destination: string;
  durationDays: number;
  activitiesPerDay?: number;
  startDate?: string;
  seasonalContext?: string;
  travelStyle: string;
  estimatedTotalCost: string;
  highlights: string[];
  packingList: string[];
  days: DayPlan[];
  budgetBreakdown: BudgetBreakdown;
  localSafetyAndPaceTips: string;
}

export interface PlannerState {
  startingCity: string;
  budget: string;
  days: string;
  activitiesPerDay: string;
  startDate: string;
  travelStyle: string;
}
