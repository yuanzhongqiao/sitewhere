import {restAuthGet, restAuthPost, restAuthPut, restAuthDelete} from './sitewhere-api'

/**
 * Create a new area.
 */
export function createArea (axios, area) {
  return restAuthPost(axios, 'areas', area)
}

/**
 * Get an area by unique token.
 */
export function getArea (axios, areaToken) {
  return restAuthGet(axios, 'areas/' + areaToken)
}

/**
 * Update an existing area.
 */
export function updateArea (axios, areaToken, payload) {
  return restAuthPut(axios, 'areas/' + areaToken, payload)
}

/**
 * List areas.
 */
export function listAreas (axios, includeAssignments, includeZones, paging) {
  let query = ''
  query += (includeAssignments)
    ? '?includeAssignments=true' : '?includeAssignments=false'
  query += (includeZones)
    ? '&includeZones=true' : '&includeZones=false'
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'areas' + query)
}

/**
 * Delete an existing area.
 */
export function deleteArea (axios, areaToken, force) {
  let query = ''
  if (force) {
    query += '?force=true'
  }
  return restAuthDelete(axios, 'areas/' + areaToken + query)
}

/**
 * List assignments for an area.
 */
export function listAssignmentsForArea (axios, areaToken,
  includeDevice, includeAsset, paging) {
  let query = ''
  query += (includeDevice)
    ? '?includeDevice=true' : '?includeDevice=false'
  query += (includeAsset)
    ? '&includeAsset=true' : '&includeAsset=false'
  if (paging) {
    query += '&' + paging
  }
  return restAuthGet(axios, 'areas/' + areaToken + '/assignments' + query)
}

/**
 * List location events for an area.
 */
export function listLocationsForArea (axios, areaToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'areas/' + areaToken + '/locations' + query)
}

/**
 * List measurement events for an area.
 */
export function listMeasurementsForArea (axios, areaToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'areas/' + areaToken + '/measurements' + query)
}

/**
 * List alert events for an area.
 */
export function listAlertsForArea (axios, areaToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'areas/' + areaToken + '/alerts' + query)
}

/**
 * List zones for an area.
 */
export function listZonesForArea (axios, areaToken, paging) {
  let query = ''
  if (paging) {
    query += '?' + paging
  }
  return restAuthGet(axios, 'areas/' + areaToken + '/zones' + query)
}

/**
 * Create zone.
 */
export function createZone (axios, areaToken, payload) {
  return restAuthPost(axios, '/areas/' + areaToken + '/zones', payload)
}

/**
 * Get zone by unique token.
 */
export function getZone (axios, zoneToken) {
  return restAuthGet(axios, '/zones/' + zoneToken)
}

/**
 * Update an existing zone.
 */
export function updateZone (axios, zoneToken, payload) {
  return restAuthPut(axios, '/zones/' + zoneToken, payload)
}

/**
 * Delete zone.
 */
export function deleteZone (axios, zoneToken) {
  return restAuthDelete(axios, 'zones/' + zoneToken + '?force=true')
}
