import { type Block } from 'notion-types'
import { defaultMapImageUrl } from 'notion-utils'

import { defaultPageCover, defaultPageIcon } from './config'

export const mapImageUrl = (url: string | undefined, block: Block) => {
  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  // Add debugging for image URLs
  if (url && process.env.NODE_ENV === 'development') {
    console.log('Mapping image URL:', url)
  }

  // Handle Notion image URLs more robustly
  if (url && url.includes('notion.so')) {
    // Ensure the URL has proper parameters for Notion images
    try {
      const urlObj = new URL(url)
      if (!urlObj.searchParams.has('table') && block?.space_id) {
        urlObj.searchParams.set('table', 'block')
        urlObj.searchParams.set('id', block.id)
        urlObj.searchParams.set('spaceId', block.space_id)
      }
      const enhancedUrl = urlObj.toString()
      if (process.env.NODE_ENV === 'development') {
        console.log('Enhanced Notion URL:', enhancedUrl)
      }
      return enhancedUrl
    } catch (err) {
      console.error('Error processing Notion image URL:', err)
    }
  }

  const mappedUrl = defaultMapImageUrl(url, block)
  
  if (mappedUrl && process.env.NODE_ENV === 'development') {
    console.log('Mapped to:', mappedUrl)
  }

  return mappedUrl
}
