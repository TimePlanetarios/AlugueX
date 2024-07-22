import { Specification } from '../model/Specification'

export interface ISpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationRepository {
  create({ name, description }: ISpecificationDTO): void
  findByname(name: string): Specification | undefined
}


