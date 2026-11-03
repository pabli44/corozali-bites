import { useEffect } from 'react'
import './AdSense.css'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

interface AdSenseProps {
  /** AdSense publisher ID, e.g. ca-pub-1893344905381073 */
  client: string
  /** Ad unit slot ID from your AdSense dashboard */
  slot: string
  /** Ad format, defaults to auto */
  format?: string
  /** Whether the slot should be full-width responsive */
  responsive?: boolean
}

export default function AdSense({
  client,
  slot,
  format = 'auto',
  responsive = true,
}: AdSenseProps) {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({})
      }
    } catch {
      // AdSense is not available in development or is blocked by an ad blocker.
      // The slot stays empty in those cases.
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  )
}
