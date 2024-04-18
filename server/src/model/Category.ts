import { randomUUID } from 'node:crypto'

// Verificar essa dualidade de tipo para name, description e created_at
export class Category {
  id?: string
  name: string | undefined
  description: string | undefined
  created_at: Date | undefined

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
