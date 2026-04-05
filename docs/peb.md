# PEB — Route Tracker

## STATE

Current objective:

- Move Route Tracker from a single-location demo to a multi-location map built around real business data

Current step:

- Define the location data contract before spreadsheet-driven implementation

Last completed step:

- Built a working Next.js demo that reads one local address and renders one marker on the map

## NEXT ACTION (start here)

- Create `docs/design-snapshots/location-data-contract.md` defining:
  - required location fields
  - optional business fields
  - marker color driver
  - address vs coordinate expectations
  - spreadsheet row → app record transformation rules

## CONTEXT

- Current app uses one seeded local JSON record and one marker
- Expected next phase is spreadsheet-backed multiple records
- Marker color is expected to come from row data
- Google Maps API key remains an important dependency

Reference docs:

- docs/restart-brief.md
- docs/next-steps.md
- docs/implementation-plan.md

## OPEN QUESTIONS

- What spreadsheet columns actually exist?
- Which field controls marker color?
- Are rows the source of truth, or will the app normalize them into owned records?
- Will coordinates be supplied, or must addresses be geocoded?
- Does the client have a valid Google Maps API key?

## AFTER THIS STEP

- Review sample spreadsheet data
- Define `location-record` shape
- Replace single-record source with multi-record input
- Render multiple colored markers
