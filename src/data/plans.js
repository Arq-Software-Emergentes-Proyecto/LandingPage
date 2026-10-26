/**
 * Planes de BuildingFex. Deben coincidir con el catálogo de la plataforma
 * (backend Billing/SubscriptionPlans y frontend billing/domain/subscriptionPlans.js).
 */
export const TRIAL_DAYS = 30

export const PORTAFOLIO = {
  pricePerDepartment: 4,
  minimumMonthly: 600,
  minimumDepartments: 150,
}

/** Módulos en el orden en que se comparan los planes. */
export const MODULES = [
  'webConsole',
  'commonAreas',
  'collections',
  'announcements',
  'documents',
  'visits',
  'aiAssistant',
  'debtVisibility',
  'aiIncidentClassification',
  'implementationAssistance',
  'multiBuildingConsole',
]

const ESSENTIAL = MODULES.slice(0, 8)

export const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    maxDepartments: 15,
    aiQueries: 150,
    support: 'emailBusinessDays',
    modules: ESSENTIAL,
    trial: true,
  },
  {
    id: 'essential',
    name: 'Essential',
    price: 79,
    maxDepartments: 15,
    aiQueries: 750,
    support: 'emailBusinessDays',
    modules: ESSENTIAL,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 159,
    minDepartments: 16,
    maxDepartments: 40,
    aiQueries: 2000,
    support: 'priority',
    modules: MODULES.slice(0, 9),
    highlighted: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: 289,
    minDepartments: 41,
    maxDepartments: 80,
    aiQueries: 4000,
    support: 'agreedResponseTimes',
    modules: MODULES.slice(0, 10),
  },
  {
    id: 'portafolio',
    name: 'Portafolio',
    price: null,
    perDepartment: PORTAFOLIO.pricePerDepartment,
    minimumMonthly: PORTAFOLIO.minimumMonthly,
    minDepartments: 81,
    aiQueries: 10000,
    support: 'sla',
    modules: [...MODULES],
  },
]
