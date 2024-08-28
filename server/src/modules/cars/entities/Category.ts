import { randomUUID } from 'node:crypto'

// Verificar essa dualidade de tipo para name, description e created_at
export class Category {
  id?: string
  name: string
  description: string
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
