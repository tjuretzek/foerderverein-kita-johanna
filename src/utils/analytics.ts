'use client'

import { track as vercelTrack } from '@vercel/analytics'

/**
 * Generic tracking function for client-side events
 *
 * @param eventName The name of the event to track
 * @param properties Optional properties to include with the event
 */
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  try {
    vercelTrack(eventName, properties)
    console.debug(`[Analytics] Tracked event: ${eventName}`, properties)
  } catch (error) {
    console.error(`[Analytics] Failed to track event: ${eventName}`, error)
  }
}

/**
 * Track page views
 *
 * @param pageName The name of the page being viewed
 */
export function trackPageView(pageName: string) {
  trackEvent(`Visited ${pageName}`)
}

/**
 * Track button clicks
 *
 * @param buttonName The name of the button being clicked
 * @param location The location of the button (e.g., page name, component)
 */
export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent(`Clicked ${buttonName}`, location ? { location } : undefined)
}

/**
 * Track form submissions
 *
 * @param formName The name of the form being submitted
 * @param success Whether the submission was successful
 */
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent(`${formName} ${success ? 'gesendet' : 'fehlgeschlagen'}`)
}
