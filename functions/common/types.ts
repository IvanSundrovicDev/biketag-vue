import { Tag } from 'biketag/lib/common/schema'
import { Entity, Schema } from 'redis-om'

export type BackgroundProcessResults = {
  results: any[]
  errors: boolean
}

export type activeQueue = {
  queuedTags: Tag[]
  completedTags: Tag[]
  timedOutTags: Tag[]
}

class RuntimeSchema extends Entity {}

export const BikeTagRuntimeSchema = new Schema(RuntimeSchema, {
  auth0Token: { type: 'string' },
})
