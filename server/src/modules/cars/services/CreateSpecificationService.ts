import { ISpecificationRepository } from '../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByname(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists!')
    }

    this.specificationsRepository.create({ name, description })
  }
}
