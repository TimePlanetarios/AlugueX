import { Specification } from '../model/Specification'
import {
  ISpecificationDTO,
  ISpecificationRepository,
} from './ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ISpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specification)
  }

  findByname(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    )
    return specification
  }
}